import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Route, Routes } from "react-router";
import "./App.css";
import { Layout, CategoryAdd } from "./Components";
import { CategoryEdit } from "./Components/CategoryCRUD/CategoryEdit";
import { CategoriesScreen, HomeScreen } from "./Pages";

const bgColor = blueGrey[50];
const wrapperStyle = {
  p: 5,
  bgcolor: bgColor,
  width: "calc(100vw - 65px)",
  minHeight: "calc(100vh - 65px)",
};
function App() {
  return (
    <>
      <Layout>
        <Box sx={wrapperStyle}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/categories" element={<CategoriesScreen />} />
            <Route path="/categories/new" element={<CategoryAdd />} />
            <Route path="/categories/edit" element={<CategoryEdit />} />
          </Routes>
        </Box>
      </Layout>
    </>
  );
}

export default App;
