import React, { useState } from "react";

import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && (
        <Button onClick={() => toggleShow(true)} data-test="show-toast-button">
          Show Toast
        </Button>
      )}
      <Toast show={show} onClose={() => toggleShow(false)} data-test="toast">
        <Toast.Header data-test="toast-header">
          <strong className="mr-auto" data-test="toast-heading">
            React-Bootstrap
          </strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Container>
  </Container>
);

export default App;
