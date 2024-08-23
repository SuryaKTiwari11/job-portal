import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">
            Job
            <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          {" "}
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                  <h4 className="font-semibold text-lg">Patel MernStack</h4>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-start gap-2 text-gray-700 hover:bg-gray-100"
                >
                  <User2 className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-start gap-2 mt-2"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
