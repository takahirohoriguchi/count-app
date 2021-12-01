import React, { useMemo, useState, useCallback } from "react"
import { Header } from "../../components/header";
import { Main } from "../main";
import { FormModal } from "../../components/formModal";
import { Footer } from "../../components/footer";
import Modal from "react-modal";
import "./style.css";
import { Child } from "../../child";

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

type MessageType = "card" | "plan"

export const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [message, setMessage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  // const flashMessage = useCallback((type: MessageType) => {
  //   switch (type) {
  //     case "card":
  //       debugger
  //       setMessage("カードに登録しました")
  //       break
  //     case "plan":
  //       setMessage("プランに登録しました")
  //       break
  //   }
  // },[message]);


  const countUp = (e: React.FormEvent) => {
    setCount(count + 1);
  };

  const CountText = useMemo(() => {
    console.log("CountText");
    return "こちらをクリックするとカウントされます"
  },[]);

  const handleClick = () => {
    setIsModalOpen(true)
  };

  const handleClose = useCallback(() => {
    setIsModalOpen(false)
  },[]);

  Modal.setAppElement("#root")
  return (
    <div className="home">
      {/* {message} */}
      {CountText}
      {count}
      <button onClick={countUp}></button>
      <Child />
      {/* <Child flashMessage={flashMessage}/> */}
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
