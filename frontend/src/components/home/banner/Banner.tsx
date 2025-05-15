import "./Banner.scss";
import SlideMotion from "@/components/motion/SlideMotion";

export default function Banner() {
  return (
    <div className="bg-primary h-screen w-full">
      <div className="w-[1280px] mx-auto relative flex items-center justify-center h-full">
        <div>
          <SlideMotion
            as="h3"
            direction="left"
            className="text-[56px] mb-2 text-primary font-semibold uppercase"
          >
            Your AI-Powered Job Finder & Employer Hub
          </SlideMotion>
          <SlideMotion
            as="p"
            direction="left"
            className="text-secondary text-[20px] font-normal z-50">
            Discover the perfect job or the ideal candidate effortlessly. Career
            Connect uses advanced AI to match talents with opportunities, making
            hiring and job searching smarter, faster, and easier. Start your
            journey today!
          </SlideMotion>
        </div>
        <SlideMotion as="div" direction="right" className=" absolute right-[90px] bottom-4">
          <div className="ring-loader">
            <div className="ring"></div>
            <div className="glow text-white"></div>
          </div>
        </SlideMotion>
      </div>
    </div>
  );
}
