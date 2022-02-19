import React, { useState } from "react";
import { SearchMovie } from "./SearchMovie";
import { MovieCard } from "./MovieCard";

export const ListMoviesScreen = () => {
  const [movies, setMovies] = useState([{
      id: 1,
      titulo: 'Uncharted: Fuera del mapa',
      año: 2020,
      tipo: 'Serie',
      img: 'https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/4/8/4/4/24484-1-esl-CO/a59100e0218d-unch-2-poster.jpg' 
  }]);



  return (
    <>
      <h1>List movies</h1>
      <SearchMovie
        // setMovies={setMovies} 
    />
      <hr />

      <ol>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ol>
    </>
  );
};
