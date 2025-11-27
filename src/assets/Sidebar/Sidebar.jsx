import React, { useState } from "react";
import Bookmark from "./Bookmark";

const Sidebar = ({ books, readBook }) => {
  const [time, setTime] = useState(0);
  const readingTime = (readTime) => {
    setTime(time + readTime);
  };
  return (
    <div>
      <div className="p-4 text-center">
        <h1 className="font-semibold">Total reading time: {time} {time===0||time===1?'hr':'hrs'}</h1>
      </div>
      <hr className="border border-gray-300" />
      <div className="p-4">
        <h1 className="font-semibold mb-4">Total bookmark: {books.length}</h1>
        {books.map((bookmark) => (
          <Bookmark bookmark={bookmark} readBook={readBook} readingTime={readingTime}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
