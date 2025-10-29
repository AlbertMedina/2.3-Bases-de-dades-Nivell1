db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customers",
      "required": ["name", "address", "telephone", "email", "registration_date"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "city", "postcode", "country"],
          "properties": {
            "street": {
              "bsonType": "string"
            },
            "number": {
              "bsonType": "int"
            },
            "floor": {
              "bsonType": "string"
            },
            "door": {
              "bsonType": "string"
            },
            "city": {
              "bsonType": "string"
            },
            "postcode": {
              "bsonType": "string"
            },
            "country": {
              "bsonType": "string"
            }
          }  
        },
        "telephone": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "registration_date": {
          "bsonType": "date"
        },
        "referred_by": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
