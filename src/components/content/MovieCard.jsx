import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './MovieCard.css'


const MovieCard = ({ title, poster, rating, overview }) => {
    // const poster = `https://image.tmdb.org/t/p/w500${props.poster}`
    // const poster = `https://api.themoviedb.org/3/movie/${props.ident}/images`
  
    return (
    <div className="MovieCard">

        <img src= {`https://image.tmdb.org/t/p/w500${poster}`} alt={title}/>
        <div className="MovieInfo">
            <h2 className="Title">{title}</h2>
            <p className="Overview">{overview}</p>
            <p className="Rating">★ {rating.toFixed(1)}</p>
        </div>
    </div>
  )
}

export default MovieCard;
