/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // Attention : in this code show redd error but not any affected its work fine . no any issue in out.
// import { Edit } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Lecture = ({lecture,courseId,index}) => {
//   const navigate = useNavigate();
//   const goToUpdateLecture = () => {
//     navigate(`${lecture._id}`);
//   };

//   return (
//     <div className="flex items-center justify-between bg-[#f7f9fa] dark:bg-[#1f1f1f] px-4 py-2 rounded-md my-2 ">
//       <h1 className="text-gray-800 ont-bold dark:text-gray-100">
//        Lecture -  {index+1}:{lecture.lectureTitle}{"  "}
//       </h1>
//       <Edit
//         onClick={goToUpdateLecture}
//         size={20}
//         className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//       />
//     </div>
//   );
// };

// export default Lecture;

// // Attention : in this code show red error but not any affected its work fine . no any issue in out.


import { Edit } from "lucide-react";

import { useNavigate } from "react-router-dom";

/// in below line 37 remove "courseId" itself from const Lecture = ({ lecture, courseId, index }) => {
const Lecture = ({ lecture, index }) => {
  const navigate = useNavigate();
  const goToUpdateLecture = () => {
    navigate(`${lecture._id}`);
  };
  return (
    <div className="flex items-center justify-between bg-[#F7F9FA] dark:bg-[#1F1F1F] px-4 py-2 rounded-md my-2">
      <h1 className="font-bold text-gray-800 dark:text-gray-100">
        Lecture - {index+1}: {lecture.lectureTitle}
      </h1>
      <Edit
        onClick={goToUpdateLecture}
        size={20}
        className="text-gray-600 cursor-pointer dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      />
    </div>
  );
};

export default Lecture;