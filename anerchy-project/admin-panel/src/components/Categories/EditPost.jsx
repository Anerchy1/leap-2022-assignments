import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export default function EditPost({ afterEdit, category }) {
  const [value, setValue] = useState("");
  const [name, setName] = useState(category?.name);
  const [description, setDescription] = useState(category?.description);
  const submit = () => {
    axios
      .put("http://localhost:8001/categories/" + category?.id, {
        name,
        description,
      })
      .then((res) => {
        console.log("amjilttai uurchilluu");
        afterEdit(res.data);
        // return res.json();
      })
      .catch((err) => {
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
        Edit
      </Button>
    </Form>
  );
}
