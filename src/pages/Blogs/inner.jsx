import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {blogData} from '../../components/Constant'
import { Helmet } from 'react-helmet';

const BlogInner = () => {
    const { title } = useParams();
    const bdata = blogData.find((s) => s.slug === title);
    // blogdata.log(visadata.methods.slice(0,1));
    if (!bdata) {
      return <div>Page not found</div>;
    }

  return (
    <>
    <Helmet>
        <title>{bdata?.title}</title>
        <link rel="canonical" href={`https://ztartvisa.com/${bdata?.slug}`} />
      </Helmet>
      <div className='w-11/12 md:w-11/12 xl:w-9/12 mx-auto h-full py-10'>
        <div className='flex flex-col gap-3'>
              <h1 className='text-2xl xl:text-4xl font-PoppinsBold capitalize'>{bdata.title}</h1>
              <img className='object-cover object-left xl:object-center h-52 md:h-full xl:h-[450px] w-full' src={bdata.blimg} alt={bdata.title} loading='lazy' />
              <Link to="/contact" ><button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr w-fit my-2 font-PoppinsSemibold">apply now</button></Link>
              <div className="prose-h4:mt-2 prose-h3:mb-2 prose-a:hover:text-blue-700 prose-a:hover:underline  prose-h3:mt-3 prose-ul:mb-3 prose-ul:ml-3   flex flex-col gap-5 prose-h1:text-2xl prose-h1:font-bold prose-h1:capitalize prose-h3:text-xl prose-h3:font-PoppinsBold prose-li:list-disc  prose-h3:capitalize prose-h4:font-bold prose-p:text-base prose-ul:mt-1 prose-li:pt-1 prose-a:font-extrabold" dangerouslySetInnerHTML={{ __html: bdata.blbody }}>

              </div>
              <Link to="/" ><button className="bg-visaclr text-white h-10 xl:h-11 px-6 capitalize text-sm rounded-full hover:bg-visaclrhvr w-fit my-2 font-PoppinsSemibold">explore now</button></Link>

        </div>
      </div>
    </>
  )
}

export default BlogInner