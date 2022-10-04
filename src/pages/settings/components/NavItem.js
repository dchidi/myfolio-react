import React, { useContext } from "react";
import AuthContext from "../../../store/authContextAPI";
import style from "./FormNav.module.css";

export const NavItem = (props) => {
  const ctx = useContext(AuthContext);
  const pageClickedHandler = () => {
    ctx.updateContext({ profileForm: props.title });
  };
  return (
    <li
      className={props.currentForm === props.title ? style.active : ""}
      onClick={pageClickedHandler}
    >
      {props.position}
    </li>
  );
};
