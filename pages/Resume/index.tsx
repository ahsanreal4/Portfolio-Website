import { USER } from "../../common/constants/User";

import ResumeHeader from "./components/Header/Header";
import ResumeInfo from "./components/ResumeInfo/ResumeInfo";

const Resume = () => (
  <>
    <ResumeHeader />
    <ResumeInfo {...USER.Resume.resume} />
  </>
);

export default Resume;
