import { WorkoutsType } from "@/app/Type/type";
import { CalendarPlus, Bookmark } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "../WorkoutActions";

interface WorkoutCardDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutCardDetails({
  params,
}: WorkoutCardDetailsProps) {
  const { id } = await params;

  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Can Not Fetch Data");
  }

  const workouts: WorkoutsType[] = await res.json();

  const workout = workouts.find((workout) => workout.id === Number(id));

  if (!workout) {
    notFound();
  }

  const {
    image,
    muscleGroups,
    name,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <div className="container mx-auto mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 pb-10 sm:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Left - Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden rounded-xl">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Right - Details */}
        <div className="min-w-0">
          {/* Title */}
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight">
            {name}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-6 mt-2 max-w-xl">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mt-4">
            {muscleGroups.map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="bg-[#C2F800] text-black px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold"
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          {/* Workout Information */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl mt-5 overflow-hidden">
            {/* Equipment */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5 border-b border-gray-800">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Equipment
              </span>

              <span className="text-white text-xs sm:text-sm text-right">
                {equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5 border-b border-gray-800">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Difficulty
              </span>

              <span className="text-white text-xs sm:text-sm text-right">
                {difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5 border-b border-gray-800">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Sets
              </span>

              <span className="text-white text-xs sm:text-sm">{sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5 border-b border-gray-800">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Reps
              </span>

              <span className="text-white text-xs sm:text-sm">{reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5 border-b border-gray-800">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Duration
              </span>

              <span className="text-white text-xs sm:text-sm">
                {duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5 border-b border-gray-800">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Calories
              </span>

              <span className="text-white text-xs sm:text-sm">
                {caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:py-3.5">
              <span className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase">
                Rating
              </span>

              <span className="text-white text-xs sm:text-sm">{rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-5 sm:mt-6">
            <h2 className="text-white text-sm sm:text-base font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2.5 sm:space-y-3">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-2.5 sm:gap-3 text-gray-400 text-xs sm:text-sm leading-5"
                >
                  <span className="text-gray-500 shrink-0">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <WorkoutActions/>
        </div>
      </div>
    </div>
  );
}
