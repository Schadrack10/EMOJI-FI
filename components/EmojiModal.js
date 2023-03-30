import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareApi from "./ShareApi";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import { ShareLocation, Share, VisibilityOutlined } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EmojiModal({ emoji }) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [copyText, setCopyText] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const pressCopyBtn = () => {
    setCopied(true);
    setCopyText("Copied emoji!!");

    setTimeout(() => {
      setCopied(false);
      setCopyText("");
    }, 2400);
  };

  const { slug, character } = emoji;

  return (
    <div>
      <Button onClick={handleOpen}>
        <VisibilityOutlined sx={{ color: "#000" }} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography fontSize={14} variant="h6" sx={{ mt: 0.2 }}>
              {slug.replace(/-/g, " ")}
            </Typography>
            <Typography
              variant="h1"
              align="center"
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {character}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{ display: "flex", flexDirection: "column" }}
                onClick={() => pressCopyBtn()}
              >
                {copied ? (
                  <AssignmentTurnedInIcon sx={{ color: "#000" }} />
                ) : (
                  <AssignmentIcon sx={{ color: "#000" }} />
                )}
                <Typography variant="p" color="#000" fontSize={15}>
                  {copyText}
                </Typography>
              </Button>
               <ShareApi CurrentEmoji={emoji}/>
              {/* <Button>
                <Share sx={{ color: "#000" }} />
              </Button> */}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
