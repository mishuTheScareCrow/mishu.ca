import { useState } from "react";
import SocialLinks from "../components/SocialLinks";
const getCurrentYear = () => new Date().getFullYear();

export default function ContactPage() {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  return (
    <div className="container mx-auto">
      <div className="contact-page p-8 flex flex-col justify-between">
        <div></div>
        <div className="text-center mx-auto" style={{ maxWidth: "40vw" }}>
          <h3 className="font-semibold leading-none" style={{ fontSize: "6vw" }}>
            Let&apos;s start a project together
          </h3>
          <p className="mt-8 mb-3 text-lg">Drop me an email:</p>
          <a href="mailto:letstalk@mishu.ca" className="text-2xl border-2 px-5 py-1 rounded-full tracking-wider">
            letstalk@mishu.ca
          </a>
        </div>
        <div className="flex justify-between">
          <p>&copy; {currentYear} - All Rights Reserved</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
