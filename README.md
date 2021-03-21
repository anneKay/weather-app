# README

* Description
  Weather-app is an API that returns current weather data as JSON to user. 
  User can query for weather data for a city by searching by city.

a sample query - https://localhost:3000/v1/weather?city=lagos

* Ruby version

  Ruby 2.7.2

* System dependencies
  Node version - >=10.17.0

* Database creation
  Run rails db:create 
  Run rails db:migrate

* How to run the test suite

This API retrieves current weather data from https://openweathermap.org/current 

### Submission Date
21/03/2021
### Location of deployed application

### Time spent
5 hours
### Assumptions made
The user should search by city to retrieve weather data
The user needs to signup to be able to search for weather
### Shortcuts/Compromises made
  This solution does not have it's own validation. It only uses html5 form validation
### Stretch goals attempted
1. Has a simple UI service which can be accessed at the root route
2. Uses JWT for authentication
3. Fetched real weather data from https://openweathermap.org/current 

The deployed version of the app is hosted on heroku,  however, due to some limitations on my heroku account,  I couldn't use any of heroku's addon to setup a proxy, so this service can be tested locally only.
### Instructions to run assignment locally
  CD into the root directory
  Run bundle install
  Run yarn 
  Run rails s to start the server
  Go to http://localhost:3000 to interact with the app.
### What did you not include in your solution that you want us to know about?
  I would have used redis to cache data
  I would have added extra feature that allows user to view his recent searches/history
### Other information about your submission that you feel it's important that we know if applicable.

* ...