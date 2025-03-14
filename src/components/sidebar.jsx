"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';

import { FaUser } from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi'

const Sidebar = (userrole) => {//userrole refers to whether the user is seller or buyer ?

  userrole='buyer';//right now it is dey run , it will be changes eventually
  const [showCategories, setShowCategories] = useState(false);

  const togglecategory = ()=>{
    setShowCategories(!showCategories);
  }


  return (
    <div className='hidden sm:block sm:w-64 h-full shadow-md bg-blue-600 absolute'>

      {userrole==='buyer' && (
        <div className='text-black text-base font-semibold'>
        <Link href='#' className='flex items-center p-4 hover:bg-gray-50'> <FaUser className='mr-1'/> Profile 
        </Link> 

        <Link href='#' className='block p-4 hover:bg-gray-50'>Buyer</Link>   {/*Thiss will be based on a toggle , whether the user is buyer or seller*/}
        <Link href='#' className='block p-4 hover:bg-gray-50' onClick={togglecategory}>Categories</Link>{/*For buyers only*/}
        {showCategories && (
          <div className='block pd-1 pl-10'>
            <Link href="#" className='block pd-4'>Category 1</Link>
            <Link href="#" className='block pd-4'>Category 2</Link>
            <Link href="#" className='block pd-4'>Category 3</Link>
          </div>
        )}
        <Link href='#' className='block p-4 hover:bg-gray-50'>Settings</Link>
        
      </div>
      )}

      {userrole==='seller' && (
        <div className='text-black text-base font-semibold'>


        <Link href='#' className='block p-4 hover:bg-gray-50'><FaUser /> Profile 
        </Link> 

        <Link href='#' className='block p-4 hover:bg-gray-50'>Seller</Link>   {/*Thiss will be based on a toggle , whether the user is buyer or seller*/}
        <Link href='#' className='block p-4 hover:bg-gray-50'>Sales</Link>
        <Link href='#' className='block p-4 hover:bg-gray-50'>Settings</Link>
        
      </div>
      )}

    </div>
  );
};

export default Sidebar;
