import { useState,useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState([]);
  const [state,setState] = useState(true)
  useEffect(() => {
    async function getGifs(){
      try{
        const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=l7QekHVjHfB0jYoc27zEoRuMjoKrZ677&limit=12')
        const data = await res.json()
        setData(data.data)
        console.log(data.data);
        
      }catch (err){
       console.log(err);
      }
    }
    getGifs()
    setState(!state)
  }, []);
  

  return (
    <>
      <div className="nav flex flex-wrap justify-between  ml-3 mr-3 ">
        <div className="left pt-4">
          <h1  className="text-4xl text-[#22C1C3]">Pokemon Game</h1>
          <h3>
            Get points by clicking on an image but don't click on any more than
            once!
          </h3>
        </div>
        <div className="right pt-6 mr-3">
          <h2>Score: {score}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 p-5 gap-5">
       {data.map((gif) =>{
       return <Card
        key={gif.id}
        pokImg={gif.images.fixed_height.url}
        pokName={gif.title}/>
       })}
      </div>
      </>
  );
}

export default App;
