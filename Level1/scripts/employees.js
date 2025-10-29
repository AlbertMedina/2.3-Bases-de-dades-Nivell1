db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "employees",
      "required": ["name"],
      "properties": {
        "name": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
