db.createCollection("playlists", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "playlists",
      "required": ["name", "creation_date", "state", "videos"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "creation_date": {
          "bsonType": "date"
        },
        "state": {
          "enum": ['public','private']
        },
        "videos": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
