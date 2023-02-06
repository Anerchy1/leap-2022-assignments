import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCreate from "../components/Categories/CategoryCreate";
import EditPost from "../components/Categories/EditPost";
import ArticleTable from "../components/Table/ArticleTable";
import DynamicModal from "../components/utils/DynamicModal";
import Heading from "./Heading";

export default function Articles() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalshow] = useState(false);

  const [modalContent, setModalContent] = useState(<></>);
  useEffect(() => {
    axios("https://demo-api-one.vercel.app/api/articles")
      .then((res) => {
        setCategories(res.data.body);
      })
      .catch((e) => console.log(e));
    // fetch("https://demo-api-one.vercel.app/api/articles")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.body);
    //     setCategories(data.body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
        <ArticleTable items={categories} onEdit={showEditModal} />
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
