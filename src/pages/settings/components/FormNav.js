import React, { useState, useContext } from "react";
import { NavItem } from "./NavItem";
import * as action from "../formType";

import style from "./FormNav.module.css";
import SettingsContext from "../../../context/settingsContext";

const FormNav = (props) => {
  const ctx = useContext(SettingsContext);
  const [state, setState] = useState(action.BIO_PAGE);

  return (
    <>
      <ul className={`d-flex  justify-content-around ${style.nav}`}>
        <NavItem
          title={action.BIO_PAGE}
          currentForm={ctx.profile_position}
          position={1}
        />
        <NavItem
          title={action.SKILLS_PAGE}
          currentForm={ctx.profile_position}
          position={2}
        />
        <NavItem
          title={action.EDUCATION_PAGE}
          currentForm={ctx.profile_position}
          position={3}
        />
        <NavItem
          title={action.WORK_EXPERIENCE_PAGE}
          currentForm={ctx.profile_position}
          position={4}
        />
        <NavItem
          title={action.CERTIFICATION_PAGE}
          currentForm={ctx.profile_position}
          position={5}
        />
      </ul>
    </>
  );
};

export default FormNav;
