import LatestJobCards from "./LatestJobCards";
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
function LatestJobs() {
  return (
    <div className=" max-w-7l mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-red-600">Latest & Best </span>
        Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-4">
        {randomJobs.slice(0,6).map((item, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
