import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { GoDotFill } from "react-icons/go";

function Supply() {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    backgroundColor: "transparent", // Transparent background for the pie chart
    animationEnabled: true,
    // exportEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 75,
        // toolTipContent: "<b>{label}</b>: {y}%",
        indexLabelFontColor: "#ffffff", // White font for labels
        // indexLabelPlacement: "inside",
        dataPoints: [
          { y: 9, label: "", color: "#560BAD" },
          { y: 12, label: "", color: "#7209B7" },
          { y: 12, label: "", color: "#B5179E" },
          { y: 12, label: "", color: "#F72585" },
          { y: 35, label: "", color: "#00C5C9" },
          { y: 15, label: "", color: "#3B009A" },
        ],
      },
    ],
  };

  return (
    <div className="max-w-screen-xl p-3 lg:p-0 flex flex-col justify-center items-center  flex-wrap">
      <div className="w-full flex flex-col flex-wrap md:items-center md:pt-12 justify-center ">
        <div className="lg:w-96 w-80   rounded-lg">
          <CanvasJSChart options={options} />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="flex gap-2 items-center">
            {" "}
            <div className="border-[#E21269] border-4  w-4 rounded-md"></div>
            Team & Seed Round
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <div className="border-[#560BAD] border-4  w-4 rounded-md"></div>
            Marketing
          </div>
          <div className="flex gap-2 items-center">
            <div className="border-[#FFC300] border-4  w-4 rounded-md"></div>
            Liquity
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supply;
