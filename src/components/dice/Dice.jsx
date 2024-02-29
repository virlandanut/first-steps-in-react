import "./Dice.css";

export default function Dice({ value, color = "green" }) {
  return (
    <div className="Dice" style={{ backgroundColor: color }}>
      {value}
    </div>
  );
}
