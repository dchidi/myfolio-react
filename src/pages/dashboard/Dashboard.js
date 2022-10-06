import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBCardImage, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGifts,
  faMailForward,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import style from "./Dashboard.module.css";

// Image component
const ProfileImage = (props) => {
  // TODO:: image should come from contextAPI
  const img = "chidi.jpg";
  return (
    <img
      src={require(`../../image/profile/${img}`)}
      alt="ProfileImage"
      className={style.profilePics}
      width={props.width}
      height={props.height}
    />
  );
};

// ContactMe component
const ContactMe = (props) => {
  return (
    <MDBBtn color="dark" outline className="btn-sm d-block mt-3">
      contact me <FontAwesomeIcon icon={faMessage} />
    </MDBBtn>
  );
};

const Dashboard = (props) => {
  const {
    img,
    name,
    country,
    jobTitle,
    git,
    facebook,
    linkedIn,
    twitter,
    instagram,
  } = {
    name: "CHIDI DURU",
    img: "chidi.jpg",
    country: "Ireland",
    jobTitle: "Fullstack Engineer",
  };
  return (
    <div className={style.dashboard}>
      <BreadCrumb page="Dashboard" />

      <div className="d-flex justify-content-center">
        <ul className={style.profileInfo}>
          <li className={style.name}>{name}</li>
          <li>{jobTitle}</li>
          <li>Based in {country}</li>
        </ul>
      </div>

      {/* Mobile only -- Profile Image */}
      <div className="d-flex justify-content-center d-block d-sm-none">
        <div>
          <ProfileImage width={200} height={300} />
          <div className="d-flex justify-content-center">
            <ContactMe />
          </div>
        </div>
      </div>
      {/* END */}
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex justify-content-around col-md-offset-2 col-lg-offset-3 col-md-8 col-lg-6">
          {/* Left */}
          <MDBCol className={`${style.left} g-col-4`}>
            <div className={style.resetUl}>
              {/* contacts */}
              <div className={style.contact}>
                <h3>Contact</h3>
                <ul>
                  <li>Dublin, Ireland</li>
                  <li>chidi.duru89@gmail.com</li>
                  <li>+353 899 516678</li>
                </ul>
              </div>
              {/* skills */}
              <div className={style.skills}>
                <h3>Skill</h3>
                <ul>
                  <li>Html & Css</li>
                  <li>ReactJS</li>
                  <li>Python</li>
                  <li>
                    <Link to="" className={style.more}>
                      [more ++]
                    </Link>
                  </li>
                </ul>
              </div>
              {/* History */}
              <div className={style.education}>
                <h3>Education</h3>
                <ul>
                  <li>
                    Griffith College<span className={style.rating}>Msc</span>
                  </li>
                  <li>
                    University of Benin<span className={style.rating}>Bsc</span>
                  </li>
                  <li>
                    Hussey College<span className={style.rating}>SSCE</span>
                  </li>
                  <li>
                    <Link to="" className={style.more}>
                      [more ++]
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </MDBCol>
          {/* Profile Image */}
          <MDBCol className={`${style.middle} g-col-4 d-none d-sm-block`}>
            <ProfileImage width={230} height={"90%"} />
          </MDBCol>
          {/* Right */}
          <MDBCol className={`${style.right} g-col-4`}>
            <div>
              <div className={style.history}>
                <h3>
                  Years of
                  <br />
                  Experience
                </h3>
                <div className={style.rightItem}>8</div>
              </div>
              <div className={style.history}>
                <h3>
                  Project
                  <br />
                  Executed
                </h3>
                <div className={style.rightItem}>8</div>
              </div>
              <div className={style.history}>
                <h3>Certifications</h3>
                <div className={style.rightItem}>1</div>
              </div>
              <div
                className={`d-none d-sm-block ${style.history} ${style.rightItem}`}
              >
                <ContactMe />
              </div>
            </div>
          </MDBCol>
        </div>
      </div>
      <ul className={`d-flex justify-content-center me-5 my-4`}>
        <li>
          <Link to="" className={style.socials}>
            GitHub
          </Link>
        </li>
        <li>
          <Link to="" className={style.socials}>
            LinkedIn
          </Link>
        </li>
        <li>
          <Link to="" className={style.socials}>
            Twitter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
