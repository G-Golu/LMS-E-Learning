/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Link } from "react-router-dom";

const Course = ({course}) => {
  return (
    <Link to={`/course-detail/${course._id}`}>
    <Card className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img
          src={course.courseThumbnail}
          alt="course"
          className="object-cover w-full rounded-t-lg h-36"
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="text-lg font-bold truncate hover:underline">
          {course.courseTitle}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={course.creator?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-sm font-medium">{course.creator?.name}</h1>
          </div>
          <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>
            {course.courseLevel}
          </Badge>
        </div>
        <div className="text-lg font-bold">
            <span>₹{course.coursePrice}</span>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default Course;
