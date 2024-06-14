import { useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import MovieList from './components/content/MovieList';
import Footer from './components/footer/Footer'

const App = () => {
  const [query, setQuery] = useState(""); // State to hold the search query, done in here because it is a common parent to both header and movielist, which both need it
  const [filter, setFilter] = useState("");
  const resetFilters = () => {
    setQuery("");
    setFilter("popularity.desc");
  };

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} setFilter={setFilter} resetFilters={resetFilters}/>
      <MovieList query={query} filter={filter}/>
      <Footer/>
    </div>
  )
}

export default App;
