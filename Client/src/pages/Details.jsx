import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from './Layout';

export default function Details() {

    const params = useParams();
    const [post, setPost] = useState("");
    
    useEffect(()=> {
        (
            async()=> {
                const res = await axios.get(`http://localhost:5111/details/${params.postTitle}`);
                setPost(res.data);
            }
        )()
    },[])


  return (
    <Layout>
        <div className=' bg-slate-50 p-2 md:m-3 rounded-sm'>

        <h1 className=' font-semibold text-lx mb-5'>{post.title}</h1>
        <img className='rounded' src={post.postImage} alt={`image of ${post.title}`} />

        <p className='mt-5 font-serif'>{post.postDescription}</p>

        </div>
    </Layout>
  )
}
