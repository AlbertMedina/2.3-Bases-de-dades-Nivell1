db.createCollection("channels", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "channels",
      "required": ["name", "description", "creation_date", "user_id", "subscribers"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "creation_date": {
          "bsonType": "string"
        },
        "user_id": {
          "bsonType": "objectId"
        },
        "subscribers": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
