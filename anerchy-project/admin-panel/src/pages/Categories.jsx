import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CategoryCreate from "../components/Categories/CategoryCreate";
import EditPost from "../components/Categories/EditPost";
import Table from "../components/Table/Table";
import { ModalContext } from "../contexts/ModalContext";
import Heading from "./Heading";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const { setModalContent, setModalShow, setModalTitle } =
    useContext(ModalContext);

  useEffect(() => {
    axios
      .get("http://localhost:8001/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (category) => {
    setModalShow(false);
    setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalTitle("Category nemeh");
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };
  const afterEdit = (category) => {
    modalClose();
    let newCategories = categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      }
      return cat;
    });
    setCategories(newCategories);
  };
  const showEditModal = (category) => {
    setModalContent(<EditPost category={category} afterEdit={afterEdit} />);
    setModalShow(true);
  };
  return (
    <>
      <div className="body-container container-sm">
        <Heading handleShow={showCreateModal} title="Categories" />
        <Table items={categories} onEdit={showEditModal} />
      </div>
    </>
  );
}
