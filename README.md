# smarthome
API for collecting and serving temperature data

## place  
  id  
  name  
  description 
  sensors  
  switches  
  
```
/api/places/:id
{
  "_id":"59f05fc439b19d097ba37712",
  "name":"Haapsalu",
  "description":"Haapsalu maja",
  "createdDate":"2017-10-25T09:56:20.846Z",
  "__v":0
}

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

/api/places/:id/switches
{
  
}

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
/api/sensors/:id
{
  "_id":"59f0a40916348c0e6d5b4ff8",
  "name":"Elutuba",
  "description":"1. korruse elutuba",
  "placeId":"59f05fc439b19d097ba37712",
  "createdDate":"2017-10-25T14:47:37.140Z",
  "__v":0  
}

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

/api/sensors/:id/temperatures
{
  
}

```

## switch  
  id  
  name  
  description  
  state  
  dateCreated  
  

```
/api/switches/:id
{
  "name" : "1_korrus",
  "description" : "1. korruse elutoa radiaatori lüliti",
  "state" : true,
  "dateCreated" : ...,
  "placeId": ...
}

/api/switches/

```

## temperatures  
  id  
  sensorId  
  temperature  
  dateMeasured    
  

```
/api/temperatures/
{
  "_id":"59f0a40916348c0e6d5b4ff8",
  "sensorId":"59f0a40916348c0e6d5b4ff8",
  "temperature" : "22.5",
  "dateMeasured" : "2017-10-25T18:52:00.479Z"
}

```
