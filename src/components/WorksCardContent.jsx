import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
export default function WorksCardContent({
  projectSequence,
  projectTitle,
  projectType,
  projectURL,
  projectTags,
  projectDescription,
  projectImage,
}) {
  return (
    <div
      className={`${projectSequence} card grid grid-flow-row md:grid-flow-col auto-cols-fr`}
      style={!isMobile ? { top: "6rem" } : { top: "2rem" }}
    >
      <div className="work-description-bg">
        <div className="flex flex-col justify-between h-full px-8 pt-8 pb-10">
          <div>
            <h3 className="font-semibold leading-none" style={{ fontSize: "5vw" }}>
              {projectTitle}
              <br />
              <span style={{ color: "#86868b" }} className="font-light">
                {projectType}
              </span>
            </h3>
          </div>

          <div>
            <p className="mb-6">{projectDescription}</p>
            <Link to={projectURL} target="_blank" className="border-2 rounded-full px-3 py-2 inline-flex items-center">
              <span className="font-bold">Visit Live Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-up-right-circle-fill inline-block ms-2"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="work-image-bg flex justify-center">
        <img src={projectImage} className="object-contain w-9/12 p-4" />
      </div>
    </div>
  );
}
