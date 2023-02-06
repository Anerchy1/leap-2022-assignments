import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCreate from "../components/Categories/CategoryCreate";
import EditPost from "../components/Categories/EditPost";
import Table from "../components/Table/Table";
import DynamicModal from "../components/utils/DynamicModal";
import Heading from "./Heading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalshow] = useState(false);

  const [modalContent, setModalContent] = useState(<></>);
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
    setModalshow(false);
  };
  const afterSubmit = (category) => {
    setModalshow(false);
    setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalContent(<CategoryCreate afterSubmit={afterSubmit} />);
    setModalshow(true);
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
    setModalshow(true);
  };
  return (
    <>
      <div className="body-container container-sm">
        <Heading handleShow={showCreateModal} title="Categories" />
        <Table items={categories} onEdit={showEditModal} />
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
