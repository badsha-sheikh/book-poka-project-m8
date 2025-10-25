import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, image, rating, category,tags,publisher ,yearOfPublishing,bookId} = singleBook;
  return (
   <Link to={`/bookDetails/${bookId}`}> 
    <div className="card bg-base-100 shadow-sm p-4 w-96">
      <figure className=" bg-gray-200  rounded-lg  w-2/3 mx-auto">
        <img className="p-4 h-[185px]" src={image} alt="Books" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-3">
            {tags.map(tag=> <button className="text-green-600 bg-gray-200 p-2 rounded-lg font-semibold">{tag} </button>)}
        </div>
      <div className="flex justify-between  mt-3">
          <h2 className="card-title">
          {bookName}  </h2>
          <div className="badge badge-secondary">{yearOfPublishing}</div>
      </div>
       
        <p className="font-semibold"> By : <span className="text-[green]"> {publisher}</span> </p>
     
        <div className="card-actions justify-between mt-4">
          <div className="badge text-[20px]">{category}</div>
          <div className=" badge  text-[20px]">
            {rating} <Star></Star>
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Book;
