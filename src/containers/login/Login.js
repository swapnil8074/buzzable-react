import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import {
  Image,
  Container,
  Row,
  Col,
  Figure,
  Form,
  Button
} from "react-bootstrap";
import Axios from "axios";
import * as yup from "yup";

class Login extends Component {
  state = {
    form: {
      email: "",
      password: ""
    }
  };

  // login form submit handler
  formSubmit = (values, { setSubmitting }) => {
    let response = Axios.post("/auth/login", values);
    console.log(response.data);
    setSubmitting(false);
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="left-login col-lg-6 col-xl-6">
              <img
                src="/images/illustration.png"
                alt=""
                className="img-fluid illustration"
              />
              <span className="copyright-l">
                Copyright
                {new Date().getFullYear()}
                Social Media Analysis
              </span>
            </div>
            <div className="login-right col-lg-6 col-xl-6">
              <div className="access-form">
                <figure className="text-center">
                  <Image src="/images/login-logo.png" alt="" />
                  <figcaption>Buzzabl</figcaption>
                </figure>

                <Formik
                  initialValues={{
                    email: "",
                    password: ""
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("asdjhasd");
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    handleChange,
                    values,
                    isSubmitting,
                    handleBlur,
                    handleSubmit,
                    touched,
                    errors
                  }) => (
                    <Form
                      className="form"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="user@mail.com"
                          className="envelop"
                          value={values.email}
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          Enter email. {errors.email}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="*****"
                          className="key"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        
                        <Form.Text className="text-muted">
                          Enter password
                        </Form.Text>
                      </Form.Group>
                      <Button type="submit" variant="" disabled={isSubmitting}>
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>

                <p className="or">OR</p>
                <Link to="/sign-up" className="targerbtn">
                  Sign Up free
                </Link>
              </div>
              <div className="terms">
                <a href="/">Terms of use.</a> <a href="/">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        <Link className="pageclose" to="/">
          &times;
        </Link>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: {
//       isAuthenticated: state.auth.isAuthenticated,
//       user
//     }
//   };
// };

// return connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid!")
    .required("Email is required!"),
  password: yup.string().required("Password is required!")
});
export default Login;
