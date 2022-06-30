const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@todo-app.9ctap.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run (){
    try{
        await client.connect();
        console.log('Connected to db');

    }
    finally{

    }
}
run().catch(console.dir);


app.get('/', (req,res)=>{
    res.send('running')
})



app.listen(port,()=>{
    console.log('listenning to port', port);
})