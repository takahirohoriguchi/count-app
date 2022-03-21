import React, { useState, useCallback } from "react"
import { Header } from "../../components/header";
import { Main } from "../main";
import { FormModal } from "../../components/formModal";
import { Footer } from "../../components/footer";
import Modal from "react-modal";
import "./style.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgb(80, 80, 80, 0.8)",
  },
  content: {
    top: "10%",
    left: "60%",
    right: "50%",
    height: "75vh",
    width: "20vw",
    marginLeft: "-30vw",
    padding: "2vw 10vw",
  },
};

export const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleClick = () => {
    setIsModalOpen(true)
  };

  const handleClose = useCallback(() => {
    setIsModalOpen(false)
  },[]);

  Modal.setAppElement("#root")
  return (
    <div className="home">
      <Header></Header>
      <Main handleClick={handleClick}></Main>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <FormModal modalClose={handleClose} />
        </Modal>
      <Footer></Footer>
    </div>
  );
};
