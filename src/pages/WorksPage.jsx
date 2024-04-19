import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import works1 from "../assets/images/works_bkash.webp";
import works2 from "../assets/images/works_moleculedata.webp";
import works3 from "../assets/images/works_remotedevs.webp";
import works4 from "../assets/images/works_bas.webp";
import WorksCardContent from "../components/WorksCardContent";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WorksPage() {
  const main = useRef();
  useGSAP(
    () => {
      Array.from(document.querySelectorAll(".card")).forEach(function (index) {
        let triggerElement = index;
        let targetElement = index.previousElementSibling;
        let projectCards = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top 75%",
            end: "top top",
            scrub: 1,
          },
        });
        projectCards.fromTo(
          targetElement,
          {
            scale: "1",
            duration: 1,
          },
          {
            scale: "0.8",
            duration: 1,
          }
        );
        projectCards.fromTo(
          triggerElement,
          {
            boxShadow: "0rem 0rem 0rem 0rem rgba(0,0,0,0)",
            duration: 1,
          },
          {
            boxShadow: "0rem -4rem 10rem 0rem rgba(0,0,0,0.25)",
            duration: 1,
          }
        );
      });
    },
    { scope: main }
  );

  const workInfo = [
    {
      id: 1,
      projectSequence: "first",
      projectTitle: "bKash",
      projectType: "website",
      projectURL: "https://bkash.com/en/",
      projectTags: ["Website"],
      projectDescription:
        "A clean, responsive, SEO optimized website for the largest Mobile Finance Service (MFS) in Bangladesh. Most importantly, Web Content Accessibility Guidelines (WCAG) followed and ensured.",
      projectImage: works1,
    },
    {
      id: 2,
      projectSequence: "second",
      projectTitle: "MoleculeData",
      projectType: "website & dashboard",
      projectURL: "https://www.moleculedata.com/",
      projectTags: ["Website", "Dashboard"],
      projectDescription:
        "A website and dashboard developed with cutting edge technologies to ensure the best user experience. The dashboard includes a lots of graphs to visualize a lots of analytical data for user's social media advertising.",
      projectImage: works2,
    },
    {
      id: 3,
      projectSequence: "third",
      projectTitle: "RemoteDevs",
      projectType: "website & dashboard",
      projectURL: "https://remotedevs.com/",
      projectTags: ["Website", "Dashboard"],
      projectDescription:
        "The easiest way to find out if a software engineer worth more or not, also finding for a new job made easier with this web application. The application was carefully crafted considering simple, clean and responsive user experience.",
      projectImage: works3,
    },
    {
      id: 4,
      projectSequence: "fourth",
      projectTitle: "Boston Appraisal",
      projectType: "website & CRM",
      projectURL: "https://www.bostonappraisal.com/",
      projectTags: ["website", "Dashboard"],
      projectDescription:
        "A web application made life easier for both buyer and seller of real estate. A refreshed and enhanced experience is delivered to the users with the help of best technologies available out there.",
      projectImage: works4,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="cards" ref={main}>
        {workInfo.map((work) => (
          <WorksCardContent key={work.id} {...work} />
        ))}
      </div>
    </div>
  );
}
