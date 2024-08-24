import { Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center my-4 ">
        <span className="px-4 py-2 text-lg mx-auto rounded-full bg-gray-100 text-red-600 font-medium ">
          No. 1 Job Hunting Platform
        </span>
        <h1 className="my-2 mx-2 text-black-600 font-bold text-5xl">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-purple-600 my-2 ">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero
          temporibus dolor eaque ut!
        </p>
        <div className="flex w-[40%] shadow-xl border border-gray-200 rounded-full items-center gap-4 mx-auto my-2 px-auto py-auto">
          <input
            type="text"
            className="p-2 m-2 outline-none border-none w-full "
            placeholder="find your dream jobs"
          />
          <button className="bg-purple-600 text-white rounded-full p-2 mx-2 my-auto">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};
