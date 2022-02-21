import React, { useState } from "react";
import { ListMoviesScreen } from "./components/ListMoviesScreen";
import { Context, SearchContext } from "./hooks/useContext";
import "./styles/stylesListMovies.css";
import { Search, Resultado } from "./interface/response";
export const App = () => {
  const [resultado, setMovies] = useState<Resultado>({Search: []});
  const [filter, setFilter] = useState({title: 'Love', year: 2020, type:'', page: 1})
  return (
    <SearchContext.Provider value={{filter, setFilter}}>
      <Context.Provider value={{ resultado, setMovies }}>
        <ListMoviesScreen />
      </Context.Provider>
    </SearchContext.Provider>
  );
};
