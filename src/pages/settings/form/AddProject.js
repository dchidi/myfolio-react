import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInputGroup,
  MDBTextArea,
  MDBFile,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faXmark } from "@fortawesome/free-solid-svg-icons";
import InputPills from "../../../components/FeaturesInput/InputPills";

export default function AddProject() {
  // get payload from InputPills component
  const featureList = (data) => {
    console.log(data);
  };
  const techStackList = (data) => {
    console.log(data);
  };

  return (
    <MDBCard>
      <MDBCardBody className="offset-md-2 col-md-8">
        <form>
          <MDBInput wrapperClass="mb-4" label="Project Title" />
          <MDBInputGroup className="mb-3">
            {/* <input
            className="form-control"
            placeholder="Project Url"
            type="text"
          /> */}
            <MDBInput label="Project Url" />
            <MDBBtn outline color="dark">
              Validate Link
            </MDBBtn>
            <div className="p-2">
              <span className="text-success">
                Verified <FontAwesomeIcon icon={faCheckDouble} />
              </span>
              {/* <spanv className="text-danger">
              Invalid link <FontAwesomeIcon icon={faXmark} />
            </spanv> */}
            </div>
          </MDBInputGroup>
          <MDBFile label="Upload project Image" size="lg" id="formFileLg" />
          <MDBTextArea
            label="Project Description"
            id="textAreaExample"
            rows={4}
            className="my-4"
          />
          <InputPills title="Features" payload={featureList} />
          <InputPills title="Tech Stack" payload={techStackList} />

          <div className="d-flex justify-content-end">
            <MDBBtn outline color="primary">
              SAVE PROJECT
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
}
