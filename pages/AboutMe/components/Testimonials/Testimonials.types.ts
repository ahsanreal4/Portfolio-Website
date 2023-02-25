export interface Testimonial {
  text: string
  image: string
  reviewerName: string
  reviewerPosition: string
  reviewerCompany: string
}

export interface ITestimonialProps {
  testimonials: Testimonial[]
}

export type ITestimonial = {
  testimonial: Testimonial
}
