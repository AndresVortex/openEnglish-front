import React, { useState } from "react";
import { ListMoviesScreen } from "./components/ListMoviesScreen";

import "./styles/stylesListMovies.css";
import {Provider} from 'react-redux'
import { Search, Resultado } from "./interface/response";
import { store } from './store/store';
export const App = () => {
  // const [resultado, setMovies] = useState<Resultado>({Search: []});
  // const [filter, setFilter] = useState({title: 'Love', year: 2020, type:'', page: 1})
  return (
    <Provider store={store}>
      <ListMoviesScreen />

    </Provider>
     
  );
};
