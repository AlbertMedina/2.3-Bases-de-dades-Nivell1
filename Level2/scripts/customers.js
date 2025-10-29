db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "customers",
      "required": ["name", "surnames", "address", "postcode", "city", "province", "telephone"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "surnames": {
          "bsonType": "string"
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["street", "number", "floor", "door"],
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
            }
          }  
        },
        "postcode": {
          "bsonType": "string"
        },
        "city": {
          "bsonType": "string"
        },
        "province": {
          "bsonType": "string"
        },
        "telephone": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
