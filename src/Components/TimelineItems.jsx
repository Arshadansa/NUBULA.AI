import React from "react";
import { FaRegCircle } from "react-icons/fa";

const TimelineItem = ({ title, date, description, isLast, count3 }) => {
  return (
    <li className="flex flex-col  lg:justify-center  ">
      <div className="flex items-center   ">
        <div className={`border-[#0aabad] border-[5px] rounded-full h-8 w-8 flex items-center justify-center ${count3 ?"mt-3":""}`}>
        </div>
        {<div className={` block h-1 ml-1 w-40 bg-[#0aabad] ${count3 ?"mt-3":""}`}></div>}
      </div>
      <div className={`flex flex-col lg:flex-wrap  font-thin mt-3 items-start`}>
        <p className="text-sm flex items-center gap-2  text-white">
          <FaRegCircle  className="text-[#0aabad]"/> {title}
        </p>
        <p className="text-sm flex items-center gap-2  text-white">
          <FaRegCircle className="text-[#0aabad]" /> {date}
        </p>
        <p className="text-sm flex items-center gap-2  text-white">
          <FaRegCircle className="text-[#0aabad]"/> {description}
        </p>
        {count3 && (
          <p className="text-sm flex items-center gap-2  text-white">
            <FaRegCircle className="text-[#0aabad]"/> {count3}
          </p>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;
