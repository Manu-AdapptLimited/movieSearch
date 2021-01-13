import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom"



const MovieCard = ({ movie }) => {
  return (


    <div className="card card-body bg-dark text-center h-100">
      <img src={`${movie.thumbnail.path}.${movie.thumbnail.extension}`} className="w-100 mb-2" alt="Movie Cover" />
      <h5 className="text-light card-title">
        {movie.title}
      </h5>

    </div>

  )
}

export default MovieCard;

//src={movie.Poster}
// {movie.Title} - {movie.Year}
//to={'/movie/' + movie.imdbID}