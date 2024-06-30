import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const response = await axios.get(`YOUR_API_ENDPOINT/${id}`);
    setMovie(response.data);
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
