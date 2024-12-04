import { IResumeInfoProps } from "../components/Resume/ResumeInfo/ResumeInfo.types";

export const RESUME_INFO_PROPS: IResumeInfoProps = {
  workExperiences: [
    {
      title: "Senior Full Stack Developer",
      companyName: "Polygame",
      startDate: "Mar 2023",
      endDate: "Present",
      points: [
        "Developed robust backend systems for a video streaming platform, using Microservices architecture with Spring Boot, delivering seamless content delivery to over 500K users.",
        "Utilized Node JS non-blocking I/O capabilities to implement real-time streaming functionality, allowing efficient data processing and delivery with minimal latency.",
        "Integrated payment gateways using Java SDKs for secure transactions, handling 5,000 transactions per minute with zero downtime.",
        "Participated in creation of major functionalities including live chat, video streaming, graphs and admin panel",
        "Improved streaming latency by 35% by optimizing backend server response times by implementing Event Driven Architecture using Apache Kafka.",
        "Optimized database queries to reduce database response time by 40%, significantly improving data retrieval and application speed.",
      ],
      description: "",
    },
    {
      title: "Full Stack Developer",
      companyName: "Megaverse IT",
      startDate: "Jan 2021",
      endDate: "Feb 2023",
      points: [
        "Created a backend for dating website using Nest JS, Stripe and Redis ",
        "Worked as React developer on a big Risk management project RiskLens. Written unit tests for components using Jest.",
        "Worked as a backend developer on Almaak, a property management platform similar to Zameen, using Spring Boot Microservices, GraphQL, and PostgreSQL. Utilized RabbitMQ for inter-service communication, handling notifications, task queuing, and payment processing.",
        "Implemented Spring Reactive Programming in an Ecommerce project for non-blocking data streams, improving application efficiency and enabling concurrent processing of requests.",
        "Collaborated with cross-functional teams in an Agile environment, following Test-Driven Development (TDD) practices and utilizing JUnit and Mockito for unit and integration testing.",
      ],
      description: "",
    },
    {
      title: "Full Stack Developer",
      companyName: "DevFete",
      startDate: "Jun 2020",
      endDate: "Dec 2020",
      points: [
        "Utilized Spring Boot Reactive programming for an Enterprise resource planning project for a construction company in Thailand.",
        "Designed and implemented an Image compression solution utilizing the Imgscalr library, enabling efficient compression and conversion of large images to JPEG format for optimized storage.",
        "Faced different challenges in making tons of user roles and permissions as the project demanded creation of different types of CRUD operations for different users.",
        "Created a system to create and download excel files generated from backend that consists of project's timeline and data.",
      ],
      description: "",
    },
    {
      title: "Full Stack Intern",
      companyName: "Mentornment",
      startDate: "Feb 2020",
      endDate: "Apr 2020",
      points: [
        "Worked as Full stack intern on a Job Portal project named Mentornment",
      ],
      description: "",
    },
  ],
  technicalSkills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Node",
    "Java",
  ],
  professionalSkills: [
    "Effective communication",
    "Team Player",
    "Strong problem solver",
    "Good time management",
  ],
  educations: [
    {
      title: "BSc in Computer Science",
      university: "Comsats University Islamabad",
      startDate: "2018",
      endDate: "2022",
    },
  ],
  awards: [
    {
      title: "Meta Backend Developer",
      company: "Meta",
      date: "2024",
    },
  ],
  languages: [
    {
      name: "English",
      proficiency: "Fluent",
    },
    {
      name: "Urdu",
      proficiency: "Native",
    },
  ],
  interests: ["Climbing", "Snowboarding", "Snowboarding", "Snowboarding"],
  projects: [
    {
      title: "LinkedIn API Microservices",
      type: "Open Source",
      description:
        "This project demonstrates concepts like API Gateway ( Routing, Authentication, Authorization, Rate Limiting ), Services registration, discovery and load balancing using Eureka Server.",
      projectLink:
        "https://github.com/ahsanreal4/LinkedIn-SpringBoot-Microservices",
    },
    {
      title: "Blog API Spring Boot",
      type: "Open Source",
      description:
        "This api allows the client to use all endpoints related to blog app. The api can manage users, posts, categories and comments.",
      projectLink: "https://github.com/ahsanreal4/Blog-backend-Springboot",
    },
    {
      title: "Ocrivia API Nest JS",
      type: "Open Source",
      description:
        "This project demonstrates AI LLM integration with open source Groq Cloud API. It uses OCR parser to parse text from PDF tax files and AI provides valuable tax information to the user.",
      projectLink: "https://github.com/ahsanreal4/Ocrivia",
    },
  ],
  resumeIntroductionText:
    "I am a Full Stack Developer with a strong focus on Backend development, proficient in Java and Node.js. I have extensive experience in designing and building scalable, secure microservice solutions, leveraging best practices to ensure performance and reliability. My expertise includes Reactive programming in Java, enabling efficient and responsive backend systems. While my primary focus is backend, I also have foundational experience in frontend development using React and Next.js.",
};
