import { useState } from "react";
import { blogCategories } from "../assets/assets";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div className="relative" key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${
                menu === item && "text-white px-4 p-0.5"
              }`}
            >
              {item}
              {menu === item && (
                <div className="absolute left-0 right-0 top-0 h-7 -z-1 bg-blue-500 rounded-full"></div>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="">{/* blog cards */}</div>
    </div>
  );
};
export default BlogList;
