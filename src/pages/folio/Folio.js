import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import style from "./Folio.module.css";

const Folio = (props) => {
  return (
    <div className={style.folio}>
      <BreadCrumb page="Folio" />
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-around col-md-offset-2 col-lg-offset-3 col-md-8 col-lg-6">
          {/* Details */}
          <MDBCol className={`${style.details} col-8`}>
            <h3 className={style.folioHeading}>App name here</h3>
            <div className="d-flex flex-column align-items-center mt-4">
              <img
                src={require(`../../image/projects/prj1.png`)}
                width="90%"
                className={style.thumbnailBig}
                alt="profile image"
              />
              <Link to="" className={style.link}>
                url to web page
              </Link>
            </div>

            {/* Technology Stack */}
            <div className="my-4">
              <h3 className="mb-3">Tech Stack</h3>
              <ul className={style.stack}>
                <li className={style.stackItem}>ReactJS</li>
                <li className={style.stackItem}>Python</li>
                <li className={style.stackItem}>MongoDB</li>
              </ul>
            </div>
            <div className={style.descriptions}>
              <h3>Description</h3>
              <p>content goes here</p>
            </div>
            {/* Features */}
            <div className={style.features}>
              <h3 className="mb-3">Features</h3>
              <ul className={style.featuresUl}>
                <li className={style.featureItem}>
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className={style.bullet}
                  />
                  <p>Scrap Retail shops for discounted products</p>
                </li>
                <li className={style.featureItem}>
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    className={style.bullet}
                  />
                  <p>Scrap Retail shops for discounted products</p>
                </li>

                <li>
                  <Link to="" className={style.more}>
                    [more ++]
                  </Link>
                </li>
              </ul>
            </div>
          </MDBCol>
          {/* Right */}
          <MDBCol className="col-4">
            <ul className={`d-flex flex-column align-items-center`}>
              <li className={style.aside}>
                <MDBBtn color="warning" className="btn-sm py-0 my-4">
                  <FontAwesomeIcon icon={faCaretUp} />
                </MDBBtn>
              </li>
              <li className={style.aside}>
                <img
                  src={require(`../../image/projects/prj1.png`)}
                  width="90%"
                  className={style.thumbnail}
                  alt="profile image"
                />
                <p className={style.thumbnailItem}>Discount Shop</p>
              </li>
              <li className={style.aside}>
                <img
                  src={require(`../../image/projects/prj1.png`)}
                  width="90%"
                  className={style.thumbnail}
                  alt="profile image"
                />
                <p className={style.thumbnailItem}>Discount Shop</p>
              </li>
              <li className={style.aside}>
                <MDBBtn color="warning" className="btn-sm py-0">
                  <FontAwesomeIcon icon={faCaretDown} />
                </MDBBtn>
              </li>
            </ul>
          </MDBCol>
        </div>
      </div>
    </div>
  );
};

export default Folio;
