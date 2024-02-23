"use client";

import Link from "next/link";
import trainingPrograms from "../data/gymCourses.json"; // Assuming the JSON file is in the same directory
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  description: string;
  title: string;
  slug: string;
  instructor: string;
  isFeatured: boolean;
  image: string;
  fees: number;
}

function FeaturedPrograms() {
  const featuredPrograms = trainingPrograms.programs.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl text-teal-400 italic tracking-tight font-semibold uppercase">
          Find Your Perfect Fitness Program
        </h2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredPrograms.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/programs/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          className="text-teal-400 font-semibold text-lg border-b-2 border-teal-400 hover:text-white hover:border-white transition duration-300"
          href="./TrainingPrograms"
        >
          View All Programs
        </Link>
      </div>
    </div>
  );
}

export default FeaturedPrograms;
