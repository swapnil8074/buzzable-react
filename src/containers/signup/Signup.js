import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

class Signup extends Component {
  state = {
    form: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };

  handleFormSubmit = () => {
    console.log("Form submit button is getting clicked");
  };

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col className="left-login col-lg-6 col-xl-6">
              <Image
                src="/images/illustration.png"
                alt=""
                className="img-fluid illustration"
              />
              <span className="copyright-l">
                Copyright
                {new Date().getFullYear()}
                Social Media Analysis
              </span>
            </Col>
            <Col xl={6} lg={6} className="login-right">
              <div className="access-form">
                <figure className="text-center">
                  <img src="/images/login-logo.png" alt="" />
                  <figcaption>Buzzabl</figcaption>
                </figure>

                {/* Login Form */}
                <Formik
                  initialValues={this.state.form}
                  validationSchema={signupValidationScema}
                  onSubmit={this.handleFormSubmit}
                >
                  {({
                    handleChange,
                    values,
                    isSubmitting,
                    errors,
                    touched,
                    handleSubmit
                  }) => (
                    <Form className="form" onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Your Name"
                          className="envelop"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                        />

                        {touched.name && errors.name && (
                          <Form.Control.Feedback>
                            errors.name
                          </Form.Control.Feedback>
                        )}
                        {/*  <Form.Text className="text-muted">
                          Enter name.
                        </Form.Text> */}
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="user@mail.com"
                          className="envelop"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                        {/*  <Form.Text className="text-muted">
                          Enter email.
                        </Form.Text> */}
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
                        />
                        {/* <Form.Text className="text-muted">
                          Enter password
                        </Form.Text> */}
                      </Form.Group>
                      <Form.Group controlId="cpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="*****"
                          className="key"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                        />
                        {/* <Form.Text className="text-muted">
                          Enter password
                        </Form.Text> */}
                      </Form.Group>
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>
                {/* Login from end */}

                <p className="or">OR</p>
                <p className="text-center">
                  Already have account? <Link to="/login">Login</Link>
                </p>
              </div>
              <div className="terms">
                <a href="/">Terms of use.</a> <a href="/">Privacy Policy</a>
              </div>
            </Col>
          </Row>
        </Container>
        <Link className="pageclose" to="/">
          &times;
        </Link>
      </Fragment>
    );
  }
}

//  validation schema
const signupValidationScema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email("Email is not valid!")
    .required("Email is required"),
  password: Yup.string()
    .min(4, "Password must be 4 character or longer")
    .required("Password is required")
});

// Signup.propTypes = {
//   isAuthenticated =
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     registerUser: formData => {
//       dispatch(registerUser(formData));
//     }
//   };
// };

export default connect(
  null,
  null
)(Signup);
