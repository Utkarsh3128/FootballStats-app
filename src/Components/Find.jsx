import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = createContext();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b7f2ee5985mshd8888e7fba34037p1ae3aajsnc80a1461299d",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
};

const initialState = {
  year: "2023",
  league: "307",
  response: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({type: 'SET_LOADING'})
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STAT",
        payload: {
          response: data.response,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setSeason = (searchYear) => {
    dispatch({ type: "SEARCH_YEAR", payload: searchYear });
  };

  const setLeague = (searchLeague) => {
    dispatch({ type: "SEARCH_LEAGUE", payload: searchLeague });
  };

  useEffect(() => {
    const api = `https://api-football-beta.p.rapidapi.com/players/topscorers?season=${state.year}&league=${state.league}`;
    fetchData(api);
  }, [state.year, state.league]);

  return (
    <>
      <AppContext.Provider value={{ ...state, setSeason, setLeague }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
