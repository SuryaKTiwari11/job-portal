import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { CheckCircleIcon } from "lucide-react";
const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Kolkata",
      "Chennai",
      "Ahmedabad",
      "Jaipur",
      "Surat",
      "Indore",
      "Noida",
      "Gurgaon",
      "Nagpur",
      "Chandigarh",
      "Vadodara",
      "Coimbatore",
      "Kanpur",
      "Lucknow",
      "All",
    ],
  },
  {
    filterType: "Experience",
    array: [
      "0-1 years",
      "1-2 years",
      "2-3 years",
      "3-4 years",
      "4-5 years",
      "5+ years",
    ],
  },
  {
    filterType: "Job Type",
    array: ["Full Time", "Part Time", "Internship", "Contract"],
  },
  { filterType: "Salary", array: ["10k - 20k", "20k - 30k", "30k - 40k"] },
  {
    filterType: "Job Title",
    array: [
      "Software Developer",
      "Data Scientist",
      "Data Analyst",
      "Backend Developer",
      "Frontend Developer",
      "Fullstack Developer",
      "DevOps",
      "UX/UI Designer",
      "Product Manager",
      "Data Engineer",
      "Data Architect",
      "Blockchain",
      "AI",
      "Cybersecurity",
      "Cloud Computing",
    ],
  },
  {
    filterType: "Rating",
    array: [
      "4.5 - 5.0",
      "3.5 - 4.0",
      "2.5 - 3.0",
      "1.5 - 2.0",
      "0.5 - 1.0",
      "No Rating",
    ],
  },
  { filterType: "Industry", array: ["IT", "Marketing", "Design", "HR" ,"Finance","Sales"] },
  {
    filterType: "Company",
    array: ["Google", "Amazon", "Facebook", "Microsoft"],
  },
  { filterType: "Language", array: ["English", "Hindi", "French", "German"] },
  { filterType: "Remote", array: ["Yes", "No"] },
  { filterType: "Gender", array: ["Male", "Female", "Other"] },
  { filterType: "Age", array: ["18 - 25", "25 - 30", "30 - 35"] },
  { filterType: "Education", array: ["Bachelors", "Masters", "PhD", "Other"] },
  { filterType: "Job Status", array: ["Open", "Closed"] },
];
function FilterCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800">Filter Job</h1>
      <hr className="border-gray-300 my-4" />
      <div className="space-y-6">
        {filterData.map((data, index) => (
          <div
            key={index}
            className="w-full bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="font-medium text-gray-700 mb-3">
              {data.filterType}
            </h2>
            <RadioGroup>
              {data.array.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <RadioGroupItem
                    value={item}
                    id={`${data.filterType}-${idx}`}
                    className={({ checked }) =>
                      `flex items-center justify-center w-5 h-5 border-2 rounded-full transition ${
                        checked
                          ? "bg-blue-600 border-blue-600"
                          : "bg-white border-gray-300"
                      }`
                    }
                  >
                    {({ checked }) =>
                      checked && (
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      )
                    }
                  </RadioGroupItem>
                  <Label
                    htmlFor={`${data.filterType}-${idx}`}
                    className="text-sm text-gray-700"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCard;
