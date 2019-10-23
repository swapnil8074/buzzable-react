import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Signup extends Component {
  handleRegisterSubmit = (values, { setSubmitting }) => {
    this.props.registerUser(values);
    // console.log("Form submit button is getting clicked");
    // console.log(values);
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
                  initialValues={{
                    name: "swapnil",
                    email: "swapnil@gmail.com",
                    password: "swapnil",
                    confirmPassword: "swapnil"
                  }}
                  validationSchema={signupValidationScema}
                  onSubmit={this.handleRegisterSubmit}
                >
                  {({
                    handleChange,
                    values,
                    isSubmitting,
                    handleBlur,
                    errors,
                    touched,
                    handleSubmit
                  }) => (
                    <Form
                      noValidate
                      className="form"
                      autoComplete="off"
                      onSubmit={handleSubmit}
                    >
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Your Name"
                          className="envelop"
                          name="name"
                          value={values.name}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={touched.name && errors.name}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
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
                          onBlur={handleBlur}
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={touched.email && errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
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
                          onBlur={handleBlur}
                          isInvalid={touched.password && errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
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
                          onBlur={handleBlur}
                          isInvalid={
                            touched.confirmPassword && errors.confirmPassword
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                      >

                        { if(this.props.authLoading){
sasds
                        }else{
das
                        } }
                        {this.props.authLoading && 
                          <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                        }
                        {!this.props.authLoading && "Submit"}
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
    .required("Email is required!"),
  password: Yup.string()
    .min(4, "Password must be 4 character or longer!")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Confirm password is required!")
});

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  authLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authLoading: state.auth.isLoading
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Signup);
