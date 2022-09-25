import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGears,
  faHouseUser,
  faLayerGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../../components/menu/Menu";
import FloatingMenu from "../../components/menu/FloatingMenu";

const Settings = (props) => {
  return (
    <>
      <Menu page={props.page} />
      <div className="d-flex">
        <FloatingMenu page={props.page} />
        <div className="">main content</div>
      </div>
    </>
  );
};

export default Settings;
