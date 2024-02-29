import React from "react";

export default function Button({ text, culoare, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: culoare }}>
      {text}
    </button>
  );
}
