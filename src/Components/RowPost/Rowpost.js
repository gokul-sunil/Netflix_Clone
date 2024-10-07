import React, { useEffect, useState } from 'react';
import "./Rowpost.css";
import axios from '../../Axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import Youtube from 'react-youtube';
import { FaTimes } from 'react-icons/fa';

function Rowpost(props) {
    const [movie, setMovie] = useState([]);
    const [urlId, setUrlId] = useState('');
    const [showVideo, setShowVideo] = useState(false);  // State to show/hide the video

    useEffect(() => {
        axios.get(props.url)
            .then((res) => {
                setMovie(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.url]);

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                if (response.data.results.length !== 0) {
                    setUrlId(response.data.results[0]);
                    setShowVideo(true);  // Show the video when movie is clicked
                }
            })
            .catch((error) => {
                console.log("Error fetching video:", error);
            });
    };

    const closeVideo = () => {
        setShowVideo(false);  // Hide the video when close button is clicked
    };

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj) => (
                    <img
                        key={obj.id}
                        onClick={() => handleMovie(obj.id)}
                        className={props.isSmall ? "smallPoster" : "poster"}
                        src={`${imageUrl + obj.backdrop_path}`}
                        alt={obj.name || obj.title || "Poster"}
                    />
                ))}
            </div>

            {/* Conditionally render the video and close button */}
            {showVideo && (
                <div className="videoContainer">
                    <button className="closeButton" onClick={closeVideo}><FaTimes/></button>
                    <Youtube opts={opts} videoId={urlId.key} />
                </div>
            )}
        </div>
    );
}

export default Rowpost;
