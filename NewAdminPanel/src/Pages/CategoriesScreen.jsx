import { Delete, Edit, Home } from "@mui/icons-material";
import { Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BreadCrumbs } from "../Components/BreadCrumbs";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "productCount", headerName: "Name", flex: 1 },
  {
    field: "",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <Stack sx={{ flexDirection: "row", gap: 1 }}>
        <Tooltip title="edit">
          <IconButton color="primary">
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete">
          <IconButton color="secondary">
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    ),
  },
];

const breadCrumbs = [
  {
    label: "",
    path: "/",
    icon: <Home />,
  },
  {
    label: "Categories",
  },
];
export const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  const navigate = useNavigate();
  const navigateNewCategory = () => {
    navigate("/categories/new");
  };

  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

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
        <Typography variant="h4" sx={{ mb: 3 }}>
          Categories
        </Typography>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={navigateNewCategory}>
            New{" "}
          </Button>
          <Button variant="contained">Filter </Button>
        </Stack>
        <Box sx={{ height: 400, width: "100%", mt: 3 }}>
          <DataGrid
            rows={categories}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(e) => {
              return setPageSize(e.target);
            }}
            rowsPerPageOptions={[5, 15]}
            checkboxSelection
          />
        </Box>
      </Stack>
    </>
  );
};
