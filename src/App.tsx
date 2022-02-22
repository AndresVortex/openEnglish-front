import React, { useEffect, useState } from "react";
import { ListMoviesScreen } from "./components/ListMoviesScreen";

import "./styles/stylesListMovies.css";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Search, Resultado } from "./interface/response";
import { store, RootState } from './store/store';
import { searchMoviesTypes } from './actions/uiActions';
export const App = () => {
  const dispatch = useDispatch()

  const {firsTime} =useSelector((state:RootState) => state.ui)

  useEffect(() => {
      if(firsTime){
        dispatch(searchMoviesTypes())
        console.log('se ejecuta endpoint de base de datos');
      }
  }, [firsTime, dispatch])
  
  return (
    <Provider store={store}>
      <ListMoviesScreen />

    </Provider>
     
  );
};
