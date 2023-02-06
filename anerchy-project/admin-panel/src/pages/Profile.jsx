import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";

const TOAST_CONFIG = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  theme: "colored",
};

export default function Profile({ me }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const oldMe = JSON.parse(localStorage.getItem("me"));
  const updateProfile = () => {
    me.password = password;
    me.email = email;
    localStorage.setItem("me", JSON.stringify({ ...oldMe, email, password }));
  };

  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                updateProfile();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>New email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  placeholder="New email"
                />
                <Form.Text className="text-muted">
                  Type your new email
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>New password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  placeholder="New Password"
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Change
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
