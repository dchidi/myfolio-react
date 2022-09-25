import React from "react";
import { MDBBreadcrumbItem, MDBBreadcrumb } from "mdb-react-ui-kit";
const BreadCrumb = (props) => {
  return (
    <>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem active>{props.page}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </>
  );
};

export default BreadCrumb;
