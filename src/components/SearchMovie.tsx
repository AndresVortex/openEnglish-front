import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm } from "../hooks/useForm";
import { getMovies } from "../helpers/Fetch";
import { Resultado } from "../interface/response";
import { Context, SearchContext } from "../hooks/useContext";

interface props {
  setMovies: Dispatch<SetStateAction<string[]>>;
}

export const SearchMovie = () => {
  const { setMovies }: any = useContext(Context);
  const { filter, setFilter }: any = useContext(SearchContext);

  const [form, handleInputChange] = useForm({
    title: filter.title,
    type: filter.type,
    year: filter.year,
    page: filter.page,
  });

  const { title, type, year, page } = form;

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length >= 3) {
      // setMovies((movies) => [inputValue, ...movies]);
      setInputValue("");
    }
  };

  useEffect(() => {
    getMovies(title, year, type, page).then((movies) => {
      setMovies(movies);
    });
  }, [title, year, type, setMovies, page]);
  useEffect(() => {
    setFilter(form);
  }, [form, setFilter]);
  


  
  return (
    <form className="searchMovie" onSubmit={handleSubmit}>
      <div className="searchMovie__boxInput">
        <label className="searchMovie__label" htmlFor="">
          Title{" "}
        </label>
        <input
          className="searchMovie__input searchMovie__input-title"
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Camila"
        />
      </div>
      <div className="searchMovie__boxInput">
        <label className="searchMovie__label" htmlFor="">
          {" "}
          Year{" "}
        </label>
        <input
          className="searchMovie__input searchMovie__input-years"
          type="number"
          name="year"
          value={year}
          onChange={handleInputChange}
        />
      </div>
      <div className="searchMovie__boxInput">
        <label className="searchMovie__label" htmlFor="">
          {" "}
          Type{" "}
        </label>
        <select
          className="searchMovie__select"
          name="type"
          id=""
          onChange={handleInputChange}
        >
          <option value=""> Select option </option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>
    </form>
  );
};
