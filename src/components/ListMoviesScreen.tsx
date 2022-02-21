import React, { useContext, useEffect, useState } from "react";
import { SearchMovie } from "./SearchMovie";
import { MovieCard } from "./MovieCard";
import { Context, SearchContext } from "../hooks/useContext";
import { getMovies } from "../helpers/Fetch";

export const ListMoviesScreen = () => {
  //context
  const { resultado } = useContext(Context);
  const { setMovies }: any = useContext(Context);
  const { filter, setFilter }: any = useContext(SearchContext);
  //useState page
  const [page, setPage] = useState(1);
  //Pagination
  const pageLimited = resultado?.totalPage;
  const pageLimitedReal = pageLimited ? Math.ceil(pageLimited) : 1;

  //increment page
  const handleNextPage = () => {
    if (page < pageLimitedReal) {
      setPage((value) => value + 1);
    }
  };
  //decrement page
  const handlePreviewPage = () => {
    if (page > 1) {
      setPage((value) => value - 1);
    }
  };

  //Effects secondary get data
  useEffect(() => {
    getMovies(filter.title, filter.year, filter.type, page).then((movies) => {
      setMovies(movies);
    });
  }, [filter.title, filter.year, filter.type, setMovies, page]);

  //Effects secondary set filter with page
  useEffect(() => {
    setFilter({ ...filter, page });
  }, [page, setFilter]);

  return (
    <>
      <h1 className="listMovies__title">List movies</h1>
      <SearchMovie />
      <hr />
      <section className="movieCard-container">
        {resultado?.Search?.map((movie) => (
          <MovieCard movie={movie} key={`${movie.imdbID}${Date.now()}`} />
        ))}
      </section>
      <div className="ListMovies__boxButton">
        <button
          onClick={handlePreviewPage}
          className="ListMovies__button"
          disabled={page <= 1}
        >
          Preview page
        </button>
        <button onClick={handleNextPage} className="ListMovies__button">
          {" "}
          Next page{" "}
        </button>
      </div>
    </>
  );
};
