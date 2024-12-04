import { USER } from "../../common/constants/User";

import ResumeHeader from "../../common/components/Resume/Header/Header";
import ResumeInfo from "../../common/components/Resume/ResumeInfo/ResumeInfo";

const Resume = () => (
  <>
    <ResumeHeader />
    <ResumeInfo {...USER.Resume.resume} />
  </>
);

export default Resume;
