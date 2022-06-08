const express = require("express");
const app = express();
app.use (express.json());

app.get("/hello", (req, res) => console.log("hello my name is ..."));

let names = ["cy", "mb", "tp", "ns"];
app.get("/getAll", (req, res) => res.send(names));

app.get('/read/:id', (req, res, next) => {
  const id= parseInt(req.params.id); 
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' })
  return res.send(names[id]);
});

app.post('/create', (req, res) => {
  const newName = req.body.name;
  names.push(newName);
  res.status(201).send(`Successfully added ${names[names.length - 1]}`);
});

app.put('/update/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const newName = req.query.name;
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  const oldName = names[id];
  names.splice(id, 1, newName);
  return res.send(`Replaced ${oldName} with ${names[id]}`);
});

app.delete('/remove/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id) || id < 0 || id >= names.length) return next({ status: 400, message: 'Invalid id' });
  names.splice(id, 1);
  return res.status(204).send();
});

app.get('/getError', (req,res,next) =>{
  next(Error('error message'))
});

const server = app.listen(4494, () => {
  console.log(`Server started sucessfully ${server.address().port}`);
});
