const AppDemo = () => {
  return (
    <section className="bg-white w-screen overflow-x-hidden pt-12">
      <div className="flex items-center justify-center flex-col mb-8">
        <h3 className="text-2xl font-semibold mb-8 lg:text-4xl">
          AI powered products
        </h3>
        <p className="text-center font-extralight text-sm w-5/6 mb-8 lg:text-lg lg:w-1/2">
          Embedded & unbroken user experience with connection to digital finance
          ecosystem in seconds
        </p>

        <p className="text-sm font-medium">This is how OneBharat works</p>
      </div>

      <div className="w-[800px] lg:w-4/5 lg:mx-auto relative -left-1/2 md:left-0 md:w-full">
        <video
          data-testid="video"
          autoPlay
          loop
          muted
          playsInline
          className=""
          width="100%"
          height="100%"
          aria-label=""
        >
          <source src="/mobile-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default AppDemo;
