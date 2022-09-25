import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGears,
  faHouseUser,
  faLayerGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
// import FloatingMenu from "./FloatingMenu";
import style from "./Menu.module.css";

export const OtherMenu = (props) => {
  const data = props.data;

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#" className={style.link}>
          <span className={style.logoTextSub1}>My</span>
          <span className={style.logoTextSub2}>folio</span>
        </MDBNavbarBrand>
        {/* Check if user is logged in */}
        {!data?.isLoggedIn ? (
          <>
            {/* Login button */}
            <MDBBtn
              outline
              color="dark"
              className="btn-sm"
              onClick={props.login}
            >
              Login
            </MDBBtn>
          </>
        ) : (
          <>
            {/* User name */}
            <span>
              {data?.username.length > 12
                ? data.username.slice(0, 12) + "..."
                : data?.username}
            </span>
          </>
        )}
      </MDBContainer>
    </MDBNavbar>
  );
};

// export const SideMenu = (props) => <FloatingMenu />;
