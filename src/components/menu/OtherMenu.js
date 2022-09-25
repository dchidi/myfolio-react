import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import style from "./Menu.module.css";

export const OtherMenu = (props) => {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        {/* Logo */}
        <MDBNavbarBrand href="#" className={style.link}>
          <span className={style.logoTextSub1}>My</span>
          <span className={style.logoTextSub2}>folio</span>
        </MDBNavbarBrand>
        {/* Check if user is logged in */}
        {!props?.data?.isLoggedIn ? (
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
              {props?.data?.username.length > 12
                ? props.data.username.slice(0, 12) + "..."
                : props?.data?.username}
            </span>
          </>
        )}
      </MDBContainer>
    </MDBNavbar>
  );
};
