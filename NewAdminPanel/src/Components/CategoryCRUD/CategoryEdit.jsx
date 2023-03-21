import { Home } from "@mui/icons-material";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { BreadCrumbs } from "../BreadCrumbs";

const breadCrumbs = [
  {
    label: "",
    path: "/",
    icon: <Home />,
  },
  {
    label: "Categories",
    path: "/categories",
  },
  {
    label: "Edit",
  },
];

export const CategoryEdit = ({ category }) => {
  const [name, setName] = useState(category?.name);
  const [productCount, setProductCount] = useState(category?.productCount);

  const submit = () => {
    axios
      .put("http://localhost:8000/categories/" + category?.id, {
        name,
        productCount,
      })
      .then((res) => {
        console.log("succesfully edited");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
