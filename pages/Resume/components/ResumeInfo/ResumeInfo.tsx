/* eslint-disable @next/next/no-img-element */
import { USER } from "../../../../common/constants/User";
import { Award } from "../../../../models/Award";
import { Education } from "../../../../models/Education";
import { Language } from "../../../../models/Language";
import { ResumeProject } from "../../../../models/ResumeProject";
import { UserSocialLink } from "../../../../models/UserSocialLink";
import { WorkExperience } from "../../../../models/WorkExperience";
import { NextPage } from "next";
import { IResumeInfoProps } from "./ResumeInfo.types";

const ResumeInfo: NextPage<IResumeInfoProps> = ({
  awards,
  educations,
  interests,
  languages,
  professionalSkills,
  projects,
  technicalSkills,
  workExperiences,
}) => {
  const renderWorkExperiences = (
    workExperience: WorkExperience,
    index: number
  ) => (
    <div
      key={index}
      className={`item ${workExperience.points.length > 0 && "mb-3"}`}
    >
      <div className="item-heading row align-items-center mb-2">
        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          {workExperience.title}
        </h4>
        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
          {workExperience.companyName} | {workExperience.startDate} -{" "}
          {workExperience.endDate}
        </div>
      </div>
      <div className="item-content">
        <p>{workExperience.description}</p>
        {workExperience.points.length > 0 && (
          <ul className="resume-list">
            {workExperience.points.map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  const renderProjects = (project: ResumeProject, index: number) => (
    <div key={index} className={`item ${index === 0 && "mb-3"}`}>
      <div className="item-heading row align-items-center mb-2">
        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
          {project.title}
        </h4>
        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
          {project.type}
        </div>
      </div>
      <div className="item-content">
        <p>
          <a href={project.projectLink} className="theme-link">
            Project Link
          </a>{" "}
          {project.description}
        </p>
      </div>
    </div>
  );

  const renderTechnicalSkills = (technicalSkill: string, index: number) => (
    <li key={index} className="mb-2">
      {technicalSkill}
    </li>
  );

  const renderProfessionalSkills = (
    professionalSkill: string,
    index: number
  ) => (
    <li key={index} className="mb-2">
      {professionalSkill}
    </li>
  );

  const renderEducation = (education: Education, index: number) => (
    <li key={index} className={`${index === 0 && "mb-3"}`}>
      <div className="resume-degree font-weight-bold">{education.title}</div>
      <div className="resume-degree-org text-muted">{education.university}</div>
      <div className="resume-degree-time text-muted">
        {education.startDate} - {education.endDate}
      </div>
    </li>
  );

  const renderAward = (award: Award, index: number) => (
    <li key={index} className={`${index === 0 && "mb-3"}`}>
      <div className="font-weight-bold">{award.title}</div>
      <div className="text-muted">
        {award.company} ({award.date})
      </div>
    </li>
  );

  const renderLanguage = (language: Language, index: number) => (
    <li key={index} className={`${index === 0 && "mb-2"}`}>
      {language.name}{" "}
      <span className="text-muted">({language.proficiency})</span>
    </li>
  );

  const renderInterests = (interest: string, index: number) => (
    <li key={index} className="mb-2">
      {interest}
    </li>
  );

  const renderSocialLinks = (socialLink: UserSocialLink, index: number) => (
    <li key={index} className="list-inline-item mb-lg-0 mr-4">
      <a className="resume-link" href={socialLink.linkUrl}>
        <i
          style={{ width: 20, height: 20 }}
          className={`${socialLink.linkIconClassName} mr-2`}
          data-fa-transform="down-4"
        />
        <span className="d-none d-lg-inline-block text-muted">
          {socialLink.userName}
        </span>
      </a>
    </li>
  );

  return (
    <div className="container px-3 px-lg-5">
      <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
        <div className="resume-header">
          <div className="row align-items-center">
            <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
              <h2 className="resume-name mb-0 text-uppercase">{USER.name}</h2>
              <div className="resume-tagline mb-3 mb-md-0">{USER.position}</div>
            </div>

            <div
              style={{ paddingRight: 0 }}
              className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3"
            >
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-phone-square fa-fw fa-lg mr-2 " />
                  <a className="resume-link" href={`tel:${USER.phoneNumber}`}>
                    {USER.phoneNumber}
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope-square fa-fw fa-lg mr-2" />
                  <a className="resume-link" href={`mailto:${USER.email}`}>
                    {USER.email}
                  </a>
                </li>
                <li className="mb-2">
                  <i className="fas fa-globe fa-fw fa-lg mr-2" />
                  <a className="resume-link" href={USER.website}>
                    {USER.website}
                  </a>
                </li>
                <li className="mb-0">
                  <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2" />
                  {USER.country}
                </li>
              </ul>
            </div>
            {/*//resume-contact*/}
          </div>
          {/*//row*/}
        </div>
        {/*//resume-header*/}
        <hr />
        <div className="resume-intro py-3">
          <div className="media flex-column flex-md-row align-items-center">
            <img
              className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
              src={USER.image}
              alt="image"
            />
            <div className="media-body text-left">
              <p className="mb-0">
                {USER.Resume.resume.resumeIntroductionText}
              </p>
            </div>
            {/*//media-body*/}
          </div>
        </div>
        {/*//resume-intro*/}
        <hr />
        <div className="resume-body">
          <div className="row">
            <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
              <section className="work-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  Work Experiences
                </h3>
                {workExperiences.map(
                  (workExperience: WorkExperience, index: number) =>
                    renderWorkExperiences(workExperience, index)
                )}
                {/*//item*/}
              </section>
              {/*//work-section*/}
              <section className="project-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  Projects
                </h3>
                {projects.map((project: ResumeProject, index: number) =>
                  renderProjects(project, index)
                )}
                {/*//item*/}
              </section>
              {/*//project-section*/}
            </div>
            {/*//resume-main*/}
            <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
              <section className="skills-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  Skills
                </h3>
                <div className="item">
                  <h4 className="item-title">Technical</h4>
                  <ul className="list-unstyled resume-skills-list">
                    {technicalSkills.map(
                      (technicalSkill: string, index: number) =>
                        renderTechnicalSkills(technicalSkill, index)
                    )}
                  </ul>
                </div>
                {/*//item*/}
                <div className="item">
                  <h4 className="item-title">Professional</h4>
                  <ul className="list-unstyled resume-skills-list">
                    {professionalSkills.map(
                      (professionalSkill: string, index: number) =>
                        renderProfessionalSkills(professionalSkill, index)
                    )}
                  </ul>
                </div>
                {/*//item*/}
              </section>
              {/*//skills-section*/}
              <section className="education-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  Education
                </h3>
                <ul className="list-unstyled resume-education-list">
                  {educations.map((education: Education, index: number) =>
                    renderEducation(education, index)
                  )}
                </ul>
              </section>
              {/*//education-section*/}
              <section className="education-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  {awards.length > 0 && "Awards"}
                </h3>
                <ul className="list-unstyled resume-awards-list">
                  {awards.map((award: Award, index: number) =>
                    renderAward(award, index)
                  )}
                </ul>
              </section>
              {/*//education-section*/}
              <section className="skills-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  Languages
                </h3>
                <ul className="list-unstyled resume-lang-list">
                  {languages.map((language: Language, index: number) =>
                    renderLanguage(language, index)
                  )}
                </ul>
              </section>
              {/*//certificates-section*/}
              <section className="skills-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">
                  Interests
                </h3>
                <ul className="list-unstyled resume-interests-list mb-0">
                  {interests.map((interest: string, index: number) =>
                    renderInterests(interest, index)
                  )}
                  <li>Travelling</li>
                </ul>
              </section>
              {/*//certificates-section*/}
            </aside>
            {/*//resume-aside*/}
          </div>
          {/*//row*/}
        </div>
        {/*//resume-body*/}
        <hr />
        <div className="resume-footer text-center">
          <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
            {USER.Navbar.socialLinks.map(
              (socialLink: UserSocialLink, index: number) =>
                renderSocialLinks(socialLink, index)
            )}
          </ul>
        </div>
        {/*//resume-footer*/}
      </article>
    </div>
  );
};

export default ResumeInfo;
