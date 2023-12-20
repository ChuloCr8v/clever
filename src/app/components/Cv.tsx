import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { closeCv } from "../../../redux/cv";

const App: React.FC = () => {
  const { isCvOpen } = useSelector(
    (state: { cv: { isCvOpen: boolean } }) => state.cv
  );

  const dispatch = useDispatch();

  const handleOk = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1Q3lzQXxLMaa1sTxISBE8MwPYa7AGFuSr/view?usp=sharing";
    link.target = "_blank"; // Open the link in a new tab/window if needed
    link.innerText = "Cv";

    // Append the link to the document (optional, depending on your use case)
    document.body.appendChild(link);

    // Simulate a click event
    link.click();

    // Optionally, remove the link from the document after the click event
    document.body.removeChild(link);
  };

  return (
    <Modal
      title="Nkematu Bonaventure Resume"
      open={isCvOpen}
      onOk={handleOk}
      onCancel={() => dispatch(closeCv())}
      cancelText="Ok"
      okText="Download"
    >
      <Image
        src="/cv.jpg"
        alt="nkematu bonaventure"
        className=""
        height="700"
        width="700"
      />
    </Modal>
  );
};

export default App;
