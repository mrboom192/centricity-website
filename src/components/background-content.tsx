"use client";

const BackgroundContent = ({
  headline = "Explore the depths of creativity",
  mainCtaText = "Get Started",
  secondCtaText = "Learn More",
}) => {
  return (
    <div className="select-none">
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-1 pointer-events-none">
        {/* Headline */}
        <h1 className="mt-4 text-white text-center font-bold leading-tight tracking-[-2px] max-w-[16ch] text-[clamp(2rem,4vw,2.2rem)] drop-shadow-md">
          {headline}
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 items-center pointer-events-auto">
          {/* Primary */}
          <button className="px-6 md:px-8 py-2 text-xs md:text-sm font-medium rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-200 hover:-translate-y-[1px] shadow-md">
            {mainCtaText}
          </button>

          {/* Secondary */}
          <button className="px-6 md:px-8 py-2 text-xs md:text-sm font-medium rounded-full text-white/50 bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:bg-white/10 transition-all duration-200 hover:-translate-y-[1px]">
            {secondCtaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundContent;
