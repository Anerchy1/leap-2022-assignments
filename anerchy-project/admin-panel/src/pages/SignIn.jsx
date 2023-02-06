import axios from "axios";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const TOAST_CONFIG = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  theme: "colored",
};

function SignIn() {
  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitSignin = () => {
    axios
      .post("https://demo-api-one.vercel.app/api/signin", {
        email,
        password,
      })
      .then((res) => {
        toast.success(res.data.message, TOAST_CONFIG);
        localStorage.setItem("token", res.data.body);

        setTimeout(() => {
          navigate("/signin/success");
        });
      })
      .catch((e) => {
        const errorMsg = e.response.data.message || "Aldaa garlaa";
        toast.error(errorMsg, TOAST_CONFIG);
      });

    // fetch("https://demo-api-one.vercel.app/api/signin", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then((res) => {
    //     status = res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (status !== 200) {
    //       toast.error(data.message, TOAST_CONFIG);
    //     } else {
    //       toast.success(data.message, TOAST_CONFIG);
    //       localStorage.setItem("token", data.body);

    //       setTimeout(() => {
    //         navigate("/signin/success");
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err.message, TOAST_CONFIG);
    //   });
  };
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submitSignin();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
              />
              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
                <Link className="btn btn-sm btn-success me-3" to={"/signup"}>
                  Sign up
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
