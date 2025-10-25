// import React, { useEffect, useState } from 'react';
import Book from '../../components/Book/Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(()=> {
    //     fetch("bookData.json").then(res => res.json()).then(data =>{
    //         setAllBooks(data)
    //     })
    // },[])
    console.log(data)
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Books are Here</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 mb-5'>
            {
            data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
          } 
            </div> 
        </div>
    );
};

export default Books;