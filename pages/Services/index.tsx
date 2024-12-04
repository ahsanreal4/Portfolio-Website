import { NextPage } from "next";

import { USER } from "../../common/constants/User";

import ServiceFAQ from "./components/FAQ/FAQ";
import ServiceHeader from "./components/Header/Header";
import ServicePackages from "./components/Packages/Packages";
import { IServiceProps } from "./index.types";

const Services: NextPage<IServiceProps> = ({ setCurrentPage }) => (
  <>
    <ServiceHeader
      headerText={USER.Services.headerText}
      setCurrentPage={setCurrentPage}
    />
    <ServicePackages
      services={USER.Services.services}
      features={USER.Services.features}
    />
    <ServiceFAQ questions={USER.Services.questions} />
  </>
);

export default Services;
