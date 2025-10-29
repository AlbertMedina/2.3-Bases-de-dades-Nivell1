db.createCollection("products", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "products",
      "required": ["type", "name", "descriptionç", "image", "price"],
      "properties": {
        "type": {
          "enum": ['pizza','burger','drink']
        },
        "name": {
          "bsonType": "string"
        },
        "descriptionç": {
          "bsonType": "string"
        },
        "image": {
          "bsonType": "string"
        },
        "price": {
          "bsonType": "decimal"
        },
        "pizza_category": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
