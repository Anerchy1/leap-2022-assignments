import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCreate from "../components/Categories/CategoryCreate";
import EditPost from "../components/Categories/EditPost";
import Table from "../components/Table/Table";
import DynamicModal from "../components/utils/DynamicModal";
import Heading from "./Heading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [modalShow, setModalshow] = useState(false);

  const [modalContent, setModalContent] = useState(<></>);
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
    setModalshow(false);
  };
  const afterSubmit = (products) => {
    setModalshow(false);
    setProducts([...products, products]);
  };

  const showCreateModal = () => {
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalshow(true);
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
    setModalshow(true);
  };
  return (
    <>
      <div className="body-container container-sm">
        <Heading handleShow={showCreateModal} title="Categories" />
        <Table items={products} onEdit={showEditModal} />
        <DynamicModal
          content={modalContent}
          show={modalShow}
          handleClose={modalClose}
          title="Create Post"
        />
      </div>
    </>
  );
}
