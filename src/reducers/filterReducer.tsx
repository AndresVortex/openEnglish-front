import { types } from "../types/types";

const initialState = {
  title: "Love",
  year: 2020,
  type: "",
  page: 1,
};

export const filterReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case types.setFilter:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
