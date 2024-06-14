import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './MovieCard.css'


const MovieCard = ({ title, poster, rating, overview }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isWatched, setIsWatched] = useState(false);
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    }
    const toggleWatched = () => {
        setIsWatched(!isWatched);
    }

    return (
    <div className="MovieCard">

        <img src= {`https://image.tmdb.org/t/p/w500${poster}`} alt={title}/>
        <div className="MovieInfo">
            <h2 className="Title">{title}</h2>
            <p className="Overview">{overview}</p>
            <p className="Rating">★ {rating.toFixed(1)}</p>
            <label onClickCapture={(event) => {
                event.stopPropagation();
                toggleFavorite();
            }} className={isFavorited ? 'favorited' : ''}>
                {isFavorited ? 'Unfavorite' : 'Favorite'}
            </label>
            <label onClickCapture={(event) => {
                event.stopPropagation();
                toggleWatched();
            }} className={isWatched ? 'watched' : ''}>
                {isWatched ? 'Mark as Unwatched' : 'Mark as Watched'}
            </label>
        </div>
    </div>
  )
}

export default MovieCard;
