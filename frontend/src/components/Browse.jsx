import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
const randomJobs = [1, 2, 3];
function Browse() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-5 ">
        <h1 className="text-3xl font-bold py-2 py-2 ">Search Results ({randomJobs.length})</h1>
        {randomJobs.map((item, index) => {
          return <Job key={index} item={item} index={index} type="browse" />;
        })}
      </div>
    </div>
  );
}

export default Browse;
