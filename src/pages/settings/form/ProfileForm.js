import React, { useContext, useRef, useState } from "react";
import { MDBInput, MDBBtn, MDBCard, MDBFile } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faCheckDouble,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import InputPills from "../../../components/FeaturesInput/InputPills";
import {
  addBio,
  addCertificate,
  addEducation,
  addExperience,
  addSkills,
} from "../../../features/profile/profile_slice";
import { emailValidator } from "../../../controllers/validator";
import SettingsContext from "../../../context/settingsContext";
import { v4 as uuid } from "uuid";
import style from "./ProfileForm.module.css";

// DIRECTION BUTTON COMPONENT
const DirectionBtn = (props) => {
  let btnContainer;
  const [tag1, tag2] = props.tag;
  const ctx = useContext(SettingsContext);
  // Initialize dispatcher
  const dispatch = useDispatch();

  const persistData = (e) => {
    // get data from formData function
    const formData = props.formDataFn(e);

    // MANAGE ACTIONS PERFORMED
    switch (props.name) {
      case "BIO_FORM": {
        // // Destructure formData items
        // const { surname, firstname, email, phone, country, state, jobTitle } =
        //   formData;
        // // VALIDATE INPUT
        // console.log(emailValidator(email));
        // Upadate store record using addBio action creator
        dispatch(addBio(formData));
        break;
      }
      case "SKILLS_FORM": {
        dispatch(addSkills(formData));
        break;
      }
      case "EDUCATION_FORM": {
        //TODO:: VALIDATE INPUT
        dispatch(addEducation(formData));
        break;
      }
      case "WORK_EXPERIENCE_FORM": {
        dispatch(addExperience(formData));
        break;
      }
      case "CERTIFICATION_FORM": {
        dispatch(addCertificate(formData));
        break;
      }
      default:
        break;
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

  const submitBtnHandler = (e) => {
    persistData(e);
    // TODO:: call redux action creator to trigger data upload to database
    // Load home page after save is successful
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
          <MDBBtn color="success" onClick={submitBtnHandler}>
            {tag2}
          </MDBBtn>
        )}
      </>
    );
  }

  return btnContainer;
};

