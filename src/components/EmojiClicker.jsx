import { useState } from "react";
import { v4 as uuid } from "uuid";

function EmojiClicker() {
  const [emojis, setEmoji] = useState([{ id: uuid(), emoji: "😀" }]);
  const addEmoji = () => {
    setEmoji((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😟" }]);
  };

  const makeHearts = () => {
    setEmoji((oldEmojis) => {
      return oldEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      });
    });
  };

  const deleteEmoji = (id) => {
    setEmoji((oldEmojis) => {
      return oldEmojis.filter((element) => element.id !== id);
    });
  };

  return (
    <div>
      {emojis.map((emoji) => (
        <span
          onClick={() => deleteEmoji(emoji.id)}
          key={emoji.id}
          style={{ fontSize: "4rem" }}>
          {emoji.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add emoji</button>
      <button onClick={makeHearts}>Make them all hearts</button>
    </div>
  );
}

export default EmojiClicker;
