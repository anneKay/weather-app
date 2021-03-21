# README

* Description
  Weather-app is an API that returns current weather data as JSON to user. 
  User can query for weather data for a city by searching by city.
  This API retrieves current weather data from https://openweathermap.org/current 

  >- A sample query - https://localhost:3000/v1/weather?city=lagos

* Ruby version

  Ruby 2.7.2

* System dependencies
  Node version - >=10.17.0

* Database creation
  Run rails db:create 
  Run rails db:migrate

* How to run the test suite
Run rspec spec

### Submission Date
21/03/2021
### Location of deployed application
https://sheltered-reaches-68131.herokuapp.com/
### Time spent
5 hours
### Assumptions made
1. The user should search by city to retrieve weather data
2. The user needs to signup to be able to search for weather
3. To make a request to retrieve weather, user needs to add the token generated during login to the request header

### Shortcuts/Compromises made
  This solution does not have it's own validation. It only uses html5 form validation
### Stretch goals attempted
1. Has a simple UI service which can be accessed at the root route
2. Uses JWT for authentication
3. Fetched real weather data from https://openweathermap.org/current 
### Instructions to run assignment locally
  1. CD into the root directory
  2.  Run bundle install
  3. Run yarn 
  4. Run rails s to start the server
  5. Go to http://localhost:3000 to interact with the app.

  6. To interact with the API only
  7. Go to `http://localhost:3000/v1/users` to sign up, 
  ```params => {email: email, name:name, password:password}```

  8. Go to `http://localhost:3000/v1/auth/login` to login, 
  ```params => auth: { email:email, password:password}```

  9. Run `http://localhost:3000/v1/weather?city={city}` to retrieve weather information. To run this request successfuly, add user token to request header; Authorization: "Bearer #{token}"
### What did you not include in your solution that you want us to know about?
  1. I would have used redis to cache data
 2. I would have added extra feature that allows user to view his recent searches/history
  3. I would also write more unit test both for the backend and frontend
### Other information about your submission that you feel it's important that we know if applicable.

* ...