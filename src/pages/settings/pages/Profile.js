import React, { useContext } from "react";
import AuthContext from "../../../store/authContextAPI";
import FormNav from "../components/FormNav";
import * as pages from "../form/ProfileForm";
import * as action from "../formType";

const Profile = (props) => {
  const ctx = useContext(AuthContext);
  let profileFormContainer = <pages.BIO_FORM />;

  switch (ctx.profileForm) {
    case action.BIO_PAGE: {
      profileFormContainer = <pages.BIO_FORM />;
      break;
    }
    case action.SKILLS_PAGE: {
      profileFormContainer = <pages.SKILLS_FORM />;
      break;
    }
    case action.EDUCATION_PAGE: {
      profileFormContainer = <pages.EDUCATION_FORM />;
      break;
    }

    case action.WORK_EXPERIENCE_PAGE: {
      profileFormContainer = <pages.WORK_EXPERIENCE_FORM />;
      break;
    }

    case action.CERTIFICATION_PAGE: {
      profileFormContainer = <pages.CERTIFICATION_FORM />;
      break;
    }

    default: {
      profileFormContainer = <pages.BIO_FORM />;
      break;
    }
  }

  return (
    <>
      <FormNav />
      {profileFormContainer}
    </>
  );
};

export default Profile;
