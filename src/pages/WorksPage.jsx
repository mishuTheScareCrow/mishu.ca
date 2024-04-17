import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import works1 from "../assets/images/works_bkash.png";
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
      projectTags: ["Website", "CRM", "Dashboard"],
      projectDescription:
        "A clean, responsive, SEO optimized website for the largest Mobile Finance Service (MFS) in Bangladesh. Most importantly, Web Content Accessibility Guidelines (WCAG) followed and ensured.",
    },
    {
      id: 2,
      projectSequence: "second",
      projectTitle: "MoleculeData",
      projectType: "website",
      projectURL: "https://www.moleculedata.com/",
      projectTags: "Website",
      projectDescription:
        "A clean, responsive, SEO optimized website for the largest Mobile Finance Service (MFS) in Bangladesh. Most importantly, Web Content Accessibility Guidelines (WCAG) followed and ensured.",
    },
    {
      id: 3,
      projectSequence: "third",
      projectTitle: "RemoteDevs",
      projectType: "website",
      projectURL: "https://remotedevs.com/",
      projectDescription:
        "A clean, responsive, SEO optimized website for the largest Mobile Finance Service (MFS) in Bangladesh. Most importantly, Web Content Accessibility Guidelines (WCAG) followed and ensured.",
    },
    {
      id: 4,
      projectSequence: "fourth",
      projectTitle: "Boston Appraisal",
      projectType: "website",
      projectURL: "https://www.bostonappraisal.com/",
      projectDescription:
        "A clean, responsive, SEO optimized website for the largest Mobile Finance Service (MFS) in Bangladesh. Most importantly, Web Content Accessibility Guidelines (WCAG) followed and ensured.",
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
