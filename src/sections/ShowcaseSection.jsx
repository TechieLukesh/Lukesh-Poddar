import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const unityRef = useRef(null);
  const coachingRef = useRef(null);
  const youtubeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [unityRef.current, coachingRef.current, youtubeRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* UNITY DEVELOPER */}
          <div ref={unityRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/unity-dev.png" alt="Unity Developer Work" />
            </div>
            <div className="text-content">
              <h2>
                Immersive Worlds, Built in Code — Game & Simulation Developer
                using Unity Engine (C#)
              </h2>
              <p className="text-white-50 md:text-xl">
                I specialize in crafting interactive 2D/3D experiences and games
                using Unity with C#, blending creativity with technical mastery.
              </p>
            </div>
          </div>

          {/* COACHING */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={coachingRef}>
              <div className="image-wrapper bg-[#D1FADF]">
                <img
                  src="/images/coaching.png"
                  alt="Coaching Students"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2>Mentored 500+ Students — Coaching That Empowers Careers</h2>
            </div>

            {/* YOUTUBE */}
            <div className="project" ref={youtubeRef}>
              <div className="image-wrapper bg-[#FFEBE6]">
                <img src="/images/youtube.png" alt="YouTube Content Creation" />
              </div>
              <h2>1000+ Tech Videos — Simplifying Technology for Everyone</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
