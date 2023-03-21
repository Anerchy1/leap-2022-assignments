import axios from "axios";
import { useState } from "react";

export const CategoryDelete = ({ category }) => {
  useState(() => {
    axios.delete("http://localhost:8000/categories/" + category?.id);
  }, []);
  return <></>;
};
