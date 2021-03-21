import { useState } from "react";
import fetchData from "../../utils/api";
import { useHistory } from "react-router-dom";
import { prepareQuery } from "../../utils/helper";
import CookieUtil from "../../utils/cookie";

const FormHook = () => {

  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(error);
  const [formData, setFormData] = useState({});

  const passwordError = (data) => {
    const error = 'your passwords do not match';
    if (data.confirmPassword && data.password !== data.confirmPassword) return error;
  }

  const handleChange = event => {
    setFormData({...formData, [event.target.name]: event.target.value})
  };

  const onSubmit = (event, path) => {
    event.preventDefault();
    setIsLoading(true);
    if (passwordError(formData)) {
      setError(passwordError(formData));
      setIsLoading(false);
    } else {
      fetchData(prepareQuery(`/${path}`, formData), 'POST')
        .then(response => {
          setIsLoading(false);
          CookieUtil.setItem("user", response.data);
          CookieUtil.setItem("user-auth", response.headers.authorization);
          history.push("/");
        })
        .catch((error) => {
          setIsLoading(false);
          const errorObject = (error.response.data || {});
          const responseError = errorObject.error || errorObject.message;
          if (Array.isArray(responseError)) {
            setError(responseError[0]) 
          } else {
            setError(responseError); 
          }
        });
    }
  }
  return {onSubmit, error, formData , isLoading, handleChange};

}

export default FormHook;
