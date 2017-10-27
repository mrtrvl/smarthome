# smarthome
API for collecting and serving temperature data

## place  
  id  
  name  
  description 
  sensors  
  switches  
  
```
GET
/api/places/:id
{
  "_id":"59f05fc439b19d097ba37712",
  "name":"Haapsalu",
  "description":"Haapsalu maja",
  "createdDate":"2017-10-25T09:56:20.846Z",
  "__v":0
}

GET
/api/places/
[
  {
    "_id":"59f05fc439b19d097ba37712",
    "name":"Haapsalu",
    "description":"Haapsalu maja",
    "createdDate":"2017-10-25T09:56:20.846Z",
    "__v":0
  },
  {
    "_id":"59f0603fc7e608098ca38e86",
    "name":"Pahapilli",
    "description":"Saaremaa suvila",
    "createdDate":"2017-10-25T09:58:23.050Z",
    "__v":0
  }
]

GET
/api/places/:id/sensors
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

GET
/api/places/:id/switches
{
  
}

GET
/api/places/:id/temperatures
{
  
}

```
  
## sensor  
  id  
  name  
  description  
  placeId  
  createdDate  

```
GET
/api/sensors/:id
{
  "_id":"59f0a40916348c0e6d5b4ff8",
  "name":"Elutuba",
  "description":"1. korruse elutuba",
  "placeId":"59f05fc439b19d097ba37712",
  "createdDate":"2017-10-25T14:47:37.140Z",
  "__v":0  
}

GET
/api/sensors/
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

GET
/api/sensors/:id/temperatures
{
  
}

```

## switch  
  id  
  name  
  description  
  state  
  createdDate  
  

```
GET
/api/switches/:id
{
  "name" : "1_korrus",
  "description" : "1. korruse elutoa radiaatori lüliti",
  "state" : true,
  "createdDate" : ...,
  "placeId": ...
}

GET
/api/switches/

```

## temperatures  
  id  
  sensorId  
  temperature  
  measuredDate    
  

```
GET
/api/temperatures/
[
  {
    "_id":"59f2d0876b9f4662da3ac0b7",
    "sensorId":"59f0df1a2ba14011a185d0bd",
    "temperature":20.5,
    "measuredDate":"2017-10-27T06:21:59.959Z",
    "__v":0
  },
  {
    "_id":"59f2d0a86b9f4662da3ac0b8",
    "sensorId":"59f0df1a2ba14011a185d0bd",
    "temperature":21.5,
    "measuredDate":"2017-10-27T06:22:32.706Z",
    "__v":0,
  }

```
