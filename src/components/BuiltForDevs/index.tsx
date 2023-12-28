const BuiltForDevs = () => {
  return (
    <section className="w-full px-8 py-28 md:py-20 md:px-32 bg-[#000000] text-[#ffffff]">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="md:w-1/2">
          <h3 className="text-center md:text-left text-2xl font-semibold mb-8 lg:text-4xl">
            Build with developers in mind
          </h3>
          <p className="text-center md:text-left font-extralight text-sm w-full mb-8 lg:text-lg">
            Plaid gives developers the tools they need to create easy and
            accessible user experiences. {"That's"} why more than 7,000 apps and
            services are powered by {"Plaid's"} API-first network. And with just
            a few lines of code, your users can connect to more than 12,000
            financial institutions.
          </p>

          <p className="text-sm font-medium text-center md:text-left">
            Read API Documentation
          </p>
        </div>

        <div className="w-[350px] h-auto mt-12 md:w-1/2">
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
            <source src="/dev-code.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default BuiltForDevs;
