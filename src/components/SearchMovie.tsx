import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useForm } from "../hooks/useForm";

interface props {
  setMovies: Dispatch<SetStateAction<string[]>>;
}

export const SearchMovie = () => {


  const [form, handleInputChange] = useForm({title: '', type: '', year: ''})

  const { title, type, year } = form

  const [inputValue, setInputValue] = useState<string>("");

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length >= 3) {
      // setMovies((movies) => [inputValue, ...movies]);
      setInputValue('')
    }
  };
  return (
    <form className="searchMovie" onSubmit={handleSubmit}>
      <div className="searchMovie__boxInput">
      <input
        className="searchMovie__input searchMovie__input-title"
        type="text"
        name='title'
        value={title}
        onChange={handleInputChange}
        placeholder='Camila'
      />
      <label className="searchMovie__label" htmlFor="">Title </label>

      </div>
      <div className="searchMovie__boxInput" >

      <input
        className="searchMovie__input searchMovie__input-years"
        type="text"
        name='year'
        value={year}
        onChange={handleInputChange}
      />
      <label className="searchMovie__label" htmlFor=""> Year </label>
      </div>
      <div className="searchMovie__boxInput" >

      <input
        className="searchMovie__input searchMovie__input-type"
        type="text"
        name='type'
        value={type}
        onChange={handleInputChange}
      />
      <label className="searchMovie__label" htmlFor=""> Type </label>
      </div>
    </form>
  );
};
