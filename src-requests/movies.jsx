import {useState} from 'react';
import axios from 'axios';

const FilmRequest= () => {
const [data, setData]= useState("");
const [apiKey, setApiKey]= useState("");
const [filmTitle, setFilmTitle]= useState("");

const updateApiKey= (e) => {
        setApiKey(e.target.value);
}
const updateTitle= (e) => {
        setFilmTitle(e.target.value);
}
const makeRequest= (e) => {
    axios.get("http://www.omdbapi.com/?apikey="+ apiKey + "&s=" + filmTitle)
    .then(response => {
        console.log(response.data);
        setData(response.data);
    });
    
};
return (
    <>
    <div>
        <h2>FilmRequest</h2>
        <p>Enter your API key here</p>
        <input type="text" onChange={(e)=>updateApiKey(e)} />
        <p>Enter the film name you are looking for</p>
        <input type="text" onChange={(e)=> updateTitle(e)} />
        <button onClick={(e) => makeRequest(e)}>click me</button>

        <h4>{data.Title}</h4>
        <h4>{data.Year}</h4>
        <h4>{data.Rated}</h4>
        <h4>{data.Genre}</h4>
        <h4>{data.Plot}</h4>
        <img src={data.Poster} alt="The poster"></img>
    </div>
    </>
);
}
export default FilmRequest;