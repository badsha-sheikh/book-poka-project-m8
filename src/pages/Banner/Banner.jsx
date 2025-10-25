import React from 'react';
import bookBannerImg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className='flex justify-between items-center mt-8 mb-8  bg-gray-100 p-6 rounded-xl shadow-md"'>
            <div className=''>
        <h4 className='font-bold text-3xl'>Books to freshen up your bookshelf</h4>
        <button className='bg-[#23BE0A] text-[#FFFFFF] p-2 rounded-[10px] w-[150px] mt-6'>View The List</button>
            </div>
            <div className=''>
                <img src={bookBannerImg} className='h-[200px] rounded-lg' alt="BookBannerImg" />
            </div>
        </div>
    );
};

export default Banner;