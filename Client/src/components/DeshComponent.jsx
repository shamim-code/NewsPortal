import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent';

export default function DeshComponent() {
  
  
  const [posts, setPost] = useState([]);

  useEffect(()=> {

      (
          async () => {
              const res = await axios.get("http://localhost:5111/post/Desh");
              setPost(res.data);
          }
      )()

  },[])

  const selectPosts = posts.slice(0,3);

return (
  <div>
    <h1 className=' text-white pl-2 uppercase mt-2 mb-2 bg-gray-800 grid grid-cols-1 justify-items-center'>Desh</h1>

    <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center ">
       
       {
          selectPosts.map((post,  index) => { 
          return <CardComponent key= {index} title={post.title} image={post.postImage} desc={post.postDescription} />})
       }
       
    </div>
  </div>
)
}
