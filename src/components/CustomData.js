import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
const CustomData = ({ send1DataToParent, send2DataToParent }) => {
  const inputref = useRef();
  const inputref2 = useRef();
  function handleclick() {
    // console.log(inputref.current.value);
    const data = inputref.current.value
      .split(",")
      .map((val) => parseFloat(val));
    send1DataToParent(data);

    const data2 = inputref2.current.value
      .split(",")
      .map((val) => parseFloat(val));

    send2DataToParent(data2);
  }
  return (
    <div className="container">
      <label style={{ display: "block" }}> Data 1</label>
      <input type="text" ref={inputref} />
      <Button
        variant="outline-dark"
        style={{ marginLeft: "500px", display: "block" }}
        onClick={handleclick}
      >
        Submit
      </Button>
      <label style={{ display: "block" }}> Data 2</label>
      <input type="text" ref={inputref2} />
      <br />
      <hr />
    </div>
  );
};

export default CustomData;
