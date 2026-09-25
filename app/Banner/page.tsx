import Image from "next/image";
import HeroImg from "../assets/banner.png";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6">
      <div className="bg-gray-900 container mx-auto rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between min-h-0 lg:min-h-[450px] px-6 sm:px-10 lg:px-12 py-6 sm:py-8 lg:py-0 gap-2 sm:gap-5 lg:gap-12">
          {/* Image */}
          <div className="w-full lg:w-auto flex justify-center shrink-0">
            <Image
              src={HeroImg}
              alt="Hero-Image"
              width={300}
              className="w-[180px] sm:w-[230px] lg:w-[300px] h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:flex-1 text-center lg:text-left">
            <p className="text-[#C2F800] text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              TRAIN WITH INTENT. LOG <br className="hidden sm:block" />
              EVERY SET.
            </h1>

            <p className="py-3 sm:py-5 lg:py-6 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <Link href="/WorkoutCards">
              <button className="bg-[#C2F800] w-[250] sm:w-auto px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#b5e600] transition-colors">
                BROWSE WORKOUTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
