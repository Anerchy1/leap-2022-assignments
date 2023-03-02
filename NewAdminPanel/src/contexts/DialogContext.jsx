import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent, DialogContentText } from "@mui/material";
import { createContext } from "react";
import { useState } from "react";

export const DialogContext = createContext(null);

export const DialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState("Confirm");
  const [denyBtn, setDenyBtn] = useState("Deny");
  const [title, setTitle] = useState("");

  const handleClose = () => {
    setOpen(false);
    // setConfirmBtn("Confirm");
    // setDenyBtn("Deny");
  };

  return (
    <DialogContext.Provider
      value={{ setOpen, setConfirmBtn, setDenyBtn, setTitle }}
    >
      {children}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Uur yuu asuumaar baina daa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{denyBtn}</Button>
          <Button onClick={handleClose} autoFocus>
            {confirmBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </DialogContext.Provider>
  );
};
