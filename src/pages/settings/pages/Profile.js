import React, { useContext } from "react";
import AuthContext from "../../../store/authContextAPI";
import FormNav from "../components/FormNav";
import * as pages from "../form/ProfileForm";
import * as action from "../formType";

const Profile = (props) => {
  const ctx = useContext(AuthContext);
  let profileFormContainer = <pages.BIO_FORM name={action.BIO_PAGE} />;

  switch (ctx.profileForm) {
    case action.BIO_PAGE: {
      profileFormContainer = <pages.BIO_FORM name={action.BIO_PAGE} />;
      break;
    }
    case action.SKILLS_PAGE: {
      profileFormContainer = <pages.SKILLS_FORM name={action.SKILLS_PAGE} />;
      break;
    }
    case action.EDUCATION_PAGE: {
      profileFormContainer = (
        <pages.EDUCATION_FORM name={action.EDUCATION_PAGE} />
      );
      break;
    }

    case action.WORK_EXPERIENCE_PAGE: {
      profileFormContainer = (
        <pages.WORK_EXPERIENCE_FORM name={action.WORK_EXPERIENCE_PAGE} />
      );
      break;
    }

    case action.CERTIFICATION_PAGE: {
      profileFormContainer = (
        <pages.CERTIFICATION_FORM name={action.CERTIFICATION_PAGE} />
      );
      break;
    }

    default: {
      profileFormContainer = <pages.BIO_FORM name={action.BIO_PAGE} />;
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
