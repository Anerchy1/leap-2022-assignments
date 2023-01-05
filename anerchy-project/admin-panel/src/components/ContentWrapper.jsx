import { useState } from "react";
import Table from "./Table/Table";
import DynamicModal from "./utils/DynamicModal";
import Button from "react-bootstrap/Button";
import { IconName, SlPlus } from "react-icons/sl";
import PostCreate from "./Blogs/PostCreate";

export default function ContentWrapper({ title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-sm body-container">
      <DynamicModal
        content={<PostCreate />}
        show={show}
        handleClose={handleClose}
        // handleSave={handleSave}
        title="Create Post"
      />
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Create <SlPlus />
          </Button>
        </div>
      </div>
      <Table />
    </div>
  );
}
