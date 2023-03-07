import { Home } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
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
    label: "New",
  },
];
export const CategoryAdd = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();
  const navigateCancel = () => {
    navigate("/categories");
  };
  const submit = () => {
    axios
      .post("http://localhost:8000/categories", { name, slug })
      .then((res) => {
        navigate("/categories");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <BreadCrumbs items={breadCrumbs} />
      <Stack
        sx={{
          mt: 3,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        }}
      >
        <Typography sx={{ pt: 3 }} variant="h4">
          Add Category
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            console.log(e);
          }}
          sx={{
            pt: 3,
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          onSubmit={(e) => {
            console.log(e);
          }}
          sx={{
            pt: 3,
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
            }}
            id="outlined-basic"
            label="Slug"
            variant="outlined"
          />
        </Box>
        <Box sx={{ p: 3 }} display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            onClick={() => {
              submit();
            }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={navigateCancel}>
            Cancel
          </Button>
        </Box>
      </Stack>
    </>
  );
};
