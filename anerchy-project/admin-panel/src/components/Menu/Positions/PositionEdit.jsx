import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export default function MenuPositionEdit({ afterEdit, position }) {
  const [value, setValue] = useState("");
  const [name, setName] = useState(position.name);
  const [alias, setAlias] = useState(position.alias);
  const submit = () => {
    axios
      .put("http://localhost:8001/menu-positions/" + position?.id, {
        name,
        alias,
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
        <Form.Label>Alias</Form.Label>
        <Form.Control
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
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
