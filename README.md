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


## Sensors rescources

### GET /api/sensors/
Returns list of sensors

### GET /api/sensors/:id
Returns object of specified sensor

### GET /api/sensors/:id/temperatures
Returns list of temperatures of specified sensor

### GET /api/places/:id/sensors
Returns list of sensors in specified place

## Temperatures rescources  

### GET /api/temperatures/
Returns list of all temperatures (up to 100)

### GET /api/places/:id/temperatures
Returns list of temperatures of specified place

# Rescources  
https://enable-cors.org/server_expressjs.html  
https://raspberrypi.stackexchange.com/questions/48303/install-nodejs-for-all-raspberry-pi - installing node and npm on raspberry pi  

https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr
