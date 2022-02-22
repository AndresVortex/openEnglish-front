import React, { useContext, useEffect } from "react";


import { Search } from '../interface/response';

interface props {
  movie: Search;
}
export const MovieCard = ({ movie }: props) => {
  

  return (
    <>
      
        
          <div key={movie.imdbID} className="movieCard__box">
            <div className="movieCard__box-content">
              <img
                className="movieCard__content-img"
                src={movie.Poster}
                alt="Imagen"
              />

              <h3 className="movieCard__content-titulo"> {movie.Title} </h3>
              <p className="movieCard__content-text">{`Year: ${movie.Year}`}</p>
              <p className="movieCard__content-text">{`Type: ${movie.Type}`}</p>
            </div>
          </div>
      
      
    </>
  );
};
