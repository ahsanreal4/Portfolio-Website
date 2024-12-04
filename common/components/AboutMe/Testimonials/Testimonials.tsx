import PaginationSlicks from "../../PaginationSlicks/PaginationSlicks";
import { portfolioColors } from "../../../constants/colors";
import { NextPage } from "next/types";
import { useState, useEffect } from "react";
import {
  ITestimonial,
  ITestimonialProps,
  Testimonial,
} from "./Testimonials.types";

const SHOW_TESTIMONIALS_PER_PAGE = 3;
/* eslint-disable @next/next/no-img-element */
const Testimonials: NextPage<ITestimonialProps> = ({ testimonials }) => {
  const [filteredTestimonials, setFilteredTestimonials] = useState<
    Testimonial[]
  >([]);
  const [currentTestimonialsPage, setCurrentTestimonialsPage] = useState(1);

  useEffect(() => {
    const filterdTestimonialsTemp: Testimonial[] = [];
    const limit = SHOW_TESTIMONIALS_PER_PAGE * currentTestimonialsPage;
    const start = SHOW_TESTIMONIALS_PER_PAGE * (currentTestimonialsPage - 1);
    for (let i = start; i < testimonials.length; i++) {
      if (i + 1 > limit) {
        break;
      }
      const testimonial: Testimonial = testimonials[i];
      filterdTestimonialsTemp.push(testimonial);
    }
    setFilteredTestimonials(filterdTestimonialsTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTestimonialsPage]);

  const RenderTestimonial = ({ testimonial }: ITestimonial) => (
    <div className="item">
      <div className="quote-holder">
        <blockquote className="quote-content">{testimonial.text}</blockquote>
        <i className="fas fa-quote-left" />
      </div>
      {/*//quote-holder*/}
      <div className="source-holder">
        <div className="source-profile">
          <img src={testimonial.image} alt="image" />
        </div>
        <div className="meta">
          <div className="name">{testimonial.reviewerName}</div>
          <div className="info">
            {testimonial.reviewerPosition}, {testimonial.reviewerCompany}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="testimonials-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
        <div
          style={{ display: "flex", gap: 28, transition: "all 2s" }}
          className="testimonial-carousel owl-carousel owl-theme"
        >
          {filteredTestimonials.map(
            (testimonial: Testimonial, index: number) => (
              <RenderTestimonial key={index} testimonial={testimonial} />
            )
          )}
        </div>
        <div style={{ marginTop: 15 }}>
          <PaginationSlicks
            numberOfSlicks={testimonials.length / SHOW_TESTIMONIALS_PER_PAGE}
            activeColor={portfolioColors.softBlack}
            inActiveColor={portfolioColors.gray}
            slicksGap={15}
            activeIndex={currentTestimonialsPage - 1}
            setCurrentTestimonialsPage={setCurrentTestimonialsPage}
          />
        </div>
      </div>
      {/*//container*/}
    </section>
  );
};

export default Testimonials;
