import React from "react";

const Book = ({ book }) => {
  const { id, title, author, category, year, rating, description, image } =
    book;
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-4">
      <figure className="h-88">
        <img className="w-full" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-purple-600">{title}</h2>
        <h6 className="font-semibold">{author}</h6>
        <small>Author: {category}, Year: {year}, Rating: {rating}</small>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn">X</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
