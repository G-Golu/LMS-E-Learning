// // using chat gpt 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Course = ({ course }) => {
  if (!course) {
    return <p className="text-red-500">Course data is not available</p>; // ✅ Prevents crash
  }

  <Link to={`/course-detail/${course._id}`}>
   
  
   
      <Card className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl hover:scale-105">
        <div className="relative">
          <img
            src={course.courseThumbnail} // ✅ Fallback image
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
                <AvatarImage
                  src={course.creator?.photoUrl || "https://github.com/shadcn.png"}
                 alt={course.creator?.name || "Instructor"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-sm font-medium">
                {course.creator?.name || "Unknown Instructor"}
              </h1>
            </div>
            <Badge className="px-2 py-1 text-xs text-white bg-blue-600 rounded-full">
              {course.courseLevel || "N/A"}
            </Badge>
          </div>
          <div className="text-lg font-bold">
            <span>₹{course.coursePrice ?? "Free"}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  
};


// ✅ Add PropTypes Validation
Course.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string,
    courseThumbnail: PropTypes.string,
    courseTitle: PropTypes.string,
    coursePrice: PropTypes.number,
    courseLevel: PropTypes.string,
    creator: PropTypes.shape({
      name: PropTypes.string,
      photoUrl: PropTypes.string,
    }),
  }),
};

// ✅ Provide Default Props
Course.defaultProps = {
  course: {},
};

export default Course;

