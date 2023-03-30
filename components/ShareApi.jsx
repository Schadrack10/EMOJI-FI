import React from "react";
import { RWebShare } from "react-web-share";
import { ShareLocation, Share, VisibilityOutlined } from "@mui/icons-material";

const ShareApi = ({ CurrentEmoji }) => {
  let url = CurrentEmoji;

  const ShareData = async (emoji) => {
    console.log(emoji);

    if (navigator.share) {
      // Web Share API is supported
      await navigator.share(data);
    } else {
      // Fallback
      alert("not supported in my browser");
    }
  };
  return (
    <RWebShare
      data={{
        text: CurrentEmoji?.slug,
        url: `https://${CurrentEmoji.slug}`,
        title: CurrentEmoji?.character,
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <button>
        <Share /> 🔗
      </button>
    </RWebShare>
  );
};

export default ShareApi;
