import { useEffect, useState } from 'react';
import './MovieList.css'
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import ReactDOM from 'react-dom';


const MovieList = ({query, filter}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetchMovies();
    }, [page, query, filter]);

    const fetchMovies = async () => {
        const apiKey = `dca23ffe8c65106addc1986590090072`;
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${filter}&page=${page}`;

        if (query) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`
        }

        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }

            const data = await response.json()

            if (page > 1) {
                setMovies(prev => [
                    ...prev,
                    ...data.results
                ])
            } else {
                setMovies(data.results)
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }
    
    const loadMore = () => {
        setPage(page+1);
    }

    const handleCardClick = (movie) => {
        setSelectedMovie(movie); // set the selected movie for the modal
    }
    const handleCloseModal = () => {
        setSelectedMovie(null); // close the modal by resetting the selected movie
    }

    return (
        <>
        <div className="MovieList">
            {console.log(movies)}
            
            {movies.length > 0 ? (
            
                movies.map(movie => (
                <div key={movie.id} onClick={() => handleCardClick(movie)}>
                    <MovieCard title={movie.title} poster={movie.poster_path} rating={movie.vote_average} overview={movie.overview}/>
                </div>
            ))
            ) : (
                <div className="no-movies">
                    <p>No movies found that match your search criteria. Please try a different search!</p>
                </div>
            )}
            {selectedMovie && ( // modal only shows when there is a movie selected
                <Modal show={selectedMovie !== null} onClose={handleCloseModal}>
                    <span><h2>{selectedMovie.title}</h2><p className="Rating">★ {selectedMovie.vote_average.toFixed(1)}</p></span>
                    <iframe width="90%" height="90%" src="https://www.youtube.com/embed/LEjhY15eCx0"/>
                    <p>{selectedMovie.overview}</p>
                </Modal>
            )}
        </div>

        <button className="loadButton" onClick={loadMore}>Load More</button>

        
        </>
    )
}

export default MovieList;
