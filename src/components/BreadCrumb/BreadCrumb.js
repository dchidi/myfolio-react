import React from "react";
import { MDBBreadcrumbItem, MDBBreadcrumb } from "mdb-react-ui-kit";
const BreadCrumb = (props) => {
  return (
    <div className="mt-5 pt-3">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem active>{props.page}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </div>
  );
};

export default BreadCrumb;
