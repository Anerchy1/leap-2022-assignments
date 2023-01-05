import { useState } from "react";
import PostCreate from "../Blogs/PostCreate";
import DynamicModal from "../utils/DynamicModal";

export default function EditBtn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <DynamicModal
        content={<PostCreate />}
        show={show}
        handleClose={handleClose}
        // handleSave={handleSave}
        title="Edit Post"
      />
      <button
        className="btn btn-sm btn-outline-primary me-2"
        onClick={handleShow}
      >
        Edit
      </button>
    </>
  );
}
