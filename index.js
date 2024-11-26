const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 4000 ;

//midleware setup
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5pkl8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Coffe maker is Running")
})

app.listen(port, ()=> {
    console.log(`Coffee server is running on: ${port}`);
})


/*
>> create a folder
>> open the folder with cmd 
>> install express, mongodb, cors, dotenv
>> open the folder with vs code
>> create a file named index.js in root file
>> go to package.json file and add the property and value in script object
    "start": "index.js"
>> add the following code in your created index.js file
    const express = require("express");
    const cors = require("cors");
    const app = express();
    const port = process.env.PORT || 4000 ;

    // midleware adding
    app.use(cors());
    app.use(express.json());


    app.get("/", (req, res) => {
        res.send("Coffee Maker in running")    
    });

    app.listen(port, (req, res) => {
        console.log(`coffee maker is running on: ${port}`)    
    })
*/

/* MongoDB setup in your project
NiEzQibHJoCVjRTS
CoffeeMaster

MongoDB setup process step by step
>> Go to mongoDB atlas Database site
>> if you not logged then login first
>> check netword access if your ip address is not 0000 add a ip address includes 0 0 0 0 
>> create user if you nedd for that go to database acess to create user 
>> take a user name and copy it for later use
>> genarate a password and copy it for later use
>> show all code and copy it for use
>> paste the username in all code usename field
>> paste the password in all code password field
>> run the nodemon index.js 

*/
/* Username and password secure process
>> install dotenv if you not installed
>> copy the " require('dotenv').config() " and paste it on top
>> create .env file in your root project 
>> crete 2 variable 1. DB_USER=yourusername 2.DB_PASS=yourpassword
>> acess the variable form your index.js file if you acessed then use these variabel in your username field and password field
>> create a .gitignore file in your root file
>> include 2 file 1) Node_modules 2) .env in your created .ignore file

*/