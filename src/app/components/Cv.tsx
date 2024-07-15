import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { closeCv } from "../../../redux/cv";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isCvOpen } = useSelector(
    (state: { cv: { isCvOpen: boolean } }) => state.cv
  );

  const dispatch = useDispatch();

  const handleOk = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1US9pUUkSx0krHbO8v2IUw4qfW4ANI7rm/view?usp=drive_link";
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
      className="flex items-center justify-center"
    >
      {currentPage === 1 ? (
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <Image
            src="/cv/1.png"
            alt="nkematu bonaventure"
            height="700"
            width="700"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <Image
            src="/cv/2.png"
            alt="nkematu bonaventure"
            height="700"
            width="700"
          />
        </motion.div>
      )}

      <div className="flex items-center justify-center gap-6 w-full">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <FaArrowLeft className="" />
        </Button>
        <Button
          disabled={currentPage === 2}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FaArrowRight />
        </Button>
      </div>
    </Modal>
  );
};

export default App;
