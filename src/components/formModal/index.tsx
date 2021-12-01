import React from "react";
import "./style.css";

interface Props {
  modalClose: () => void
}

export const FormModal: React.FC<Props> = React.memo(({
  modalClose,
}: Props) => {

  console.log("modal")

  return (
    <div className="modal_body">
      <h2 className="input_menu">Todoリスト</h2>
      <input
        className="input_submit"
        onClick={modalClose}
        type="button"
        value="閉じる"
      />
    </div>
  );
});
