import { NextPage } from "next";

import { USER } from "../../common/constants/User";

import ServiceFAQ from "../../common/components/Services/FAQ/FAQ";
import ServiceHeader from "../../common/components/Services/Header/Header";
import ServicePackages from "../../common/components/Services/Packages/Packages";

interface IServiceProps {
  setCurrentPage: React.Dispatch<number>;
}

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
