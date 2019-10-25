import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function AlertDismissibleExample({ heading, message }) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        {heading && <Alert.Heading>{heading}</Alert.Heading>}
        {message && <p>{message}</p>}
      </Alert>
    );
  }
  return null;
}

export default AlertDismissibleExample;
