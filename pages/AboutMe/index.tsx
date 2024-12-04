import { USER } from "../../common/constants/User";

import Testimonials from "../../common/components/AboutMe/Testimonials/Testimonials";
import Header from "../../common/components/AboutMe/Header/Header";
import LineSeperator from "../../common/components/LineSeperator";
import ProgrammingLanguages from "../../common/components/AboutMe/ProgrammingLanguages/ProgrammingLanguages";
import FeaturedProjects from "../../common/components/AboutMe/FeaturedProjects/FeaturedProjects";
import { NextPage } from "next";
import LatestBlogs from "../../common/components/AboutMe/LatestBlogs/LatestBlogs";

interface IAboutMeProps {
  setCurrentPage: React.Dispatch<number>;
}

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
