import Image from "next/image";

import Dev from "@/assets/images/dev.png";

const BuiltForDevs = () => {
  return (
    <section className="w-full px-8 py-28 md:py-20 md:px-32 bg-[#000000] text-[#ffffff]">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-center md:text-left text-2xl font-semibold mb-8 lg:text-4xl">
            OneBharat is designed with a focus on developers.
          </h3>
          <p className="text-center md:text-left font-extralight text-sm w-full mb-8 lg:text-lg">
            OneBharat gives developers the tools they need to create easy and
            accessible user experiences. With just a few lines of code, your
            users can connect to more than 100s of financial institutions.
          </p>

          <p className="text-sm font-medium text-center md:text-left">
            Read API Documentation
          </p>
        </div>

        <div className="w-[350px] h-auto mt-12 md:w-1/2">
          <Image src={Dev} alt="built for devs" />
        </div>
      </div>
    </section>
  );
};

export default BuiltForDevs;
