import React from "react";
import InsBreadCrumb from "../common_insurance/InsBreadCrumb";
import InsHeading from "../common_insurance/InsHeading";
import ContentPage from "./MainContent";
const Insurance = ({ pageFor }) => {
  return (
    <>
      <div className="container-lg ">
        <InsBreadCrumb type={pageFor} />
        <InsHeading type={pageFor} />
      </div>
      <ContentPage />
      {/* <div>
        <InsTab type={pageFor} activeTab={activeTab} changeTab={changeTab} />
        <TabContent activeTab={activeTab} pageFor={pageFor} />
      </div> */}
    </>
  );
};

export default Insurance;
