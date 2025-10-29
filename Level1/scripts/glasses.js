db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "glasses",
      "required": ["brand", "lenses", "frame", "price", "supplier_id"],
      "properties": {
        "brand": {
          "bsonType": "string"
        },
        "lenses": {
          "bsonType": "object",
          "title": "object",
          "required": ["prescription", "color"],
          "properties": {
            "prescription": {
              "bsonType": "object",
              "title": "object",
              "required": ["left", "right"],
              "properties": {
                "left": {
                  "bsonType": "decimal"
                },
                "right": {
                  "bsonType": "decimal"
                }
              }  
            },
            "color": {
              "bsonType": "object",
              "title": "object",
              "required": ["left", "right"],
              "properties": {
                "left": {
                  "bsonType": "string"
                },
                "right": {
                  "bsonType": "string"
                }
              }  
            }
          }  
        },
        "frame": {
          "bsonType": "object",
          "title": "object",
          "required": ["type", "color"],
          "properties": {
            "type": {
              "enum": ['rimless','plastic','metal']
            },
            "color": {
              "bsonType": "string"
            }
          }  
        },
        "price": {
          "bsonType": "decimal"
        },
        "supplier_id": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
