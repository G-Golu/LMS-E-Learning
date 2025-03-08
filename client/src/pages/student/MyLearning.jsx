import Course from "./Course";

function MyLearning() {
  const isLoading = false;
  const MyLearningCourses = [];
  return (
    <div className="max-w-4xl px-4 mx-auto my-24 md:px-0">
      <h1 className="text-2xl font-bold">My LEARNING</h1>
      <div className="my-5">
        {
        isLoading ? (
          <MyLearningSkelton />
        ) : MyLearningCourses.length === 0 ? (
          <p>You are not enrolled in any course.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {
            [1, 2].map((course, index) =>
              <Course key={index} course={course} />)
            }
          </div>
        )
        }
      </div>
    </div>
  );
}

export default MyLearning;

// Skelton component for loading state
const MyLearningSkelton = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="h-40 bg-gray-300 rounded-lg dark:bg-gray-700 animate-pulse"
      >
        {" "}
      </div>
    ))}
  </div>
);
