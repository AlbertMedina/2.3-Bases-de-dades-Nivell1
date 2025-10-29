db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "orders",
      "required": ["date", "type", "products", "total_price", "additional_info", "customer_id", "shop_id"],
      "properties": {
        "date": {
          "bsonType": "date"
        },
        "type": {
          "enum": ['delivery','shop']
        },
        "products": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["product_id", "amount"],
            "properties": {
              "product_id": {
                "bsonType": "objectId"
              },
              "amount": {
                "bsonType": "int"
              }
            }
          }  
        },
        "total_price": {
          "bsonType": "decimal"
        },
        "additional_info": {
          "bsonType": "string"
        },
        "customer_id": {
          "bsonType": "objectId"
        },
        "shop_id": {
          "bsonType": "objectId"
        },
        "delivery": {
          "bsonType": "object",
          "title": "object",
          "required": ["deliverer_id", "date"],
          "properties": {
            "deliverer_id": {
              "bsonType": "objectId"
            },
            "date": {
              "bsonType": "date"
            }
          }  
        }
      }  
    } 
  }
});
