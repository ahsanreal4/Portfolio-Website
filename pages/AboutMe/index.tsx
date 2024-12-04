import { USER } from "../../common/constants/User";

import Testimonials from "./components/Testimonials/Testimonials";
import Header from "../AboutMe/components/Header/Header";
import LineSeperator from "../../common/components/LineSeperator";
import ProgrammingLanguages from "./components/ProgrammingLanguages/ProgrammingLanguages";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import { NextPage } from "next";
import { IAboutMeProps } from "./index.types";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";

const AboutMe: NextPage<IAboutMeProps> = ({ setCurrentPage }) => {
  return (
    <>
      <Header
        name={USER.name}
        introductionText={USER.AboutMe.headerText}
        position={USER.position}
        setCurrentPage={setCurrentPage}
      />
      <ProgrammingLanguages
        introductionText={USER.AboutMe.languageIntroductionText}
        programmingLanguages={USER.AboutMe.programmingLanguages}
      />
      <div className="text-center py-3">
        <a
          href="#"
          onClick={() => setCurrentPage(3)}
          className="btn btn-primary"
        >
          <i className="fas fa-arrow-alt-circle-right mr-2" />
          Services &amp; Pricing
        </a>
      </div>
      <LineSeperator />
      <Testimonials testimonials={USER.AboutMe.testimonials} />
      <LineSeperator />
      <FeaturedProjects
        featuredProjects={USER.AboutMe.featuredProjects}
        setCurrentPage={setCurrentPage}
      />
      <LineSeperator />
      <LatestBlogs blogs={USER.Blog.blogs.slice(0, 3)} />
      <div className="text-center py-3">
        <a
          href="#"
          onClick={() => setCurrentPage(5)}
          className="btn btn-primary"
        >
          <i className="fas fa-arrow-alt-circle-right mr-2" />
          View Blog
        </a>
      </div>
    </>
  );
};

export default AboutMe;
