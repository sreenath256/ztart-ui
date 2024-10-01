import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {blogData} from '../../components/Constant'



const Blog = () => {
    const navigate = useNavigate('');
  return (
   <>
    <div className='w-11/12 md:w-11/12 xl:w-10/12 mx-auto h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-10'>
            {blogData?.map((bdata,i)=>(
                <div  key={i} className='flex flex-col gap-2 shadow-xl shadow-gray-300 p-5 group'>
                    <img onClick={() => navigate(`/blogs/${bdata.slug}`)} className='object-cover cursor-pointer h-52 object-left-bottom xl:group-hover:scale-105 duration-300' src={bdata.blimg} alt={bdata.title} loading='lazy'/>
                    <div className='flex flex-col gap-2'>
                        <h1 className='capitalize text-xl font-PoppinsBold'>{bdata.title}</h1>
                        <p className='text-sm font-PoppinsRegular text-gray-500'>{bdata.shpara}</p>
                    </div>
                    <button onClick={() => navigate(`/blogs/${bdata.slug}`)} className=' bg-visaclr font-PoppinsMedium px-2 text-sm py-1 rounded-sm text-white w-fit'>Read more</button>
                </div>
            ))}
        </div>
    </div>
   </>
  )
}

export default Blog