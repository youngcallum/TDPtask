const router= require('express').Router();
const Movies= require('..db');


router.get('/readAll', (req, res, next) => {
    Movies.find()
      .then((results) => res.send(results))
      .catch((err) => next(err));
  });
  
  router.get('/read/:id', (req, res, next) => {
    const id = req.params.id;
    Movies.findById(id)
      .then((result) => res.send(result))
      .catch((err) => next(err));
  });
  
  router.post('/create', (req, res, next) => {
    const newMovies = req.body;
    
    Movies.create(newMovies)
      .then((result) => res.status(201).send(result))
      .catch((err) => next(err));
  });
  
  router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;
    const newMovies = req.body;
    Movies.findByIdAndUpdate(id, newMovies)
      .then((result) => res.status(202).send(result))
      .catch((err) => next(err));
  });
  
  router.delete('/remove/:id', (req, res, next) => {
    const id = req.params.id;
    Movies.findByIdAndDelete(id)
      .then(() => res.status(204).send())
      .catch((err) => next(err));
  });

  module.exports= router;