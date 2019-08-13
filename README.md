# Telecom API

### To Run:

**npm install** - install dependancies

**npm start** - run server on port _3000_

### To Test

**npm test** - runs all test suites


## API Docs

The API is a spec using stubbed data simulating a telecoms API. Sample data structure used is below:
```
[{
    "id": "1",
    "phoneNumbers": [{
        "number": "1234",
        "activated": false
    },
    {
        "number": "5678",
        "activated": false
    }]
},
{
    "id": "2",
    "phoneNumbers": [{
        "number": "91011",
        "activated": false
    },
    {
        "number": "121314",
        "activated": false
    }]
}]

```

The API has 3 endpoints:

### Get all numbers

**/numbers** - returns an array/list of all number objects in the data

### Get numbers by customer ID

**/customers/:id/numbers** - returns an array/list of all number objects belonging to specified customer

### Activate phone number by customer ID and number

**/customers/:id/numbers/activate/:number** - Changes the activated flag from false to true on specified number for specifed customer - returns 204