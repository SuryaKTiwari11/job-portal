import { Badge } from "./ui/badge";

function LatestJobCards() {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Company Name</h1>
        <p className="text-gray-500 text-sm">India</p>
      </div>
      <div className="mb-4">
        <h1 className="font-semibold text-xl text-gray-800">Job Title</h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Badge
          className="bg-gray-100 text-red-600 font-bold px-3 py-1 rounded-md border border-gray-300"
          variant="ghost"
        >
          12 Positions
        </Badge>
        <Badge
          className="bg-gray-100 text-blue-800 font-bold px-3 py-1 rounded-md border border-gray-300"
          variant="ghost"
        >
          Part-time
        </Badge>
        <Badge
          className="bg-gray-100 text-green-800 font-bold px-3 py-1 rounded-md border border-gray-300"
          variant="ghost"
        >
          24 LPA
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
