const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-Parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
  //provides user with permission to make changes to server data like adding or deleting data
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Establishes connection with mongo database
const ConnectionString = 'mongodb+srv://admin:admin@cluster0.skwna.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(ConnectionString, { useNewUrlParser: true });

var movieSchema = new Schema;

const Schema = mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

var movieModel = mongoose.model("movie", movieSchema);


movieModel.find((err, data) => {
  res.json(data);
});
//gets server to display all movies 
app.get('/api/movies/:id', (req, res, next) => {
  console.log(req.params.id);
  movieModel.findById(req.params.id,
    function (err, data) {
      res.json(data);
    });
})
//gets server to update any movie data changed by the user 
app.put('/api/movies/:id', (req, res, next) => {
  console.log("Update movie"+req.params.id);
  console.log(req.body);

  movieModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
    (err,data)=>{
      res.send(data);
    })
  
  
    });
    //gets server to delete any movie by the user
app.delet('/api/movies/:id',(req,res)=>{
  console.log("delete movie: "+req.params.id)

  movieModel.findByIdAndUpdate(req.params.id,req.body,(err, data)=>{
    res.send(data);
  })
})
//gets server to add any movie by the user
app.post('/api/movies', (res, red) => {
  console.log("movie received")
  console.log(req.body.Title)
  console.log(req.body.Year)
  console.log(req.body.poster)

  movieModel.create({
    title: req.body.Title,
    year: req.body.Year,
    poster: req.body.poster
  })
  res.send('item added');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})