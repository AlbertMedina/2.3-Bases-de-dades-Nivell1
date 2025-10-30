db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "videos",
      "required": ["title", "description", "size", "file_name", "duration", "thumbnail", "plays", "state", "publication_date", "tags", "reactions", "user_id", "comments", "channel_id"],
      "properties": {
        "title": {
          "bsonType": "string"
        },
        "description": {
          "bsonType": "string"
        },
        "size": {
          "bsonType": "string"
        },
        "file_name": {
          "bsonType": "string"
        },
        "duration": {
          "bsonType": "int"
        },
        "thumbnail": {
          "bsonType": "string"
        },
        "plays": {
          "bsonType": "int"
        },
        "state": {
          "enum": ['public','hidden','private']
        },
        "publication_date": {
          "bsonType": "date"
        },
        "tags": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["name"],
            "properties": {
              "name": {
                "bsonType": "string"
              }
            }
          }  
        },
        "reactions": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "type", "date"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
              },
              "type": {
                "enum": ['like','dislike']
              },
              "date": {
                "bsonType": "date"
              }
            }
          }  
        },
        "user_id": {
          "bsonType": "objectId"
        },
        "comments": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "text", "date"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
              },
              "text": {
                "bsonType": "string"
              },
              "date": {
                "bsonType": "date"
              }
            }
          }  
        },
        "channel_id": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
