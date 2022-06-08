const mongoose= require('mongoose');


const Schema= mongoose.Schema;

mongoose.connect('mongdb://localhost:27017/TDP-DB', {useNewUrlParser: true}, (err) => {
    if (err) return console.error(err);
    return console.log('connection successful');
});

const moviesSchema= new Schema({
    title:{
        type: String,
        required: true,
    },
    released:{
        type: Date(dd/mm/yyyy),
        required: true,
    },
    star:{
        type: String,
        required: true,
    }

})

const Movies= mongoose.model('movies', moviesSchema);
module.exports= Movies;