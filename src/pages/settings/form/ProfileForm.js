import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import InputPills from "../../../components/FeaturesInput/InputPills";
import style from "./ProfileForm.module.css";

// DIRECTION BUTTON COMPONENT
const DIRECTION_BTN = (props) => {
  let btnContainer;
  const [next, previous] = props.tag;
  if (props.tag.length === 1) {
    if (next === "NEXT")
      btnContainer = (
        <MDBBtn outline color="dark">
          {next} <FontAwesomeIcon icon={faArrowRightLong} />
        </MDBBtn>
      );
    else
      btnContainer = (
        <MDBBtn color="dark">
          <FontAwesomeIcon icon={faArrowLeftLong} /> {next}
        </MDBBtn>
      );
  } else {
    btnContainer = (
      <>
        <MDBBtn color="dark" className="me-2">
          <FontAwesomeIcon icon={faArrowLeftLong} /> {previous}
        </MDBBtn>
        <MDBBtn outline color="dark">
          {next} <FontAwesomeIcon icon={faArrowRightLong} />
        </MDBBtn>
      </>
    );
  }

  return btnContainer;
};

// BIO-DATA
export const BIO_FORM = (props) => {
  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <div className="d-sm-flex">
            <MDBInput wrapperClass="mb-4 me-sm-2" label="Surname" />
            <MDBInput wrapperClass="mb-4" label="First Name" />
          </div>
          <div className="d-sm-flex">
            <MDBInput wrapperClass="mb-4 me-sm-2" label="Email Address" />
            <MDBInput wrapperClass="mb-4" label="Phone" />
          </div>
          <div className="d-sm-flex">
            <MDBInput wrapperClass="mb-4 me-sm-2" label="Country" />
            <MDBInput wrapperClass="mb-4" label="State" />
          </div>
          <MDBInput wrapperClass="mb-4" label="Job Title" />
          <div className="d-flex justify-content-end">
            {<DIRECTION_BTN tag={["NEXT"]} />}
          </div>
        </form>
      </MDBCard>
    </div>
  );
};

// SKILLS FORM
export const SKILLS_FORM = (props) => {
  const callbackFn = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>
        <InputPills title="Enter Skills" payload={callbackFn} />
        <div className="d-flex justify-content-end">
          {<DIRECTION_BTN tag={["NEXT", "PREVIOUS"]} />}
        </div>
      </MDBCard>
    </div>
  );
};

// EDUCATIONAL HISTORY
export const EDUCATION_FORM = (props) => {
  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <MDBInput wrapperClass="mb-4" label="School" />
          <MDBInput wrapperClass="mb-4" label="Course" />
          <div className="d-flex">
            <MDBInput wrapperClass="me-2 mb-3" label="Degree" />
            <MDBInput wrapperClass="mb-3" label="Year" />
          </div>
          <div className="d-flex justify-content-end">
            <MDBBtn className="btn-sm mb-5" color="dark">
              ADD
            </MDBBtn>
          </div>
          <div style={{ backgroundColor: "yellow", width: "100vh" }}>
            <MDBTable align="middle" responsive>
              <MDBTableHead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>Griffith College</td>
                  <td>
                    Software engineer
                    <span className="text-muted mb-0 ps-3">Msc</span>
                  </td>
                  <td>2022</td>
                  <td>
                    <MDBBtn color="link" rounded size="sm">
                      Delete
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>

          <div className="d-flex justify-content-end mt-5">
            {<DIRECTION_BTN tag={["NEXT", "PREVIOUS"]} />}
          </div>
        </form>
      </MDBCard>
    </div>
  );
};

// WORK EXPERIENCE
export const WORK_EXPERIENCE_FORM = (props) => {
  const callbackFn = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <MDBInput wrapperClass="mb-4" label="Organization" />
          <MDBInput wrapperClass="mb-4" label="Job title" />
          <div className="d-flex">
            <MDBInput wrapperClass="me-2 mb-3" label="Start Date" />
            <MDBInput wrapperClass="mb-3" label="End Date" />
          </div>
          <InputPills title="Job Description" payload={callbackFn} />
          <div className="d-flex justify-content-end">
            <MDBBtn className="btn-sm mb-5" color="dark">
              SAVE JOB
            </MDBBtn>
          </div>
          {/* <MDBCard className="p-4"> */}
          <MDBTable align="middle" responsive>
            <MDBTableHead>
              <tr>
                <th scope="col">Organization</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>Unilever Nig Plc</td>
                <td>2020</td>
                <td>2022</td>
                <td>
                  <MDBBtn color="link" rounded size="sm">
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          {/* </MDBCard> */}
          <div className="d-flex justify-content-end mt-5">
            {<DIRECTION_BTN tag={["NEXT", "PREVIOUS"]} />}
          </div>
        </form>
      </MDBCard>
    </div>
  );
};

// CERTIFICATIONS
export const CERTIFICATION_FORM = (props) => {
  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <MDBInput wrapperClass="mb-4" label="Title" />
          <MDBInput wrapperClass="mb-4 col-6" label="Year Completed" />

          <div className="d-flex justify-content-end">
            <MDBBtn className="btn-sm mb-5" color="dark">
              ADD
            </MDBBtn>
          </div>
          {/* <MDBCard className="p-4"> */}
          <MDBTable align="middle" responsive>
            <MDBTableHead>
              <tr>
                <th scope="col">Certificate</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>Oracle Certified Associate (OCA)</td>
                <td>2020</td>
                <td>
                  <MDBBtn color="link" rounded size="sm">
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          {/* </MDBCard> */}
          <div className="d-flex justify-content-end mt-5">
            {<DIRECTION_BTN tag={["PREVIOUS"]} />}
          </div>
        </form>
      </MDBCard>
    </div>
  );
};
