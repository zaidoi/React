import { useState, useEffect } from "react";
import Card from "./components/Card";
import GameOver from "./components/GameOver";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState([]);
  const [state, setState] = useState(true);
  const [valArr, setValArr] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function getGifs() {
      try {
        const res = await fetch(
          "https://api.giphy.com/v1/gifs/trending?api_key=l7QekHVjHfB0jYoc27zEoRuMjoKrZ677&limit=12"
        );
        const data = await res.json();
        setData(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getGifs();
    setState(!state);
  }, []);

  const scoreIncrement = () => {
    setScore((prev) => prev + 1);
  };
  function loopingArr(title) {
    for (let i = 0; i < valArr.length ; i++) {
      if (valArr[i] === title) {
        setBestScore((prev) => Math.max(prev, score));
        setScore(0);
        setValArr([]);
        setGameOver(true)
        setState(true)
        return;
      }
    }
    setValArr((prev) => [...prev, title]);
    scoreIncrement();
  }

  function gameOverClick(){
    setGameOver(false)
    setScore(0);
    setData(shuffleArr(data));
   setState(false)
  }

  function shuffleArr(arr) {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const cardClick = (e) => {
    const title = e.currentTarget.querySelector("h2").innerText;
    loopingArr(title);
    setData(shuffleArr(data));
    console.log("clicked");
  };

  return (
    <>
      <div className="nav flex flex-wrap justify-between  ml-3 mr-3 ">
        <div className="left pt-4">
          <h1 className="text-4xl text-black font-bold">Memory Game</h1>
          <h3 className="font-semibold">
            Get points by clicking on an image but don't click on any more than
            once!
          </h3>
        </div>
        <div className="right pt-6 mr-3">
          <h2 className="font-medium">Score: {score}</h2>
          <h2 className="font-medium">Best Score: {bestScore}</h2>
        </div>
      </div>
      {gameOver && (
        <GameOver func={gameOverClick}/>
      )}

      {state ? (
        <div className="flex justify-center items-center h-100">
          <h1 className="font-bold text-center text-3xl">Loading...</h1>
        </div>
      ) : (
        <div className="flex flex-wrap mt-5 p-5 gap-5">
          {data.map((gif) => {
            return (
              <Card
                key={gif.id}
                pokImg={gif.images.fixed_height.url}
                pokName={gif.title}
                func={cardClick}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
