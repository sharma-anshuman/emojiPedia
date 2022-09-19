import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "😀": "GRINNING FACE",
  "😁": "GRINNING FACE WITH SMILING EYES",
  "😂": "FACE WITH TEARS OF JOY",
  "🤣": "ROLLING ON THE FLOOR LAUGHING",
  "😃": "SMILING FACE WITH OPEN MOUTH",
  "😄": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
  "😆": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYE",
  "😉": "WINKING FACE",
  "😊": "SMILING FACE WITH SMILING EYES",
  "😋": "FACE SAVOURING DELICIOUS FOOD",
  "😎": "SMILING FACE WITH SUNGLASSES"
};

var moreEmojis = {
  "😍": "SMILING FACE WITH HEART-SHAPED EYE",
  "😘": "FACE THROWING A KISS",
  "😗": "KISSING FACE",
  "😙": "KISSING FACE WITH SMILING EYES",
  "😚": "KISSING FACE WITH CLOSED EYES",
  "🙂": "SLIGHTLY SMILING FACE",
  "🤗": "HUGGING FACE",
  "🤔": "THINKING FACE",
  "😐": "NEUTRAL FACE",
  "😑": "EXPRESSIONLESS FACE",
  "😶": "FACE WITHOUT MOUTH",
  "🙄": "FACE WITH ROLLING EYES",
  "😏": "SMIRKING FACE"
};

var emojilist = Object.keys(emojiDict);

export default function App() {
  var [translationMsg, setTranslation] = useState(
    "Translation will appear here"
  );

  function inputChangeHandler(input) {
    var emoji = input.target.value;
    if (emoji.length === 0) {
      setTranslation("Translation will appear here");
    } else if (
      emojiDict[emoji] === undefined &&
      moreEmojis[emoji] === undefined
    ) {
      setTranslation("Sorry, we don't have this one :(");
    } else {
      if (emojiDict[emoji] === undefined) {
        setTranslation(moreEmojis[emoji]);
      } else {
        setTranslation(emojiDict[emoji]);
      }
    }
  }

  function clickHandler(emoji) {
    setTranslation(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <h1>Welcome to Emoji-Pedia</h1>
      <input
        placeholder="Enter emoji here"
        onChange={inputChangeHandler}
      ></input>
      <h3>{translationMsg}</h3>
      <h2>We know these emojis and more!!</h2>

      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{
              fontSize: "xx-large",
              margin: "0.5rem",
              cursor: "pointer"
            }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
