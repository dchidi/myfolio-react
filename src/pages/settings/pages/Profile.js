import React, { useContext } from "react";
import SettingsContext from "../../../context/settingsContext";
import FormNav from "../components/FormNav";
import * as pages from "../form/ProfileForm";
import * as action from "../formType";

const Profile = (props) => {
  const ctx = useContext(SettingsContext);
  let profileFormContainer = <pages.BIO_FORM name={action.BIO_PAGE} />;

  // The switch uses name or position to display the page
  switch (ctx.profile_position) {
    case 1: {
      profileFormContainer = <pages.BIO_FORM name={action.BIO_PAGE} />;
      break;
    }
    case 2: {
      profileFormContainer = <pages.SKILLS_FORM name={action.SKILLS_PAGE} />;
      break;
    }
    case 3: {
      profileFormContainer = (
        <pages.EDUCATION_FORM name={action.EDUCATION_PAGE} />
      );
      break;
    }

    case 4: {
      profileFormContainer = (
        <pages.WORK_EXPERIENCE_FORM name={action.WORK_EXPERIENCE_PAGE} />
      );
      break;
    }

    case 5: {
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
