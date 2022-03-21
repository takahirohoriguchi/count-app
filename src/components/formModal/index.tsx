import React, { useState, useMemo } from "react";
import "./style.css";

interface Props {
  modalClose: () => void
}

export const FormModal: React.FC<Props> = React.memo(({
  modalClose,
}: Props) => {

  console.log("modal")
  const [count, setCount] = useState<number>(0)
  const ChangeCount = () => {
    setCount(count + 1)
  };

  return (
    <div className="modal_body">
      <h2 className="input_menu">Todoリスト</h2>
      <p>count 合計 {count}</p>
        <input
          className="input_submit"
          onClick={ChangeCount}
          type="button"
          value="カウント"
        />
      <input
        className="input_submit"
        onClick={modalClose}
        type="button"
        value="閉じる"
      />
    </div>
  );
});
