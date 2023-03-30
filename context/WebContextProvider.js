import React, { useState } from "react";
import { WebContext } from "./WebContext";

const WebContextProvider = ({ children }) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [copy, setCopy] = useState("");
  const [emojiData, setEmojiData] = useState([]);

  const copyEmoji = (emojiName, emojiIcon) => {
    console.log(emojiName);
    alert(emojiIcon + " " + emojiName);
    setCopy(emojiName);
  };

  return (
    <WebContext.Provider
      value={{ filterTerm, setFilterTerm, emojiData, setEmojiData, copyEmoji }}
    >
      {children}
    </WebContext.Provider>
  );
};

export default WebContextProvider;
