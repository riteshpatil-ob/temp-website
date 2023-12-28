import Image from "next/image";

import Partner1 from "@/assets/images/partner-1.webp";
import Partner2 from "@/assets/images/partner-2.webp";
import Partner3 from "@/assets/images/partner-3.webp";
import Partner4 from "@/assets/images/partner-4.webp";
import Partner5 from "@/assets/images/partner-5.webp";

const PARTNERS = [
  {
    name: "Venmo",
    image: Partner1,
  },
  {
    name: "Acorns",
    image: Partner2,
  },
  {
    name: "Betterment",
    image: Partner3,
  },
  {
    name: "Chime",
    image: Partner4,
  },
  {
    name: "Sofi",
    image: Partner5,
  },
];

const Hero = () => {
  return (
    <header className="w-full">
      <div className="md:flex md:flex-row md:py-40 xl:py-60  md:container md:mx-auto relative md:h-4/6">
        <div className="flex flex-col justify-center items-center md:items-start mt-6 md:w-1/2 md:pl-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-center md:text-left w-3/4 leading-relaxed lg:leading-normal">
            The safer way for your users to link financial accounts
          </h1>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-[#111111] px-5 py-3 text-white text-base mr-5">
              Get Started
            </button>
            <button>Contact Us</button>
          </div>
        </div>

        <div className="w-full h-auto mt-12 md:w-5/6 md:absolute md:-right-40 lg:-right-80 md:bottom-0">
          <video
            data-testid="video"
            className="css-0"
            autoPlay
            loop
            muted
            playsInline
            width="100%"
            height="100%"
            aria-label=""
          >
            <source src="/hero-homepage.mov" type="video/quicktime" />
            <source src="/hero-homepage.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <div className="bg-white py-8 md:mx-auto md:pl-12">
        <p className="text-center text-base text-[#767676] w-3/4 mx-auto mb-4">
          Trusted By
        </p>

        <div className="flex flex-wrap justify-center gap-4 items-center w-3/4 mx-auto md:justify-between md:container ">
          {PARTNERS.map(({ name, image }) => (
            <Image key={name} src={image} alt={name} className="h-8 w-auto" />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;
