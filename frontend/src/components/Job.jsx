import { Badge, Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

function Job() {
  return (
    <div  className=" my-4 p-6 rounded-lg shadow-lg bg-white border border-gray-200 transition-transform hover:scale-[1.02] hover:shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-600"
        >
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://dynamic.brandcrowd.com/preview/logodraft/1527c3de-563a-4222-b8fa-9a523e0dc59f/image/large.png" />
        </Avatar>
        <div>
          <h1 className="text-xl font-bold text-gray-900">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold text-lg text-gray-800">Job Title</h2>
        <p className="text-sm text-gray-600 leading-relaxed mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolores saepe dolore, facilis necessitatibus incidunt dicta ducimus
          consequatur nobis possimus.
        </p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Badge
          variant="ghost"
          className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full"
        >
          12 positions
        </Badge>
        <Badge
          variant="ghost"
          className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full"
        >
          Part-time
        </Badge>
        <Badge
          variant="ghost"
          className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full"
        >
          Full-time
        </Badge>
      </div>

      <div className="flex items-center gap-3">
        <Button className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-full transition-colors">
          Save For Later
        </Button>
        <Button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full transition-colors">
          Apply Now
        </Button>
      </div>
    </div>
  );
}

export default Job;
