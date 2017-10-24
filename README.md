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
  "name" : "Haapsalu",
  "description" : "Haapsalu maja",
  "sensors" : [id, id, id],
  "switches" : [id, id, id]
}

/api/places/:id/sensors
{
  
}

/api/places/:id/switches
{
  
}

```
  
## sensor  
  id  
  name  
  description  
  temperature  
  dateMeasured  

```
/api/sensors/:id
{
  "name" : "1_korrus",
  "description" : "1. korruse elutoa andur",
  "temperature" : 22.5,
  "dateMeasured" : ...
}

```

## switch  
  id  
  name  
  description  
  state  
  dateSwitched  
  

```
/api/switches/:id
{
  "name" : "1_korrus",
  "description" : "1. korruse elutoa radiaatori lüliti",
  "state" : true,
  "dateSwitched" : ...
}

```

