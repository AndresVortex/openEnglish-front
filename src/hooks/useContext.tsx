import { createContext, Dispatch } from "react";
import { Search, Resultado } from "../interface/response";

export const Context = createContext<{
  resultado?: Resultado;
  setMovies?: Dispatch<React.SetStateAction<Resultado>>;
}>({});

export const  SearchContext = createContext({})