import { useEffect, useState } from "react/cjs/react.production.min";
import Seo from "../components/Seo";

const API_KEY = "dbe5237965f144dae7ac54cf7996306a";

export default function Home(){
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    (async () =>{
      const data = await (await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )).json();
    })();
    console.log(data)
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
    </div>
  );
}