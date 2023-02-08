import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CategoryCreate from "../components/Categories/CategoryCreate";
import EditPost from "../components/Categories/EditPost";
import Table from "../components/Table/Table";
import { ModalContext } from "../contexts/ModalContext";
import Heading from "./Heading";

export default function Products() {
  const { setModalContent, setModalShow, setModalTitle } =
    useContext(ModalContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (products) => {
    setModalShow(false);
    setProducts([...products, products]);
  };

  const showCreateModal = () => {
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };
  const afterEdit = (products) => {
    modalClose();
    let newProducts = products.map((product) => {
      if (product.id === products.id) {
        return products;
      }
      return product;
    });
    setProducts(newProducts);
  };
  const showEditModal = (category) => {
    setModalContent(<EditPost category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };
  return (
    <>
      <div className="body-container container-sm">
        <Heading handleShow={showCreateModal} title="Categories" />
        <Table items={products} onEdit={showEditModal} />
      </div>
    </>
  );
}
