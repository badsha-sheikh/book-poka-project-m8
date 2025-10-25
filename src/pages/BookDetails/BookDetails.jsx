import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);

  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image, category, author,totalPages , rating,publisher } = singleBook;
  return (
    <div>
       <div className="card card-side max-w-2/4 mx-auto mt-5 mb-5 bg-base-100 shadow-sm">
  <figure>
    <img
    className="h-[250px] "
      src={image}
      alt="Movie" />
  </figure>
  <div className="card-body flex flex-col justify-between">
  <div>
    <h2 className="card-title">{bookName}</h2>
    <p className="font-semibold">Author: {author}</p>
    <p className="text-[green]">Category: {category}</p>
   <p className="font-semibold">Total Pages: {totalPages} </p>
   <p className="text-[green]">Rating: {rating}</p>
   <p className="font-semibold text-[red]">Publisher: {publisher}</p>
  </div>

  <div className="card-actions justify-between mt-auto">
    <button className="btn btn-primary">Read</button>
    <button className="btn btn-primary">WishList</button>
  </div>
</div>

</div>
    </div>
  );
};

export default BookDetails;
