import React from "react";
import { getMovies } from "../helpers/Fetch";

interface props {
  movie: {id: number, titulo: string, año: number, img: string, tipo: string};
}
export const MovieCard = ({ movie }: props) => {
  getMovies();

  return (
  <>
    <div className="movieCard__box">
        <div className="movieCard__box-content">
            <img className="movieCard__content-img" src={movie.img} alt="Imagen" />
            <h3 className="movieCard__content-titulo" > {movie.titulo} </h3>
            <p className="movieCard__content-text" >{`Year: ${movie.año}`}</p>
            <p className="movieCard__content-text" >{`Type: ${movie.tipo}`}</p>

        </div>
    </div>
  </>
  );
};
