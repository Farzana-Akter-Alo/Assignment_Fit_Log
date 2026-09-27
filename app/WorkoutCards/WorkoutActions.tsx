"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function WorkoutActions() {
  const [activeButton, setActiveButton] = useState<"plan" | "save">("plan");
  const [isPlanAdded, setIsPlanAdded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handlePlanClick = () => {
    setActiveButton("plan");
    setIsPlanAdded(true);

    const currentCount = Number(localStorage.getItem("planCount")) || 0;

    localStorage.setItem("planCount", String(currentCount + 1));

    window.dispatchEvent(new Event("planUpdated"));

    toast.success("Added to today's plan!");
  };

  const handleSaveClick = () => {
    setActiveButton("save");
    setIsSaved(true);

    const currentCount = Number(localStorage.getItem("savedCount")) || 0;

    localStorage.setItem("savedCount", String(currentCount + 1));

    window.dispatchEvent(new Event("savedUpdated"));

    toast.success("Workout saved for later!");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Add to today's plan */}
      <button
        onClick={handlePlanClick}
        disabled={isPlanAdded}
        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
          isPlanAdded
            ? "cursor-not-allowed bg-[#C2F800] text-black opacity-70"
            : activeButton === "plan"
              ? "bg-[#C2F800] text-black"
              : "border border-gray-700 text-gray-300 hover:border-gray-500"
        }`}
      >
        <CalendarPlus size={16} />

        {isPlanAdded ? "Added to today's plan" : "Add to today's plan"}
      </button>

      {/* Save for later */}
      <button
        onClick={handleSaveClick}
        disabled={isSaved}
        className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs transition sm:text-sm ${
          isSaved
            ? "cursor-not-allowed bg-[#C2F800] text-black opacity-70"
            : activeButton === "save"
              ? "bg-[#C2F800] text-black"
              : "border border-gray-700 text-gray-300 hover:border-gray-500"
        }`}
      >
        <Bookmark size={16} />

        {isSaved ? "Saved for later" : "Save for later"}
      </button>
    </div>
  );
}
