import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
function Tost() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);
  return (
    <div>
      <button onClick={toggleShow}>toast</button>
      <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">Delete</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Tost;
