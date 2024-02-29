import { useState } from "react";

function ScoreKeeper({ numPlayers = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  function incrementScore(index) {
    if (scores[index] < target) {
      const newScores = [...scores];
      newScores[index] += 1;
      setScores(newScores);
    } else {
      setScores(scores);
    }
  }

  const resetEverything = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  return (
    <div>
      <ul>
        {scores.map((s, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            Player{index + 1} : {s}
            <button onClick={() => incrementScore(index)}>+1</button>
            {s >= target && <p>YOU WIN!</p>}
          </li>
        ))}
      </ul>
      <button onClick={resetEverything}>RESET</button>
    </div>
  );
}

export default ScoreKeeper;
