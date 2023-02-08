import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CategoryCreate({ afterSubmit }) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    axios
      .post("http://localhost:8001/categories", {
        name,
        description,
      })
      .then((res) => {
        afterSubmit(res.data);
      })
      .catch((err) => {
        // if (err.response.status === 401 || err.response.status === 403) {
        //   navigate("/signout");
        // }
        console.log(err);
      });
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="State your name ..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </Form.Group>
      <Button type="submit" variant="primary">
        Add
      </Button>
    </Form>
  );
}
