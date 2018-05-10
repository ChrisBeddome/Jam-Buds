# Jam Buds

## Setup

Install dependencies:
```
$npm init
```

Set port to be used by express in API/config/config.js.

Set port to be used by mysql in API/config/config.js.

Import database from API/config/db_init.sql.

To start server, navigate to API directory and run:

```
$npm start
```

## End Points

**/register**: 

POST: Register a new user.

parameters: 
* email - string - required
* username - string - required
* password - string - required



