# WD70B-workoutLog

## Important implementation note:
Pay special attention to db.js - note the **port number** indicated that is different than the default. This is due to previous installation issues with pgAdmin 4 that will be fixed before any group project work. Change the port number to your desired port before working in this application.

## See below for endpoints with example requests (successes & failures) with descriptions and screenshots from Postman.

### POST at endpoint /user/register
Allows a new user to be created with a username and password. 
#### Success:
<img src="/images/farrington-WOL-userRegister-success.png">

### POST at endpoint /user/login
Allows an existing user to log in. 
#### Success:
<img src="/images/farrington-WOL-login-success.png">

### POST at endpoint /log/
Allows a user to create a workout log with descriptions, definition results, and owner properties.
#### Success:
<img src="/images/farrington-WOL-createWorkout-success.png">

### GET at endpoint /log/
Gets all workout logs for an individual user.
#### Success:
<img src="/images/farrington-WOL-getLogsbyUser-success.png">

### GET at endpoint /log/:id
Gets indivudal logs by id for an individual user.
#### Success:
<img src="/images/farrington-WOL-getLogsById-success.png">

### PUT at endpoint /log/:id
Allows individual logs to be updated by a user.
#### Success:
<img src="/images/farrington-WOL-updateLog-success-postman.png">

#### Failure:
<img src="/images/farrington-WOL-updateLog-FAIL-not-users-log.png">

### DELETE at endpoint /log/:id
Allows individual logs to be deleted by a user.
#### Success:
<img src="/images/farrington-WOL-deleteLog-success.png">


#### Failure:
<img src="/images/farrington-WOL-deleteLog-failure.png>
