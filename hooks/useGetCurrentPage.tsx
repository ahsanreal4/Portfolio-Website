import { useState } from "react";

import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Resume from "../pages/Resume";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const useGetCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const getPage = (currentPage: number) => {
    const pages = {
      1: <AboutMe setCurrentPage={setCurrentPage} />,
      2: <Portfolio setCurrentPage={setCurrentPage} />,
      3: <Services setCurrentPage={setCurrentPage} />,
      4: <Resume />,
      5: <Blog />,
      6: <Contact setCurrentPage={setCurrentPage} />,
    };

    // @ts-ignore
    return pages[currentPage];
  };

  return { currentPage, setCurrentPage, getPage };
};

export default useGetCurrentPage;
