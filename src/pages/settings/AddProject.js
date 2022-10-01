import React from "react";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import InputPills from "../../components/FeaturesInput/InputPills";

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
      <MDBCardBody>
        <MDBCardTitle className="my-3">Project Details</MDBCardTitle>
        {/* <form> */}
        <MDBInput wrapperClass="mb-4" label="Project Title" />
        <MDBInputGroup className="mb-3">
          <input
            className="form-control"
            placeholder="Project Url"
            type="text"
          />
          <MDBBtn outline color="dark">
            Validate Link
          </MDBBtn>
        </MDBInputGroup>
        <InputPills title="Features" payload={featureList} />
        <InputPills title="Tech Stack" payload={techStackList} />

        <MDBBtn>Button</MDBBtn>
        {/* </form> */}
      </MDBCardBody>
    </MDBCard>
  );
}
