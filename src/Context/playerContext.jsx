import { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [year, setYear] = useState("2023");
  const [league, setLeague] = useState("306");

  return (
    <PlayerContext.Provider value={{ year, setYear, league, setLeague }}>
      {children}
    </PlayerContext.Provider>
  );
};

// custom hook
const useMyContext = () => {
  return useContext(PlayerContext);
};

export default { PlayerContext, PlayerProvider, useMyContext };
