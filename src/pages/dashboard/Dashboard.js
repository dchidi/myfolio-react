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

      <div className="d-flex justify-content-center mt-5">
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
                  <li>
                    Html & Css<span className={style.rating}>0/10</span>
                  </li>
                  <li>
                    ReactJS<span className={style.rating}>0/10</span>
                  </li>
                  <li>
                    Python<span className={style.rating}>0/10</span>
                  </li>
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
          <MDBCol className={`${style.middle} g-col-4`}>
            <img
              src={require(`../../image/profile/${img}`)}
              alt="ProfileImage"
              className={style.profilePics}
              width="230"
            />
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
              <div className={style.history}>
                <div className={style.rightItem}>
                  <MDBBtn color="dark" outline className="btn-sm">
                    contact me <FontAwesomeIcon icon={faMessage} />
                  </MDBBtn>
                </div>
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
