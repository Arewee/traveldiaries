const express = require('express');
const res = require('express/lib/response');
const { get } = require('express/lib/response');
const app = express();
const port = 5555;
const Travels = require('./dbHelpers')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// WELCOME PAGE
app.get('/',(req,res)=> {
    res.status(200).json({message:"Tjenare - välkommen till servern!"})
})

// GET ALL USERS
app.get('/users',(req,res)=> {
    Travels.getAllUsers()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(error=>res.status(500).json(error))
})

// CREATE NEW USER
app.post('/users/register', (req,res)=>{
    const credentials = req.body;

    if(!(credentials.username && credentials.password)){
        return res.status(400).json({message:"username and password required"})
    }

// DELETE USER ________________________________________________________
app.delete('/users/:id',(req,res)=>{
   const id = req.params.id
    Travels.removeUser(id)
    .then(count=>{
        if(count>0){
            res.status(200).json({message: "User has been deleted"})
         }else{
            res.status(404).json({message: "User id does not exist"})
         }
    })
    .catch(error=>res.status(500).json(error))
})


// EXISTING USER LOGIN WITH PASSWORD

    Travels.addUser(credentials)
    .then(user=>{
        res.status(200).json(user)
    })
   .catch(error=>res.status(500).json(error))
})

app.get('/users/:username', (req,res)=>{
    const username = req.params.username

  Travels.findUserByUsername(username)
  .then(user=>{
      res.status(200).json(user)
  })
  .catch(error=>res.status(500).json(error))

})





app.listen(port,()=> {
    console.log(`Server up and running on port ${port}`)
})