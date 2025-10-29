db.createCollection("sales", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "sales",
      "required": ["customer_id", "glasses_id", "employee_id", "sale_date"],
      "properties": {
        "customer_id": {
          "bsonType": "objectId"
        },
        "glasses_id": {
          "bsonType": "objectId"
        },
        "employee_id": {
          "bsonType": "objectId"
        },
        "sale_date": {
          "bsonType": "date"
        }
      }  
    } 
  }
});
