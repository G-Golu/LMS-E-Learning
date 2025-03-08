import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeInfo, Lock, PlayCircle } from "lucide-react";

import Course from "./Course";

const CourseDetail = () => {
  return (
    <div className="mt-20 space-y-5">
      <div className="bg-[#2D2F31] text-white">
        <div className="flex flex-col gap-2 px-4 py-8 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold md:text-3xl">Course Title</h1>
          <p className="text-base md:text-lg">Course Sub-title</p>
          <p>
            Created By{" "}
            <span className="text-[#c0c4fc] underline italic">Golu Kumar</span>{" "}
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfo size={16} />
            <p>Last Updated 08-03-2025</p>
          </div>
          <p>Student Enrolled: 10</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 px-4 mx-auto my-5 lg:flex-row max-w-7xl md:px-8">
        <div className="w-full space-y-5 lg:w-1/2">
          <h1 className="text-xl font-bold md:text-2xl">Description</h1>
          <p className="text-sm">
            This is comperhensive course is desigined for developper who want to
            learn how to build robust, production ready web applictions using
            Next.Js. You will master server-side rendiring, static site
            generation, API routes , dynamic routing, static and much more
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>4 lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {Course.lectures.map((lecture, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span>
                    {true ? <PlayCircle size={14} /> : <Lock size={14} />}
                    </span>
                  <p>{lecture.lectureTitle}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
