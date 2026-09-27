import Link from "next/link";
import { WorkoutsType } from "../Type/type";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutCards() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Can Not Fetch Data");
  }

  const workouts: WorkoutsType[] = await res.json();

  return (
    <div className="container mx-auto mt-10 sm:mt-12 lg:mt-14 px-4 sm:px-6">
      {/* Section Heading */}
      <h3 className="text-white font-bold text-lg sm:text-xl">
        THE LIBRARY
      </h3>

      <p className="text-gray-300 text-sm sm:text-base mt-1">
        Twelve lifts covering every major muscle group.
      </p>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-5 sm:mt-6">
        {workouts.map((workout) => (
          <Link
            key={workout.id}
            href={`/WorkoutCards/${workout.id}`}
            className="block h-full"
          >
            <WorkoutCard workout={workout} />
          </Link>
        ))}
      </div>
    </div>
  );
}