require("dotenv").config()
const express = require('express');
const res = require('express/lib/response');
const { get } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5555;
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors({origin:'*'}))

//IMPORT ROUTERS

const usersRouter = require('./routes/user-routes')
const destinationsRouter = require('./routes/destination-routes')

// AVTIVATE (USE) THE ROUTES

app.use('/', usersRouter)
app.use('/', destinationsRouter)


// WELCOME PAGE
app.get('/',(req,res)=> {
    res.status(200).json({message:"Tjenare - välkommen till servern!"})
})



// DON NOT CHANGE BELOW CODE!!!!!
//_________________________________________________________

app.listen(port,()=> {
    console.log(`Server up and running on port ${port}`)
})