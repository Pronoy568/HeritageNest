/* eslint-disable react/prop-types */
import { useState } from "react";

const RangeSlider = ({ min, max, step }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="w-11/12">
      <div className="relative w-full">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          step={step}
          onChange={handleMinChange}
          className="absolute pointer-events-none appearance-none h-2 w-full opacity-0"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          step={step}
          onChange={handleMaxChange}
          className="absolute pointer-events-none appearance-none h-2 w-full opacity-0"
        />
        <div className="relative h-6 bg-white rounded">
          <div
            className="absolute h-6 bg-[#EEEEEE] rounded"
            style={{
              left: `${((minValue - min) / (max - min)) * 100}%`,
              right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
            }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-[#EE6611] rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{ left: `${((minValue - min) / (max - min)) * 100}%` }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-[#EE6611] rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{ left: `${((maxValue - min) / (max - min)) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-inter text-[#252323]">$ {minValue}k</span>
        <span className="font-inter text-[#252323]">$ {maxValue}k</span>
      </div>
    </div>
  );
};

export default RangeSlider;
