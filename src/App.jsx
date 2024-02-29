import { useState } from "react";
import "./App.css";
import Dices from "./components/dices/Dices";
import Joc from "./components/joc/Joc";
import Button from "./components/button/Button";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/login/Login";
import { add } from "./components/utils";
function App() {
  function lessThanFour(dice) {
    return add(dice) < 4;
  }

  function allEquals(dice) {
    return dice.every((v) => v === dice[0]);
  }
  return (
    <>
      <main>
        {/* <Button
          onClick={() => console.log("Clicked")}
          text={"Hello"}
          culoare={"#8dd06c"}
        /> */}
        {/* <Login /> */}
        <Joc numDaces={2} faces={6} winCheck={allEquals} />
      </main>
    </>
  );
}

export default App;
