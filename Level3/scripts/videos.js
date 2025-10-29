db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "videos",
      "required": ["title", "description", "size", "file_name", "duration", "thumbnail", "plays", "state", "publication_date", "tags", "likes", "dislikes", "user_id", "comments"],
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
        "likes": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "date"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
              },
              "date": {
                "bsonType": "date"
              }
            }
          }  
        },
        "dislikes": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["user_id", "date"],
            "properties": {
              "user_id": {
                "bsonType": "objectId"
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
        }
      }  
    } 
  }
});
