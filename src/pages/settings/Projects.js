import React, { useState } from "react";
import Item from "./listItem/Item";
import { MDBBtn } from "mdb-react-ui-kit";
import AddProject from "./form/AddProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import style from "./Projects.module.css";

const View = () => {
  const [addProjectState, setAddProjectState] = useState(false);
  const addProjectForm = () => {
    setAddProjectState(!addProjectState);
  };
  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <MDBBtn
          className={`btn-sm ${style.add}`}
          color="primary"
          onClick={addProjectForm}
        >
          {addProjectState ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </MDBBtn>
      </div>
      {addProjectState ? <AddProject /> : <Item fn={addProjectForm} />}
    </>
  );
};

export default View;
