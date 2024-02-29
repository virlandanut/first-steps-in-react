import { useState } from "react";
import { arrayDice, add } from "../utils";
import Dices from "../dices/Dices";
import "./Joc.css";

export default function Joc({ numDaces, faces, winCheck }) {
  const [joc, setJoc] = useState(arrayDice(numDaces, faces));

  const isWinner = winCheck(joc);
  console.log(isWinner);

  function refresh() {
    return setJoc(arrayDice(numDaces, faces));
  }

  function resetGame() {
    return setJoc(new Array(numDaces).fill(0));
  }

  return (
    <main className="Joc">
      {isWinner && "YOU WIN!"}
      <div>
        <h1>Lucky</h1>
        <Dices dice={joc} color={"red"} />
      </div>
      <div>
        <button className="refresh-button" onClick={refresh}>
          Refresh
        </button>
        <button className="reset-button" onClick={resetGame}>
          Reset
        </button>
      </div>
    </main>
  );
}
