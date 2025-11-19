import { ButtonPrimary, ButtonOutline } from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  // ref untuk tombol
  const scrollBtnRef = useRef(null);

  useGSAP(() => {
    if (scrollBtnRef.current) {
      gsap.to(scrollBtnRef.current, {
        y: -7,               // lompat ke bawah 10px
        repeat: -1,          // infinite
        yoyo: true,          // balik ke posisi awal
        ease: "power1.inOut",
        duration: 0.5          // kecepatan lompat
      });
    }
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="images/alung.png"
                width={40}
                height={40}
                alt="alung"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-2 text-zinc-400 text-sm tracking-wide">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400"></span>
              </span>
              <span>Ready for work</span>
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />

            {/* Tambahin ref di sini */}
            <div ref={scrollBtnRef}>
              <ButtonOutline
                href="#about"
                label="Scroll Down"
                icon="arrow_downward"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="images/alung.png"
              width={656}
              height={800}
              alt="alung"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
