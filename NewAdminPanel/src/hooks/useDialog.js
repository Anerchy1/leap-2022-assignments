import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export const useDialog = () => {
  const { setConfirmBtn, setOpen, setDenyBtn, setTitle } =
    useContext(DialogContext);
  const showDialog = (confirmBtn, denyBtn, title) => {
    setOpen(true);
    setConfirmBtn(confirmBtn);
    setDenyBtn(denyBtn);
    setTitle(title);
  };
  return showDialog;
};
