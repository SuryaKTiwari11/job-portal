import { Button } from "./ui/button";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const category = [
  "IT",
  "Marketing",
  "Design",
  "HR",
  "Finance",
  "Sales",
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "DevOps",
  "UX/UI Designer",
  "Product Manager",
  "Data Scientist",
  "Data Analyst",
  "Data Engineer",
  "Data Architect",
  "Blockchain",
  "AI",
  "Cybersecurity",
  "Cloud Computing",
  "Mobile App Developer",
  "Game Developer",
  "Software Engineer",
  "Software Architect",
  "Software Tester",
];


function CategoryCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto my-16 px-4">
      <Carousel className="relative w-full">
        <CarouselContent className="flex gap-4">
          {category.map((cat, index) => (
            <CarouselItem
              className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              key={index}
            >
              <Button
                variant="outline"
                className="w-full h-full p-4 rounded-lg text-center hover:bg-blue-100"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow-md" />
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow-md" />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
