import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

export default function MenuCreate({ afterSubmit, positionId }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("#");
  const [ordering, setOrdering] = useState("0");
  const [newTab, setNewTab] = useState(false);

  const submit = () => {
    axios
      .post("http://localhost:8001/menus", {
        name,
        link,
        ordering,
        newTab,
        positionId: Number(positionId),
      })
      .then((res) => {
        toast.success("Амжилттай нэмэгдлээ");
        afterSubmit(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
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
          placeholder="Name of the position..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Link </Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          type="text"
          placeholder="Name of the position..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ordering</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setOrdering(e.target.value);
          }}
          type="text"
          placeholder="Name of the position..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>New Tab?</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setNewTab(e.target.value);
          }}
          type="text"
          placeholder="Name of the position..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
