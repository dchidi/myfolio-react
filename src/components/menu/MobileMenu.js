import React, { useState } from "react";
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
import style from "./Menu.module.css";

const MobileMenu = (props) => {
  // Manage toggle state
  const [showBasic, setShowBasic] = useState(false);

  // Logout user
  const _logout = () => {
    setShowBasic(!showBasic);
    props.logout();
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        {/* Logo */}
        <MDBNavbarBrand href="#" className={style.link}>
          <span className={style.logoTextSub1}>My</span>
          <span className={style.logoTextSub2}>folio</span>
        </MDBNavbarBrand>
        {/* Check if user is logged in */}
        {!props.data?.isLoggedIn ? (
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
              {props.data?.username.length > 8
                ? props.data.username.slice(0, 8) + "..."
                : props.data?.username}
            </span>
            {/* Toggle button */}
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              {showBasic && <FontAwesomeIcon icon={faXmark} />}
              {!showBasic && <FontAwesomeIcon icon={faBars} />}
            </MDBNavbarToggler>
          </>
        )}

        <MDBCollapse navbar show={showBasic}>
          <hr />
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <Link
                to="/"
                className={
                  props.page === "index"
                    ? `${style.nav} ${style.active}`
                    : `${style.nav}`
                }
              >
                <FontAwesomeIcon icon={faHouseUser} />{" "}
                <span className="ps-2">Dashboard</span>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link
                to="/folio"
                className={
                  props.page === "folio"
                    ? `${style.nav} ${style.active}`
                    : `${style.nav}`
                }
              >
                <FontAwesomeIcon icon={faLayerGroup} />{" "}
                <span className="ps-2">Folio</span>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link
                to="/settings"
                className={
                  props.page === "settings"
                    ? `${style.nav} ${style.active}`
                    : `${style.nav}`
                }
              >
                <FontAwesomeIcon icon={faGears} />{" "}
                <span className="ps-2">Settings</span>
              </Link>
            </MDBNavbarItem>
            <hr />
            <MDBNavbarItem className="d-flex justify-content-center">
              <MDBBtn
                outline
                color="danger"
                className="btn-sm"
                onClick={_logout}
              >
                Logout
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default MobileMenu;
