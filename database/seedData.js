module.exports = {
  "users": {
    "landlord": {
      "firstName": "Landlord",
      "lastName": "User",
      "email": "landlord@gmail.com",
      "phone": "1238675309",
      "type": "landlord"
    },
    "tenant": {
      "firstName": "Tenant",
      "lastName": "User",
      "email": "tenant@gmail.com",
      "phone": "1238675309",
      "type": "tenant"
    },
    "master": {
      "firstName": "Master",
      "lastName": "User",
      "email": "masterUser@gmail.com",
      "phone": "1238675309",
      "type": "dev"
    }
  },
  "properties": {
    "prop1": {
      "name": "Name for the Property",
      "street": "1 First St",
      "city": "Salt Lake City",
      "state": "Utah",
      "zip": "84101",
      "status": "occupied",
      "image": "property.jpg",
      "landlordId": 1
    },
    "prop2": {
      "name": "Sample",
      "street": "1 First St",
      "city": "Salt Lake City",
      "state": "Utah",
      "zip": "84101",
      "status": "vacant",
      "landlordId": 1
    }
  },
  "workorders": {
    "workorder1": {
      "title": "Work Order Title",
      "description": "Description of the issue. For example: Tub is leaking.",
      "type": "plumbing",
      "startDate": "10-31-2018",
      "endDate": "11-05-2018",
      "propertyId": 1,
      "createdBy": 2,
    },
    "workorder2": {
      "title": "Short Description",
      "description": "Description of the issue. For example: Lights not working in the living room.",
      "type": "electrical",
      "startDate": "11-03-2019",
      "endDate": null,
      "propertyId": 1,
      "createdBy": 3
    }
  }
}