import React, { useContext, useRef, useState } from "react";
import { MDBInput, MDBBtn, MDBCard } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import InputPills from "../../../components/FeaturesInput/InputPills";
import { addBio, addSkills } from "../../../features/profile/profile_slice";
import { emailValidator } from "../../../controllers/validator";
import SettingsContext from "../../../context/settingsContext";

// DIRECTION BUTTON COMPONENT
const DIRECTION_BTN = (props) => {
  let btnContainer;
  const [tag1, tag2] = props.tag;
  const ctx = useContext(SettingsContext);
  // Initialize dispatcher
  const dispatch = useDispatch();

  const persistData = (e) => {
    // get data from formData function
    const formData = props.formDataFn(e);
    // console.log(formData);

    // MANAGE ACTIONS PERFORMED
    switch (props.name) {
      case "BIO_FORM": {
        // Destructure formData items
        const { surname, firstname, email, phone, country, state, jobTitle } =
          formData;
        // VALIDATE INPUT
        console.log(emailValidator(email));
        // Upadate store record using addBio action creator
        dispatch(addBio(formData));
        break;
      }
      case "SKILLS_FORM": {
        dispatch(addSkills(formData));
        break;
      }
    }
  };

  const nextBtnClickHandler = (e) => {
    persistData(e);
    ctx.profile_position < 5 &&
      ctx.updateContext({ profile_position: ctx.profile_position + 1 });
  };

  const previousBtnClickHandler = (e) => {
    persistData(e);
    ctx.profile_position > 1 &&
      ctx.updateContext({ profile_position: ctx.profile_position - 1 });
  };

  if (props.tag.length === 1) {
    if (tag1 === "NEXT") {
      btnContainer = (
        <MDBBtn outline color="dark" onClick={nextBtnClickHandler}>
          {tag1} <FontAwesomeIcon icon={faArrowRightLong} />
        </MDBBtn>
      );
    } else
      btnContainer = (
        <MDBBtn color="dark" onclick={previousBtnClickHandler}>
          <FontAwesomeIcon icon={faArrowLeftLong} /> {tag1}
        </MDBBtn>
      );
  } else {
    btnContainer = (
      <>
        <MDBBtn color="dark" className="me-2" onClick={previousBtnClickHandler}>
          <FontAwesomeIcon icon={faArrowLeftLong} /> {tag1}
        </MDBBtn>
        {tag2 === "NEXT" ? (
          <MDBBtn outline color="dark" onClick={nextBtnClickHandler}>
            {tag2} <FontAwesomeIcon icon={faArrowRightLong} />
          </MDBBtn>
        ) : (
          <MDBBtn color="success">{tag2}</MDBBtn>
        )}
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

  // Create a reference to input values in form
  const surnameRef = useRef("");
  const firstnameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const countryRef = useRef("");
  const stateRef = useRef("");
  const jobTitleRef = useRef("");

  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {
    // prevent page from reloading
    e.preventDefault();
    // Get ref values and return them as an object
    return {
      surname: surnameRef.current.value,
      firstname: firstnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      country: countryRef.current.value,
      state: stateRef.current.value,
      jobTitle: jobTitleRef.current.value,
    };
  };

  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <div className="d-sm-flex">
            {/* In MDBInput inputRef is used while for regular html elements ref is
            used */}
            <MDBInput
              wrapperClass="mb-4 me-sm-2"
              label="Surname"
              inputRef={surnameRef}
              defaultValue={surname}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="First Name"
              inputRef={firstnameRef}
              defaultValue={firstname}
            />
          </div>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="mb-4 me-sm-2"
              label="Email Address"
              inputRef={emailRef}
              defaultValue={email}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Phone"
              inputRef={phoneRef}
              defaultValue={phone}
            />
          </div>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="mb-4 me-sm-2"
              label="Country"
              inputRef={countryRef}
              defaultValue={country}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="State"
              inputRef={stateRef}
              defaultValue={state}
            />
          </div>
          <MDBInput
            wrapperClass="mb-4"
            label="Job Title"
            inputRef={jobTitleRef}
            defaultValue={jobTitle}
          />
          <div className="d-flex justify-content-end">
            {
              <DIRECTION_BTN
                tag={["NEXT"]}
                formDataFn={formDataHandler}
                name="BIO_FORM"
              />
            }
          </div>
        </form>
      </MDBCard>
    </div>
  );
};

// SKILLS FORM
export const SKILLS_FORM = (props) => {
  // Get values from store
  const initSkillsValue = useSelector((store) => store.profile.skills);
  let skills = initSkillsValue;

  // Get values from input pill component
  const callbackFn = (data) => {
    skills = data;
  };

  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {
    return skills;
  };

  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>
        <InputPills
          title="Enter Skills"
          payload={callbackFn}
          initData={initSkillsValue}
        />
        <div className="d-flex justify-content-end">
          {
            <DIRECTION_BTN
              tag={["PREVIOUS", "NEXT"]}
              formDataFn={formDataHandler}
              name="SKILLS_FORM"
            />
          }
        </div>
      </MDBCard>
    </div>
  );
};

// EDUCATIONAL HISTORY
export const EDUCATION_FORM = (props) => {
  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {};
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
            {
              <DIRECTION_BTN
                tag={["PREVIOUS", "NEXT"]}
                formDataFn={formDataHandler}
                name="EDUCATION_FORM"
              />
            }
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
  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {};
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
              ADD
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
            {
              <DIRECTION_BTN
                tag={["PREVIOUS", "NEXT"]}
                formDataFn={formDataHandler}
                name="WORK_EXPERIENCE_FORM"
              />
            }
          </div>
        </form>
      </MDBCard>
    </div>
  );
};

// CERTIFICATIONS
export const CERTIFICATION_FORM = (props) => {
  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {};
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
            {/* TODO:: Submit loads a modal for user to preview input */}
            {
              <DIRECTION_BTN
                tag={["PREVIOUS", "SUBMIT"]}
                formDataFn={formDataHandler}
                name="CERTIFICATION_FORM"
              />
            }
          </div>
        </form>
      </MDBCard>
    </div>
  );
};
