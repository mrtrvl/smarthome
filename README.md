# smarthome
API for collecting and serving temperature data

# Installation

git clone https://github.com/mrtrvl/smarthome.git
cd smarthome
npm install

change .env.example to .env
change JWT_SECRET in .env file

npm start

Register new user on /auth/register
Log in on /auth/login to get token

After login 'x-access-token' with token on header is required for making HTTP requests


# API endpoints:

## Places rescources

### GET /api/places/

Returns al list of places

### Return format:
An array with the following keys and values:

  * _id -- Place id
  * description -- Place description
  * name -- Place name
  * ipAddress -- Place's IP address
  * updatedDate -- Date of last update
  * diskFree -- Free disk space of the computer on the place
  * diskSize -- Disk size of the computer on the place
  * createdDate -- Place's registration date


### GET /api/places/:id

Returns object of specified place

### GET /api/places/:id/sensors

Returns list of sensors in specified place
[
  {
    "_id":"59f0a40916348c0e6d5b4ff8",
    "name":"Elutuba",
    "description":"1. korruse elutuba",
    "placeId":"59f05fc439b19d097ba37712",
    "createdDate":"2017-10-25T14:47:37.140Z",
    "__v":0  
  },
  {
    "_id":"59f0dd50aad56a1156562b41",
    "name":"Veetoru",
    "description":"Sissetuleva veetoru temperatuuri andur",
    "placeId":"59f05fc439b19d097ba37712",
    "createdDate":"2017-10-25T18:52:00.479Z",
    "__v":0,
  }
]

### GET /api/places/:id/temperatures

### GET /api/sensors/:id

### GET /api/sensors/
### GET /api/sensors/:id/temperatures

## temperatures  
### GET /api/temperatures/



## Rescources  
https://enable-cors.org/server_expressjs.html  
https://raspberrypi.stackexchange.com/questions/48303/install-nodejs-for-all-raspberry-pi - installing node and npm on raspberry pi  

https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr
