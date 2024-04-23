import { useState } from "react";
import SocialLinks from "../components/SocialLinks";
import { isMobile } from "react-device-detect";
const getCurrentYear = () => new Date().getFullYear();

export default function ContactPage() {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  return (
    <div className="contact-page p-4 md:p-8 flex flex-col justify-between">
      <div></div>
      <div className="text-center mx-auto" style={!isMobile ? { maxWidth: "40vw" } : { maxWidth: "80vw" }}>
        <h3 className="font-semibold leading-none" style={{ fontSize: "6vw" }}>
          Let&apos;s start a project together
        </h3>
        <p className="mt-8 mb-3 text-lg">Drop me an email:</p>
        <a href="mailto:letstalk@mishu.ca" className="text-2xl border-2 px-5 py-1 rounded-full tracking-wider">
          letstalk@mishu.ca
        </a>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="mt-4 md:mt-0">&copy; {currentYear} - All Rights Reserved</p>
        <SocialLinks />
      </div>
    </div>
  );
}
