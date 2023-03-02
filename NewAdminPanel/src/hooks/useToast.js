import { useContext } from "react";
import { ToastContext } from "../contexts";

export const useToast = () => {
  const { setType, setOpen, setMessage } = useContext(ToastContext);
  const showToast = (message, type) => {
    setType(type);
    setMessage(message);
    setOpen(true);
  };
  return showToast;
};
