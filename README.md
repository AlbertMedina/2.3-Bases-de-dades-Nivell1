# Data Structure - MongoDB

## Description - Exercise Statement
Design of several NoSQL database models for different cases using MongoDB.

### Level 1 - Optician
Design of a MongoDB database for an optician to manage customers, glasses, sales, employees and suppliers.

### Level 2 - Shop
Design of a MongoDB database for a food shop to manage customers, orders, stores, employees and products.

### Level 3 - Youtube
Design of a MongoDB database for a simplified version of YouTube to manage users, channels, videos, playlists, likes/dislikes and comments.

## Technologies Used
- Moon Modeler
- MongoDB
- MongoDB Compass
- Docker

## Requirements
- MongoDB
- MongoDB Compass
- Docker

## Installation
1. Clone repository (https://github.com/AlbertMedina/2.3-Bases-de-dades-Nivell3.git).
`git clone https://github.com/AlbertMedina/2.3-Bases-de-dades-Nivell3.git`
2. Start a MongoDB container using Docker
`docker run --name [container-name] -d -p 27017:27017 mongodb/mongodb-atlas-local`

## Execution
1. Open MongoDB Compass and connect to your Docker container.
2. Create a database for each case (Level1 -> Optician, Level2 -> Shop, Level3 -> YouTube)
3. Import the proper .js scripts for each database (they can be found in their respective folders: Level1/scripts, Level2/scripts, Level3/scripts).
4. Execute each one to create the collections.
5. The .png diagram for each model can be also found in its respective folder (Level1, Level2, Level3).
