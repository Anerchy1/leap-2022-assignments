import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Article from "./pages/Article";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/page/:page" element={<Products />} /> */}
        <Route path="/products/:id" element={<Product />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
