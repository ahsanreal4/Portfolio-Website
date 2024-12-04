import { USER } from "../../common/constants/User";
import { NextPage } from "next";
import PortfolioHeader from "../../common/components/Portfolio/Header/Header";
import ProjectsList from "../../common/components/Portfolio/ProjectsList/ProjectsList";

export interface IPortfolioProps {
  setCurrentPage: React.Dispatch<number>;
}

const Portfolio: NextPage<IPortfolioProps> = ({ setCurrentPage }) => {
  return (
    <>
      <PortfolioHeader
        text={USER.Portfolio.headerText}
        setCurrentPage={setCurrentPage}
      />
      <ProjectsList projects={USER.Portfolio.projects} />
    </>
  );
};

export default Portfolio;
