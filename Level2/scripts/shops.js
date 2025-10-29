db.createCollection("shops", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "shops",
      "required": ["address", "postcode", "city", "province"],
      "properties": {
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
        }
      }  
    } 
  }
});
