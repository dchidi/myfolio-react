import React, { useRef } from "react";
import { MDBInput, MDBBtn, MDBCard } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import InputPills from "../../../components/FeaturesInput/InputPills";
import { addBio } from "../../../features/profile/profile_slice";

// DIRECTION BUTTON COMPONENT
const DIRECTION_BTN = (props) => {
  let btnContainer;
  const [next, previous] = props.tag;

  const dispatch = useDispatch();

  const eventHandler = (e) => {
    e.preventDefault();
    dispatch(addBio({ surname: "duru", firstname: "chidi" }));
  };

  // Call redux action to update profile state
  // Steps
  // 1. Get current page
  // 2. call action for that page

  if (props.tag.length === 1) {
    if (next === "NEXT")
      btnContainer = (
        <MDBBtn outline color="dark" onClick={eventHandler}>
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

const Delete_BTN = (props) => {
  return (
    <div className="d-flex justify-content-end">
      <MDBBtn className="btn-sm px-1 py-0 mb-2" outline color="dark">
        <FontAwesomeIcon icon={faXmark} />
      </MDBBtn>
    </div>
  );
};

// BIO-DATA
export const BIO_FORM = (props) => {
  // Get values from store
  const { surname, firstname, email, phone, country, state, jobTitle } =
    useSelector((store) => store.profile.bio);

  // Create a reference to form data
  const surnameRef = useRef();

  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="mb-4 me-sm-2"
              label="Surname"
              ref={surnameRef}
              defaultValue={surname}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="First Name"
              defaultValue={firstname}
            />
          </div>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="mb-4 me-sm-2"
              label="Email Address"
              defaultValue={email}
            />
            <MDBInput wrapperClass="mb-4" label="Phone" defaultValue={phone} />
          </div>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="mb-4 me-sm-2"
              label="Country"
              defaultValue={country}
            />
            <MDBInput wrapperClass="mb-4" label="State" defaultValue={state} />
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Job Title"
            defaultValue={jobTitle}
          />
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
          {/* List */}
          <MDBCard className="pt-4 px-4">
            <Delete_BTN />
            <h3>Griffith College - Msc</h3>
            <h3>2022</h3>
            <p>Mechanical Engineering Services and Mathematics</p>
          </MDBCard>

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
          {/* List */}
          <MDBCard className="pt-4 px-4">
            <Delete_BTN />
            <h3>Unilever Nig Plc</h3>
            <p>
              Data Analyst - <span>2020 - 2022</span>
            </p>
          </MDBCard>

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
          {/* List */}
          <MDBCard className="pt-4 px-4">
            <Delete_BTN />
            <h3>2022</h3>
            <p>Oracle Certified Associate - OCA</p>
          </MDBCard>

          <div className="d-flex justify-content-end mt-5">
            {<DIRECTION_BTN tag={["PREVIOUS"]} />}
          </div>
        </form>
      </MDBCard>
    </div>
  );
};
