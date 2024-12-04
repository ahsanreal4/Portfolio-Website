import { FeaturedProject } from "../common/components/AboutMe/FeaturedProjects/FeaturedProjects.types";
import { Testimonial } from "../common/components/AboutMe/Testimonials/Testimonials.types";

export interface ProjectResult {
  efficiency: number;
  customerSatisfaction: number;
  salesGenerated: string;
  overallCostPercentage: number;
  text: string;
}

export interface Project {
  featuredProject: FeaturedProject;
  projectType: string;
  projectClientName: string;
  projectIndustry: string;
  projectWebsiteUrl: string;
  projectPeople: number;
  projectDescription: string;
  projectRequirements: string[];
  projectOverView: string;
  projectChallenge: string;
  projectApproachSolution: string;
  projectSolutionImages: string[];
  projectResult: ProjectResult;
  clientTestimonial: Testimonial;
}
