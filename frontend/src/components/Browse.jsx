import React from "react";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const randomJob = [1, 5, 68];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold  text-xl my-10">
          Search Result ({randomJob.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {/* {randomJob.map((item, index) => {
            return <Job />;
          })} */}
          {randomJob.map((item) => (
            <Job />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Browse;
