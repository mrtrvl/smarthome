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

After login, 'x-access-token' with token on header is required for making HTTP requests


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

#### Example
[
  {
    "_id": "59f4333cf1c8d175e88c5211",
    "description": "Saaremaa suvila",
    "name": "Pahapilli",
    "__v": 0,
    "ipAddress": "37.157.67.144",
    "updatedDate": "2017-12-31T19:08:47.889Z",
    "diskFree": 1.4,
    "diskSize": 3.83,
    "createdDate": "2017-10-28T07:35:24.649Z"
},
{
    "_id": "5a003e4fb5400215b7f43546",
    "description": "Rapla kodu",
    "name": "Rapla",
    "__v": 0,
    "ipAddress": "88.196.89.105",
    "updatedDate": "2017-12-12T15:30:01.362Z",
    "diskFree": 13.22,
    "diskSize": 15.21,
    "createdDate": "2017-11-06T10:49:51.638Z"
}
]

### GET /api/places/:id

Returns object of specified place

#### Example
{
  "_id": "59f4333cf1c8d175e88c5211",
  "description": "Saaremaa suvila",
  "name": "Pahapilli",
  "__v": 0,
  "ipAddress": "37.157.67.144",
  "updatedDate": "2017-12-31T19:08:47.889Z",
  "diskFree": 1.4,
  "diskSize": 3.83,
  "createdDate": "2017-10-28T07:35:24.649Z"
}

## Sensors rescources

### GET /api/sensors/
Returns list of sensors

### Return format:
An array with the following keys and values:

  * _id -- Sensor id
  * description -- Sensor description
  * name -- Sensor name
  * placeId -- Place id, where sensor belongs
  * createdDate -- Sensors's registration date

#### Example

[
  {
      "_id": "59f43547f1c8d175e88c5216",
      "description": "1. korruse temperatuuriandur",
      "name": "Elutuba",
      "placeId": "59f4333cf1c8d175e88c5211",
      "__v": 0,
      "createdDate": "2017-10-28T07:44:07.615Z"
  },
  {
      "_id": "59f43570f1c8d175e88c5217",
      "description": "2. korruse temperatuuriandur",
      "name": "Magamistuba",
      "placeId": "59f4333cf1c8d175e88c5211",
      "__v": 0,
      "createdDate": "2017-10-28T07:44:48.461Z"
  }
]

### GET /api/sensors/:id
Returns object of specified sensor
#### Example

{
  "_id": "59f43547f1c8d175e88c5216",
  "description": "1. korruse temperatuuriandur",
  "name": "Elutuba",
  "placeId": "59f4333cf1c8d175e88c5211",
  "__v": 0,
  "createdDate": "2017-10-28T07:44:07.615Z"
}

### GET /api/sensors/:id/temperatures
Returns list of temperatures of specified sensor (default 10 measurements)

#### Example
[
  {
      "_id": "5a4934cfbc8cda457b0b91d0",
      "temperature": 1.2,
      "sensorId": "59f43547f1c8d175e88c5216",
      "__v": 0,
      "measuredDate": "2017-12-31T19:04:47.630Z"
  },
  {
      "_id": "5a49336ebc8cda457b0b91cc",
      "temperature": 1.1,
      "sensorId": "59f43547f1c8d175e88c5216",
      "__v": 0,
      "measuredDate": "2017-12-31T18:58:54.080Z"
  }
]

### GET /api/places/:id/sensors
Returns list of sensors in specified place

## Temperatures rescources  

### GET /api/temperatures/
Returns list of all temperatures (up to 100 measurements)

### GET /api/places/:id/temperatures
Returns list of temperatures of specified place - TODO

# Rescources  
https://enable-cors.org/server_expressjs.html  
https://raspberrypi.stackexchange.com/questions/48303/install-nodejs-for-all-raspberry-pi - installing node and npm on raspberry pi  

https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr
