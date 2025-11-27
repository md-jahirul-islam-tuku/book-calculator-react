import React from "react";
import { FcReading } from "react-icons/fc";

const Bookmark = ({ bookmark, readBook, readingTime }) => {
  const { id, title, image, reading_time } = bookmark;
  return (
    <div className="flex justify-between items-center mb-2 bg-white p-1 rounded shadow">
      <div className="flex items-center">
        <img className="h-10 rounded" src={image} alt="" />
        <div className="mx-2">
          <h2 className="font-semibold text-purple-600">{title}</h2>
          <small className="text-xs"><span className="font-semibold">Reading Time:</span> {reading_time} {reading_time===0||reading_time===1?'hr':'hrs'}</small>
        </div>
      </div>
      <button
        onClick={() => {
          readBook(id);
          readingTime(reading_time);
        }}
        className="bg-gray-300 p-1 rounded-full cursor-pointer hover:border-green-800 hover:border" title="Click for done !!"
      >
        <FcReading size={22} />
      </button>
    </div>
  );
};

export default Bookmark;