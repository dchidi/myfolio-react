import React, { useContext, useRef, useState } from "react";
import { MDBInput, MDBBtn, MDBCard } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faCheckDouble,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const UpdatePassword = (props) => {
  return (
    <MDBCard className={`my-4 px-5 py-4 `}>
      <h3 className="mb-4">RETRIEVE PASSWORD</h3>

      {/* <form> */}
      <div className="col-sm-10 col-md-8 col-lg-6">
        <MDBInput wrapperClass="mb-4" label="Email" />

        <MDBBtn color="dark">RETRIEVE</MDBBtn>
      </div>
      {/* </form> */}
    </MDBCard>
  );
};

export default UpdatePassword;
