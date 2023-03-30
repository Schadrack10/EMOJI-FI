import React from "react";
import { useContext, useEffect } from "react";
import { WebContext } from "@/context/WebContext";
import ShareApi from "./ShareApi";
import EmojiModal from "../components/EmojiModal";
import data from "../json/emojiapi.json";
import { Button, Typography } from "@mui/material";

const EmojiCard = () => {
  const { filterTerm, setFilterTerm, emojiData, setEmojiData, copyEmoji } =
    useContext(WebContext);

  useEffect(() => {
    setEmojiData(data);

    console.table(emojiData);
  }, []);

  return (
    <div>
      <h1>{filterTerm == "" ? "Find your emojis" : filterTerm}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          // border: "1px solid red",
          height: "350px",
          overflowX:"auto",
          // overFlowY:"hidden"
        }}
      >
        {emojiData
          .filter((emoji) => {
            if (filterTerm === "") {
              return null;
            } else if (
              emoji.slug
                .replace(/-/g, " ")
                .toLowerCase()
                .includes(filterTerm.toLowerCase())
            ) {
              return emoji;
            }
          })
          .map((emoji) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // border: "1px solid red",
              }}
              key={emoji.slug}
            >
              <Typography
                variant="h1"
                fontSize="40px"
                align="center"
                style={{ margin: "0 20px" }}
              >
                {emoji.character}
              </Typography>
              <div>
                <EmojiModal emoji={emoji} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmojiCard;
