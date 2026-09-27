import { WorkoutsType } from "@/app/Type/type";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";

interface WorkoutCardProps {
  workout: WorkoutsType;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const {
    image,
    muscleGroups,
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Workout Image */}
      <div className="relative w-full h-52 sm:h-56 lg:h-55">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-black text-center font-bold mb-3 sm:mb-4">
          {muscleGroups.map((muscleGroup, index) => (
            <p
              key={index}
              className="bg-[#C2F800] px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
            >
              {muscleGroup}
            </p>
          ))}
        </div>

        {/* Workout Name */}
        <h4 className="text-white text-lg sm:text-xl font-bold mb-1 leading-tight">
          {name}
        </h4>

        {/* Equipment */}
        <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5">
          {equipment}
        </p>

        {/* Workout Info */}
        <div className="flex items-center border-t border-gray-700 pt-3 sm:pt-4 text-gray-300">
          {/* Duration */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Clock size={18} className="text-[#C2F800] sm:w-5 sm:h-5" />

              <span className="text-white font-semibold text-sm sm:text-base">
                {duration}
              </span>
            </div>

            <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">
              Duration
            </p>
          </div>

          {/* Calories */}
          <div className="flex-1 text-center border-l border-gray-700">
            <div className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Flame size={18} className="text-orange-500 sm:w-5 sm:h-5" />

              <span className="text-white font-semibold text-sm sm:text-base">
                {caloriesBurned}
              </span>
            </div>

            <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">
              Calories
            </p>
          </div>

          {/* Rating */}
          <div className="flex-1 text-center border-l border-gray-700">
            <div className="flex items-center justify-center gap-1 sm:gap-1.5">
              <Star
                size={18}
                className="text-yellow-400 fill-yellow-400 sm:w-5 sm:h-5"
              />

              <span className="text-white font-semibold text-sm sm:text-base">
                {rating}
              </span>
            </div>

            <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
