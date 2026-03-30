import HomeHero from "./components/HomeHero";
import MostPlayedGames from "./components/MostPlayedGames";
import NewGames from "./components/NewGames";
import Recomendations from "./components/Recomendations";
export default function Home() {
  return (
    <>
      <HomeHero />
      <MostPlayedGames/>
      <NewGames/>
      <Recomendations/>
      
    </>
  );
}
