import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CategoryCreate from "../components/Categories/CategoryCreate";
import EditPost from "../components/Categories/EditPost";
import ArticleTable from "../components/Table/ArticleTable";
import { ModalContext } from "../contexts/ModalContext";
import Heading from "./Heading";

export default function Articles() {
  const { setModalContent, setModalShow, setModalTitle } =
    useContext(ModalContext);

  const [categories, setCategories] = useState([]);

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
    setModalShow(false);
  };
  const afterSubmit = (category) => {
    setModalShow(false);
    setCategories([...categories, category]);
  };

  const showCreateModal = () => {
    setModalTitle("Article nemeh");
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
        <ArticleTable items={categories} onEdit={showEditModal} />
      </div>
    </>
  );
}
