import { useEffect, useState } from "react";
import AnimeChart from "./AnimeChart";
import Article from "./Article";

const Home = (): JSX.Element => {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    getAnimeRes();
  }, []);

  const getAnimeRes = async () => {
    const data = await fetch("https://api.jikan.moe/v4/top/anime");
    const response = await data.json();
    setAnimes(response.data);
    console.log(response.data);
  };

  return (
    <>
      {!animes ? (
        <h1 className="text-gray-800 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl">
          Loading...
        </h1>
      ) : (
        <>
          <section className="container my-5 mx-auto">
            <div className="flex items-center flex-wrap md:flex justify-evenly">
              {animes.map((anime, i) => (
                <Article key={i} {...(anime as object)} />
              ))}
            </div>
          </section>
          <div className="my-2 mx-auto">
            <AnimeChart animes={animes} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
