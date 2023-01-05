import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostCreate() {
  const [value, setValue] = useState("");
  return (
    <Form>
      <Form.Group className="mb-3" controlId="form.Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="State your name ..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.Description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </Form.Group>
      <Button variant="primary">Submit</Button>
    </Form>
  );
}
