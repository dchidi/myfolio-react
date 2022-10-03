import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import style from "./Item.module.css";

const Item = (props) => {
  const editProjectForm = () => {
    props.fn();
  };
  return (
    <div className={`d-flex flex-column ${style.item}`}>
      <h4>MyFolio</h4>
      <p>
        My folio is an online CV application that helps showcase applicants
        strengths and various projects they have worked on
      </p>
      <div className="d-flex justify-content-end">
        <MDBBtn
          outline
          color="dark"
          className="btn-sm me-2"
          onClick={editProjectForm}
        >
          Edit
        </MDBBtn>
        <MDBBtn className="btn-sm" outline color="danger">
          Delete
        </MDBBtn>
      </div>
    </div>
  );
};

export default Item;
