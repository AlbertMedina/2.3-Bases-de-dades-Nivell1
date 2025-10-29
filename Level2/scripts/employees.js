db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "employees",
      "required": ["name", "surnames", "nif", "telephone", "shop_id"],
      "properties": {
        "name": {
          "bsonType": "string"
        },
        "surnames": {
          "bsonType": "string"
        },
        "nif": {
          "bsonType": "string"
        },
        "telephone": {
          "bsonType": "string"
        },
        "position": {
          "enum": ['ccok','deliverer']
        },
        "shop_id": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
