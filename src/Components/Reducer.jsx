const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STAT":
      return {
        ...state,
        isLoading: false,
        response: action.payload.response,
      };
    case "SEARCH_YEAR":
      return {
        ...state,
        year: action.payload,
      };
    case "SEARCH_LEAGUE":
      return {
        ...state,
        league: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
  }
};

export default reducer;
