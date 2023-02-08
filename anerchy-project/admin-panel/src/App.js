import "./styles/styles.css";
import "./styles/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import ContentWrapper from "./components/ContentWrapper";
import { useEffect, useState } from "react";
import Heading from "./pages/Heading";
import { Link, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignInError from "./pages/SignInError";
import SigninSuccess from "./pages/SigninSuccess";
import SignOut from "./pages/Signout";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import Articles from "./pages/Articles";
import Products from "./pages/Products";
import MenuPositions from "./pages/MenuPositions";
import Menus from "./pages/Menus";
import axios from "axios";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  const [menuShow, setMenuShow] = useState(false);
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/menus/admin").then((res) => {
      setMenus(res.data);
    });
  });
  // const [me, setMe] = useState(undefined);
  // useEffect(() => {
  //   const myData = localStorage.getItem("me");
  //   if (myData !== "undefined") {
  //     setMe(myData);
  //   }
  // }, []);

  // if (!me) {
  //   return (
  //     <Routes>
  //       <Route path="/signin" element={<SignIn />} />
  //       <Route
  //         path="/signin/success"
  //         element={<SigninSuccess setMe={setMe} />}
  //       />
  //       <Route path="/signup" element={<SignUp />} />
  //       <Route path="/*" element={<SignInError />} />
  //     </Routes>
  //   );
  // }
  return (
    <ModalProvider>
      <Navbar
        onToggle={() => {
          setMenuShow(!menuShow);
        }}
      />

      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${!menuShow && "hidden"}`}>
          <ul>
            {menus.map((menu) => {
              return (
                <li>
                  <Link to={menu.link}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/profile" element={<Profile me={me} />} /> */}
          {/* <Route path="/signout" element={<SignOut setMe={setMe} />} /> */}
          {/* <Route
            path="/articles"
            element={<ContentWrapper title="Blog posts" />}
          /> */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/menu-positions" element={<MenuPositions />} />
          <Route path="/menu-positions/:id" element={<Menus />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/something" element={<Heading />} />
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;
