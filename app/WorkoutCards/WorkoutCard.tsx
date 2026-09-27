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
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        {/* Workout Image */}
        <div className="relative w-full h-55">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 text-black text-center font-bold mb-4">
            {muscleGroups.map((muscleGroup, index) => (
              <p
                key={index}
                className="bg-[#C2F800] px-5 py-1.5 rounded-full text-sm"
              >
                {muscleGroup}
              </p>
            ))}
          </div>
          {/* Workout Name */}
          <h4 className="text-white text-xl font-bold mb-1">{name}</h4>
          {/* Equipment */}
          <p className="text-gray-400 mb-5">{equipment}</p>
          {/* Workout Info */}

          <div className="flex items-center border-t border-gray-700 pt-4 text-gray-300">
            {/* Duration */}
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <Clock size={20} className="text-[#C2F800]" />
                <span className="text-white font-semibold">{duration}</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">Duration</p>
            </div>

            {/* Calories */}
            <div className="flex-1 text-center border-l border-gray-700">
              <div className="flex items-center justify-center gap-1.5">
                <Flame size={20} className="text-orange-500" />
                <span className="text-white font-semibold">
                  {caloriesBurned}
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">Calories</p>
            </div>

            {/* Rating */}
            <div className="flex-1 text-center border-l border-gray-700">
              <div className="flex items-center justify-center gap-1.5">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">{rating}</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
