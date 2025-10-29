db.createCollection("users", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "users",
      "required": ["name", "email", "password", "username", "birth_date", "gender", "country", "postcode"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "password": {
          "bsonType": "string"
        },
        "username": {
          "bsonType": "string"
        },
        "birth_date": {
          "bsonType": "date"
        },
        "gender": {
          "bsonType": "string"
        },
        "country": {
          "bsonType": "string"
        },
        "postcode": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
