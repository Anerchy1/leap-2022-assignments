import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { json, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TOAST_CONFIG = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  theme: "colored",
};
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const submitSignup = () => {
    let status = 200;
    fetch("https://demo-api-one.vercel.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, repassword }),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (status !== 200) {
          toast.error(data.message, TOAST_CONFIG);
        } else {
          toast.success(data.message, TOAST_CONFIG);
          setTimeout(() => {
            navigate("/signin");
          });
        }
      })
      .catch((err) => {
        toast.error(err.message, TOAST_CONFIG);
      });
  };
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submitSignup();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
                <Form.Label>Repassword</Form.Label>
                <Form.Control
                  value={repassword}
                  onChange={(e) => {
                    setRepassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Repassword"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
