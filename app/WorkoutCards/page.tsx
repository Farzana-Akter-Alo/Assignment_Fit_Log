import { WorkoutsType } from "../Type/type";
import WorkoutCard from "./WorkoutCard/page";

export default async function WorkoutCards() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Can Not Fetch Data");
  }
  const workouts: WorkoutsType[] = await res.json();
  return (
    <div className="container mx-auto mt-14">
      <h3 className="text-white font-bold text-xl">THE LIBRARY</h3>
      <p className="text-gray-300">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-3 gap-4 border mt-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
