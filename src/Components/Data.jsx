import { useGlobalContext } from "./Find";
import { GiSoccerBall } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";

const Data = () => {
  const { response } = useGlobalContext();
  const style = { width: "40px", height: "30px"};

  return (
    <>
      <div className="">
        {response.map((playerData) => (
          <div
            key={playerData.player.id}
            className="w-[430px] rounded-2xl my-5 mx-auto p-4 bg-gradient-to-br from-indigo-300 to-violet-400 card "
          >
            <div className="w-full">
              <div className="player--card flex justify-evenly rounded-md items-center my-3 ">
                <div className="card--image my-2 ">
                  <img
                    src={playerData.player.photo}
                    className="h-full w-full rounded-[100%] "
                    alt={playerData.player.name}
                  />
                </div>
                <div className="player--name">
                  <h2 className="font-bold text-[25px] font-[sans-serif] ">
                    <span>{playerData.player.name}</span>
                  </h2>
                </div>
              </div>

              <div className="card--description">
                <div className="card--club flex items-center justify-center gap-4 py-2">
                  <img
                    src={playerData.statistics[0].team.logo}
                    className="w-[40px] h-[40px] "
                    alt={playerData.statistics[0].team.name}
                  />
                  <h2>{playerData.statistics[0].team.name}</h2>
                </div>
                <div className="card--info my-3 mx-auto ">
                  <div className="flex justify-evenly my-2">
                    <div className="card--country col-span-1 flex flex-col px-2 items-center">
                      <p className="font-[500] uppercase text-[12px] ">
                        Nationality
                      </p>
                      <p>{playerData.player.nationality} </p>
                    </div>
                    <div className="player--birth col-span-1 flex flex-col px-2 items-center">
                      <p className="uppercase text-[12px] ">
                        {playerData.player.birth.date}
                      </p>
                      <p>{playerData.player.age} Years</p>
                    </div>
                    <div className="player--height col-span-1 flex flex-col px-2 items-center">
                      <p className="uppercase text-[12px] ">height</p>
                      <p>{playerData.player.height}</p>
                    </div>
                  </div>
                  <div className="flex justify-evenly">
                    <div className="card--country col-span-1 flex flex-col items-center">
                      <p className="uppercase text-[12px] ">Position</p>
                      <p>{playerData.statistics[0].games.position} </p>
                    </div>
                    <div className="card--country col-span-1 flex flex-col items-center">
                      <p className="uppercase text-[12px] ">Rating</p>
                      <p>
                        {Number(playerData.statistics[0].games.rating).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-stats flex justify-evenly items-center my-4">
                <div className="goals flex flex-col items-center">
                  <GiSoccerField style={style} />
                  <p>{playerData.statistics[0].games.appearences}</p>
                </div>
                <div className="goals flex flex-col items-center">
                  <GiSoccerBall style={style} />
                  <p>{playerData.statistics[0].goals.total}</p>
                </div>
                <div className="assists flex flex-col items-center">
                  <GiConverseShoe style={style} />
                  <p>{playerData.statistics[0].goals.assists}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Data;
