import React, { useContext } from "react";
import SettingsContext from "../../../context/settingsContext";
import style from "./FormNav.module.css";

export const NavItem = (props) => {
  const ctx = useContext(SettingsContext);
  const pageClickedHandler = () => {
    ctx.updateContext({
      profile_current_page: props.title,
      profile_position: props.position,
    });
  };
  return (
    <li
      className={props.currentForm === props.position ? style.active : ""}
      onClick={pageClickedHandler}
    >
      {props.position}
    </li>
  );
};
