import React from "react";
import { FaBookmark } from "react-icons/fa";

const Book = ({ book, handleBookmark }) => {
  const { title, author, category, year, rating, description, image } =
    book;
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-4">
      <div className="w-2/5 h-50">
        <img className="w-full h-full rounded-l-lg" src={image} alt="" />
      </div>
      <div className="card-body w-3/5">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-purple-600">{title}</h2>
          <button onClick={()=>handleBookmark( book)} className="cursor-pointer">
            <FaBookmark
              title="Click for bookmark !!"
              className="text-rose-500 hover:text-green-800 transition-colors duration-200"
              size={20}
            />
          </button>
        </div>
        <h6 className="font-semibold">{author}</h6>
        <small>
          <span className="px-2 py-1 bg-slate-100 mr-1">
            <span className="font-bold">Author:</span> {category}
          </span>
          <span className="px-2 py-1 bg-slate-100 mr-1">
            <span className="font-bold">Year:</span> {year}
          </span>
          <span className="px-2 py-1 bg-slate-100 mr-1">
            <span className="font-bold">Rating:</span> {rating}
          </span>
        </small>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Book;
