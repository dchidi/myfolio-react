import React, { useRef } from "react";
import { useDispatch } from "react-redux";
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
import { addProject } from "../../../features/projects/project_slice";

const AddProject = () => {
  const dispatch = useDispatch();
  let features = [];
  let techStack = [];
  let file = {};
  // get payload from InputPills component
  const featureList = (data) => {
    // console.log(data);
    features = data;
  };
  const techStackList = (data) => {
    // console.log(data);
    techStack = data;
  };

  const uploadFile = (e) => {
    // console.log(e);
    file = e.target.files[0];
    // console.log(file);
  };
  // text field reference
  const projectTitleRef = useRef("");
  const projectUrlRef = useRef("");
  // const projectImageRef = useRef("");
  const projectDescriptionRef = useRef("");

  const saveProject = () => {
    // call api to save project into database

    // call disptach to save project in redux to avoid loading database
    dispatch(
      addProject({
        projectTitle: projectTitleRef.current.value,
        projectUrl: projectUrlRef.current.value,
        projectImage: file.name,
        imageType: file.type,
        imageSize: file.size,
        projectDescription: projectDescriptionRef.current.value,
        features,
        techStack,
      })
    );
    projectTitleRef.current.value = "";
    projectUrlRef.current.value = "";
    // projectImageRef.current.value = "";
    projectDescriptionRef.current.value = "";
    features = [];
    techStack = [];
  };

  return (
    <MDBCard>
      <MDBCardBody className="offset-md-2 col-md-8">
        <MDBInput
          wrapperClass="mb-4"
          label="Project Title"
          inputRef={projectTitleRef}
        />
        <MDBInput
          label="Project Url"
          inputRef={projectUrlRef}
          className="mb-3"
        />
        {/* <input type="file" name="file" onChange={uploadFile} /> */}
        <MDBFile
          label="Upload project Image"
          size="lg"
          id="formFileLg"
          onChange={uploadFile}
        />
        <MDBTextArea
          label="Project Description"
          id="textAreaExample"
          rows={4}
          className="my-4"
          inputRef={projectDescriptionRef}
        />
        <InputPills title="Features" payload={featureList} />
        <InputPills title="Tech Stack" payload={techStackList} />

        <div className="d-flex justify-content-end">
          <MDBBtn outline color="primary" onClick={saveProject}>
            SAVE PROJECT
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default React.memo(AddProject);
