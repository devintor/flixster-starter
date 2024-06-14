import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import devflix from './devflix.png';
import './Header.css'

const Header = ({ query, setQuery, setFilter, resetFilters}) => {
    const handleSearchChange = (event) => {
        setQuery(event.target.value); // Update the query state on input change
    }
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }
    return (
        <header className="App-header">
            <img id="logo" src={devflix} alt="DEVFLIX"/>
            <div className="input-group">
                <button onClick={resetFilters}>Clear</button>
                <input type="text" value={query} onChange={handleSearchChange} placeholder="Search" />
                <select onChange={handleFilterChange} defaultValue="popularity.desc">
                    <option value="popularity.desc">Most Popular</option>
                    <option value="vote_average.desc">Top Rated</option>
                    <option value="release_date.desc">Newest</option>
                </select>
            </div>
        </header>
    )
}

export default Header;