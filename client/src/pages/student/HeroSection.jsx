// import { Button } from "@/components/ui/button";


// const HeroSection = () => {
//   return (
//     <div className="relative px-4 py-24 text-center bg-indigo-600 bg-gradient-to-r from-blue-500 to dark:from-gray-800 dark:text-center">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="mb-4 text-4xl font-bold text-white">
//           Find the Best Courses for you
//         </h1>
//         <p className="mb-8 text-gray-200 dark:text-gray-400">
//           Discover, Learn, and Upskill with our wide range of courses
//         </p>

//         <form action="" className="flex items-center max-w-xl mx-auto mb-6 overflow-hidden bg-white rounded-full shadow-lg dark:bg-gray-800">
//           <input
//             type="text"
//             placeholder="Search Courses"
//             className="flex-grow px-6 py-3 text-gray-900 placeholder-gray-400 border-none focus-visible:ring-0 dark:text-gray-100 dark:placeholder-gray-500"
//           />
//           <Button className="px-6 py-3 text-white bg-blue-600 rounded-r-full hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">Search</Button>
//         </form>
//         <Button className="text-blue-600 bg-white rounded-full dark:bg-gray-800 hover:bg-gray-200">Explore Courses</Button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if(searchQuery.trim() !== ""){
      navigate(`/course/search?query=${searchQuery}`)
    }
    setSearchQuery("");
  }

  return (
    <div className="relative px-4 py-24 text-center bg-indigo-600 bg-gradient-to-r from-blue-500 to dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Find the Best Courses for You
        </h1>
        <p className="mb-8 text-gray-200 dark:text-gray-400">
          Discover, Learn, and Upskill with our wide range of courses
        </p>

        <form onSubmit={searchHandler} className="flex items-center max-w-xl mx-auto mb-6 overflow-hidden bg-white rounded-full shadow-lg dark:bg-gray-800">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Courses"
            className="flex-grow px-6 py-3 text-gray-900 placeholder-gray-400 border-none focus-visible:ring-0 dark:text-gray-100 dark:placeholder-gray-500"
          />
          <Button type="submit" className="px-6 py-3 text-white bg-blue-600 rounded-r-full dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800">Search</Button>
        </form>
       <Button onClick={()=> navigate(`/course/search?query`)} className="text-blue-600 bg-white rounded-full dark:bg-gray-800 hover:bg-gray-200">Explore Courses</Button>
      </div>
    </div>
  );
};

export default HeroSection;





