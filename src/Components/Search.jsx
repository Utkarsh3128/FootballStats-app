import Data from "./Data";
import { useGlobalContext } from "./Find";
import { ring2 } from "ldrs";

// Default values shown

const Search = () => {
  const { season, setSeason, league, setLeague, isLoading } = useGlobalContext();

  if (isLoading) {
    ring2.register();
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <l-ring-2
          size="80"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="0.8"
          color="white"
        ></l-ring-2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex justify-evenly">
        <form onSubmit={handleSubmit}>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="py-0 pr-[30px] pl-[15px] h-[30px] text-[15px] rounded-md border-black border-[1.2px]"
          >
            <option value="2023">2024-25</option>
            <option value="2023">2023-24</option>
            <option value="2022">2022-23</option>
            <option value="2021">2021-22</option>
            <option value="2020">2020-21</option>
            <option value="2019">2019-20</option>
          </select>
        </form>
        <form onSubmit={handleSubmit}>
          <select
            value={league}
            onChange={(e) => setLeague(e.target.value)}
            className="py-0 pr-[30px] pl-[15px] h-[30px] text-[15px] rounded-md border-black border-[1.2px]"
          >
            <option value="307">Saudi Professional League</option>
            <option value="39">English Premier League</option>
            <option value="140">La Liga</option>
            <option value="78">Bundesliga</option>
          </select>
        </form>
      </div>

      <Data />
    </>
  );
};

export default Search;