const Delete_BTN = (props) => {
  return (
    <div className="d-flex justify-content-end">
      <MDBBtn
        className="btn-sm px-1 py-0 mb-2"
        outline
        color="dark"
        onClick={(e) => {
          props.fn(e, props.id);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </MDBBtn>
    </div>
  );
};

const clearForm = (arg) => {
  arg.forEach((x) => {
    x.current.value = "";
  });
};

// BIO-DATA
export const BIO_FORM = (props) => {
  // Get values from store
  const {
    surname,
    firstname,
    email,
    phone,
    country,
    state,
    jobTitle,
    profileImage,
    linkedInUrl,
    twitterUrl,
    gitHubUrl,
  } = useSelector((store) => store.profile.bio);

  // Create a reference to input values in form
  const surnameRef = useRef("");
  const firstnameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const countryRef = useRef("");
  const stateRef = useRef("");
  const jobTitleRef = useRef("");
  const profileImageRef = useRef("");
  const linkedInUrlRef = useRef("");
  const twitterUrlRef = useRef("");
  const gitHubUrlRef = useRef("");

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
      profileImage: profileImageRef.current.value,
      linkedInUrl: linkedInUrlRef.current.value,
      twitterUrl: twitterUrlRef.current.value,
      gitHubUrl: gitHubUrlRef.current.value,
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
              wrapperClass="col me-sm-2 mb-4"
              label="Surname"
              inputRef={surnameRef}
              defaultValue={surname}
            />
            <MDBInput
              wrapperClass="col mb-4"
              label="First Name"
              inputRef={firstnameRef}
              defaultValue={firstname}
            />
          </div>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="col me-sm-2 mb-4"
              label="Email Address"
              inputRef={emailRef}
              defaultValue={email}
            />
            <MDBInput
              wrapperClass="col mb-4"
              label="Phone"
              inputRef={phoneRef}
              defaultValue={phone}
            />
          </div>
          <div className="d-sm-flex">
            <MDBInput
              wrapperClass="col me-sm-2 mb-4"
              label="Country"
              inputRef={countryRef}
              defaultValue={country}
            />
            <MDBInput
              wrapperClass="col mb-4"
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
          <MDBInput
            wrapperClass="mb-4"
            label="LinkedIn Url"
            inputRef={linkedInUrlRef}
            defaultValue={linkedInUrl}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Twitter Url"
            inputRef={twitterUrlRef}
            defaultValue={twitterUrl}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="GitHub Url"
            inputRef={gitHubUrlRef}
            defaultValue={gitHubUrl}
          />
          <MDBFile
            label="Upload Profile Image"
            size="lg"
            id="formFileLg"
            className="mb-4"
            inputRef={profileImageRef}
            src={profileImage}
          />

          <div className="d-flex justify-content-end">
            {
              <DirectionBtn
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
            <DirectionBtn
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
  // initialize for data with store value
  const [data, setData] = useState(
    useSelector((store) => store.profile.education)
  );
  const schoolRef = useRef("");
  const courseRef = useRef("");
  const degreeRef = useRef("");
  const yearRef = useRef("");

  const addEducationHandler = (e) => {
    e.preventDefault();
    setData((prev) => [
      ...prev,
      {
        id: uuid(),
        school: schoolRef.current.value,
        course: courseRef.current.value,
        degree: degreeRef.current.value,
        year: yearRef.current.value,
      },
    ]);
    clearForm([schoolRef, courseRef, degreeRef, yearRef]);
  };

  // Remove item from list
  const deleteItem = (e, id) => {
    e.preventDefault();
    setData((prev) => [...data.filter((item) => item.id !== id)]);
  };

  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {
    return data;
  };

  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        <form>
          <MDBInput
            wrapperClass="mb-4"
            label="School"
            inputRef={schoolRef}
            defaultValue=""
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Course"
            inputRef={courseRef}
            defaultValue=""
          />
          <div className="d-flex mb-4">
            <MDBInput
              wrapperClass="col-4 me-2"
              label="Degree"
              inputRef={degreeRef}
              defaultValue=""
            />
            <MDBInput
              wrapperClass="col-4 me-2"
              label="Year"
              inputRef={yearRef}
              defaultValue=""
            />
            <MDBBtn
              className="col-3 btn-sm"
              color="dark"
              onClick={addEducationHandler}
            >
              ADD
            </MDBBtn>
          </div>
          {/* <div className="d-flex justify-content-end">
            
          </div> */}
          {/* List */}
          {data.map((item) => (
            <MDBCard className="pt-4 px-4 mt-2" key={item.id}>
              <Delete_BTN fn={deleteItem} id={item.id} />
              <h3>
                {item.school} - {item.degree}
              </h3>
              <h3>{item.year}</h3>
              <p>{item.course}</p>
            </MDBCard>
          ))}

          <div className="d-flex justify-content-end mt-5">
            {
              <DirectionBtn
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
  const initData = useSelector((store) => store.profile.experience);

  // Get values from store
  let jobDescription = initData.jobDescriptions;

  // Get values from input pill component
  const callbackFn = (data) => {
    jobDescription = data;
  };

  // initialize for data with store value
  const [data, setData] = useState(useSelector((store) => initData));
  const organizationRef = useRef("");
  const jobTitleRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");

  const addExperience = (e) => {
    e.preventDefault();
    setData((prev) => [
      ...prev,
      {
        id: uuid(),
        organization: organizationRef.current.value,
        jobTitle: jobTitleRef.current.value,
        startDate: startDateRef.current.value,
        endDate: endDateRef.current.value,
        jobDescription,
      },
    ]);
    clearForm([organizationRef, jobTitleRef, startDateRef, endDateRef]);
    jobDescription = [];
  };

  // Remove item from list
  const deleteItem = (e, id) => {
    e.preventDefault();
    setData((prev) => [...data.filter((item) => item.id !== id)]);
  };

  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {
    return data;
  };

  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        {/* <form> */}
        <MDBInput
          wrapperClass="mb-4"
          label="Organization"
          inputRef={organizationRef}
          defaultValue=""
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Job title"
          inputRef={jobTitleRef}
          defaultValue=""
        />
        <div className="d-flex mb-4">
          <MDBInput
            wrapperClass="col me-2"
            label="Start Date"
            inputRef={startDateRef}
            defaultValue=""
          />
          <MDBInput
            wrapperClass="col"
            label="End Date"
            inputRef={endDateRef}
            defaultValue=""
          />
        </div>
        <InputPills
          title="Job Description"
          payload={callbackFn}
          initData={jobDescription}
        />
        <div className="d-flex justify-content-end">
          <MDBBtn className="mb-5 w-sm-25" color="dark" onClick={addExperience}>
            ADD EXPERIENCE
          </MDBBtn>
        </div>
        {/* TODO:: Add experience as a list of items */}
        {data.map((item) => (
          <MDBCard className="py-4 px-4 mt-2" key={item.id}>
            <Delete_BTN fn={deleteItem} id={item.id} />
            <h3>{item.organization}</h3>
            <p>
              {item.jobTitle} -{" "}
              <span>{`${item.startDate} - ${item.endDate}`}</span>
            </p>
            <ul className={style.experience}>
              {item.jobDescription.map((description) => (
                <li key={description}>
                  <FontAwesomeIcon icon={faCheckDouble} /> {description}
                </li>
              ))}
            </ul>
          </MDBCard>
        ))}

        <div className="d-flex justify-content-end mt-5">
          {
            <DirectionBtn
              tag={["PREVIOUS", "NEXT"]}
              formDataFn={formDataHandler}
              name="WORK_EXPERIENCE_FORM"
            />
          }
        </div>
        {/* </form> */}
      </MDBCard>
    </div>
  );
};

// CERTIFICATIONS
export const CERTIFICATION_FORM = (props) => {
  // initialize for data with store value
  const [data, setData] = useState(
    useSelector((store) => store.profile.certificate)
  );
  const titleRef = useRef("");
  const yearRef = useRef("");

  const addCertification = (e) => {
    e.preventDefault();
    setData((prev) => [
      ...prev,
      {
        id: uuid(),
        title: titleRef.current.value,
        year: yearRef.current.value,
      },
    ]);
    clearForm([titleRef, yearRef]);
  };

  // Remove item from list
  const deleteItem = (e, id) => {
    e.preventDefault();
    setData((prev) => [...data.filter((item) => item.id !== id)]);
  };

  // Handle form submission when next button is clicked
  const formDataHandler = (e) => {
    return data;
  };
  return (
    <div className="mx-4 mt-4">
      <MDBCard className={`my-4 px-5 py-4`}>
        <h3 className="mb-4">{props.name}</h3>

        {/* <form> */}
        <MDBInput
          wrapperClass="mb-4"
          label="Title"
          inputRef={titleRef}
          defaultValue=""
        />
        <div className="d-flex mb-4">
          <MDBInput
            wrapperClass="col-8 me-2"
            label="Year Completed"
            inputRef={yearRef}
            defaultValue=""
          />
          <MDBBtn className="btn-sm" color="dark" onClick={addCertification}>
            ADD
          </MDBBtn>
        </div>
        {/* List */}
        {data.map((item) => (
          <MDBCard className="pt-4 px-4 mt-2" key={item.id}>
            <Delete_BTN fn={deleteItem} id={item.id} />
            <h3>{item.year}</h3>
            <p>{item.title}</p>
          </MDBCard>
        ))}

        <div className="d-flex justify-content-end mt-5">
          {/* TODO:: Submit loads a modal for user to preview input */}
          {
            <DirectionBtn
              tag={["PREVIOUS", "SUBMIT"]}
              formDataFn={formDataHandler}
              name="CERTIFICATION_FORM"
            />
          }
        </div>
        {/* </form> */}
      </MDBCard>
    </div>
  );
};
