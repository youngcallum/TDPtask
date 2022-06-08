const express = require("express");
const app = express();
const namesRouter= require('./router/names.js');
const moviesRouter= require('./router/movies.js');
app.use (express.json());

app.get("/hello", (req, res) => console.log("hello my name is ..."));

app.use ('/names.js',namesRouter);
app/use('/movies.js', moviesRouter)

app.get('/getError', (err,req,res,next) =>{
  next(Error('error message'))
});

const server = app.listen(4494, () => {
  console.log(`Server started sucessfully ${server.address().port}`);
});