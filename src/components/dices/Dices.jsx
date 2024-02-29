import Dice from "../dice/Dice";
import "./Dices.css";

export default function Dices({ dice, color }) {
  return (
    <section className="Dices">
      {dice.map((val, idx) => (
        <Dice color={color} key={idx} value={val} />
      ))}
    </section>
  );
}
