import { isMobile } from "react-device-detect";

export default function NameFlow() {
  return (
    <div className="name-flow-wrapper" style={!isMobile ? { bottom: "2vh" } : { top: "2vh" }}>
      <div className="name-flow-inner">
        <div className="name-flow glitch-wrapper">
          <h1 className="name-flow-text glitch" data-text="Abdur Rahman (Mishu)">
            Abdur Rahman (Mishu)<span className="spacer">—</span>
          </h1>
        </div>
        <div className="name-flow glitch-wrapper">
          <h1 className="name-flow-text glitch" data-text="Abdur Rahman (Mishu)">
            Abdur Rahman (Mishu)<span className="spacer">—</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
