import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:8001/categories").then((res) => {
      setCategories(res.data);
    });

    // fetch("https://demo-api-one.vercel.app/api/categories")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCategories(data.body);
    //   });
  }, [id]);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="brand" href="/">
                My Blog
              </a>
            </div>
            <div>
              <div className="search-btn">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Нүүр</Link>
              </li>
              <li>
                <Link to={"/products"}>Бараа</Link>
              </li>
              {categories.map((item) => (
                <li key={item.id}>
                  <Link to={`/categories/${item.id}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
