import { LogOut, User2 } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">
            Job
            <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex font-medium items-center gap-6 text-gray-700">
            <li className="hover:text-gray-900 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-900 transition-colors">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="hover:text-gray-900 transition-colors">
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline" className="px-4 py-2">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-800 hover:bg-purple-900 text-white px-4 py-2">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-10 h-10">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="cursor-pointer w-12 h-12">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">
                      Patel MernStack
                    </h4>
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
                    className="w-full flex items-center justify-start gap-2 mt-2 text-red-600 hover:bg-red-100"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
