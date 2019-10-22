import { GET_TWEETS } from "../actions/types";

const initialState = {
  keyword: null,
  tweets: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TWEETS:
      return { ...state, tweets: [] };

    default:
      return state;
  }
};

export default searchReducer;
