import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card";
import dayjs from "dayjs";
import relateTime from "dayjs/plugin/relativeTime";
dayjs.extend(relateTime);

export default function Products() {
  const [page, setPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const location = useLocation();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8001/products?pageSize=${pageSize}&page=${currentPage}`
      )
      .then((res) => {
        setPage(res.data);
      });
  }, [currentPage, pageSize]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("page")) {
      setCurrentPage(Number(searchParams.get("page")));
    }
    if (searchParams.has("pageSize")) {
      setPageSize(Number(searchParams.get("pageSize")));
    }
  }, [location]);
  if (!page) {
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading ... </span>
      </div>
    );
  }
  const searchItem = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = page.items.filter((product) => {
        return Object.values(product)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(page.items);
    }
  };
  const getPaginations = () => {
    let result = [];
    // first page adding
    result.push(
      <li className={`page-item ${1 === page.page && "active"}`}>
        {/* <a className="page-link" href="#">
          1
        </a> */}
        <Link
          className="page-link"
          to={`/products?pageSize=${pageSize}&page=${1}`}
        >
          1
        </Link>
      </li>
    );
    // front trible dots
    if (page.page - 3 > 0) {
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    if (page.page - 1 > 1) {
      result.push(
        <li className={`page-item `}>
          <Link
            className="page-link"
            to={`/products?pageSize=${pageSize}&page=${page.page - 1}`}
          >
            {page.page - 1}
          </Link>
        </li>
      );
    }

    if (page.page !== 1 && page.page !== page.totalPage) {
      result.push(
        <li className={`page-item active`}>
          <a className="page-link">{page.page}</a>
        </li>
      );
    }
    if (page.page + 1 < page.totalPage) {
      result.push(
        <li className={`page-item `}>
          <Link
            className="page-link"
            to={`/products?pageSize=${pageSize}&page=${page.page + 1}`}
          >
            {page.page + 1}
          </Link>
        </li>
      );
    }

    if (page.totalPage - 3 >= page.page) {
      // back trible dots
      result.push(
        <li className={`page-item`}>
          <span className="page-link">...</span>
        </li>
      );
    }
    // last page adding
    result.push(
      <li className={`page-item ${page.totalPage === page.page && "active"}`}>
        <Link
          className="page-link"
          to={`/products?pageSize=${pageSize}&page=${page.totalPage}`}
        >
          {page.totalPage}
        </Link>
      </li>
    );
    return result;
  };

  return (
    <main>
      <div className="container">
        <div>
          <input
            type="search"
            onChange={(e) => searchItem(e.target.value)}
            value={searchInput}
          />
          {console.log(searchInput)}
        </div>
        <div className="d-flex justify-content-end mb-3">
          <label>
            Pagination &nbsp;
            <select
              className="form-control d-inline-block w-auto"
              onChange={(e) => {
                setCurrentPage(1);
                setPageSize(e.target.value);
              }}
              value={pageSize}
            >
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
        <div className="row gy-4">
          {searchInput.length > 1
            ? filteredResults.map((product) => (
                <div className="col-md-3 col-sm-6 col-12" key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <Card
                      title={product.name}
                      image={product.imageUrl}
                      price={product.price}
                      quantity={product.quantity}
                      createdAt={dayjs(product.createdAt * 1000).fromNow()}
                    />
                  </Link>
                </div>
              ))
            : page?.items?.map((product) => (
                <div className="col-md-3 col-sm-6 col-12" key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <Card
                      title={product.name}
                      image={product.imageUrl}
                      price={product.price}
                      quantity={product.quantity}
                      createdAt={dayjs(product.createdAt * 1000).fromNow()}
                    />
                  </Link>
                </div>
              ))}
        </div>
      </div>
      <div className="container">
        <nav aria-label="...">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <Link
                className="page-link"
                to={`/products?pageSize=${pageSize}&page=${currentPage - 1}`}
              >
                Prev
              </Link>
            </li>
            {getPaginations()}
            <li
              className={`page-item ${
                currentPage === page.totalPage && "disabled"
              }`}
            >
              <Link
                className="page-link"
                to={`/products?pageSize=${pageSize}&page=${currentPage + 1}`}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
