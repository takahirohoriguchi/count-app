import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import "./style.css";

export const Header = React.memo(() => {
  console.log("header")
  return (
    <div className="header">
      <CreateIcon className="header_icon" fontSize="large"></CreateIcon>
      <span className="header_title">React 勉強会</span>
    </div>
  );
});
