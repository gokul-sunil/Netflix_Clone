import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from "../../Axios";
import { API_KEY, imageUrl } from '../../constants/constants';

function Banner() {
    const [movie, setMovie] = useState(null); // Set the initial state to null

    useEffect(() => {
        // Fetch trending movies
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                const results = response.data.results;
                // Get a random index from the list of results
                const randomIndex = Math.floor(Math.random() * results.length);
                // Set the movie based on the random index
                setMovie(results[randomIndex]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to run only once on component mount

    return (
        <div 
            style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
            className='banner'>
            <div className="content">
                <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
                <div className="banner_buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    );
}

export default Banner;
