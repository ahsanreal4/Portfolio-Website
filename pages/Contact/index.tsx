import { NextPage } from "next";
import GetInTouch from "../../common/components/Contact/GetInTouch/GetInTouch";
import ContactHeader from "../../common/components/Contact/Header/Header";

export interface IContactProps {
  setCurrentPage: React.Dispatch<number>;
}

const Contact: NextPage<IContactProps> = ({ setCurrentPage }) => (
  <>
    <ContactHeader />
    <GetInTouch setCurrentPage={setCurrentPage} />
  </>
);

export default Contact;
