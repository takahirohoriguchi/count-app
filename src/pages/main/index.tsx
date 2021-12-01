import React, { useState, useMemo } from "react";
import "./style.css";

interface Props {
  handleClick: () => void;
}

export const Main: React.FC<Props> = ({ handleClick }: Props) => {
  console.log("main");

  const [count, setCount] = useState<number>(0)

  const GuideText = useMemo(() => {
    console.log("GuideText");
    return "詳しくはこちらをご確認ください"
  },[]);

  const ChangeCount = () => {
    setCount(count + 1)
  };

  return (
    <>
      <div className="main">
        <p>count 合計 {count}</p>
        <input
          className="input_submit"
          onClick={ChangeCount}
          type="button"
          value="カウント"
        />
      </div>
      <div className="main">
        {GuideText}
        <input
          className="input_submit"
          onClick={handleClick}
          type="button"
          value="開く"
        />
      </div>
    </>
  );
};
