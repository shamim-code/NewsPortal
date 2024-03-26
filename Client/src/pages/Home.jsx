import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import SportsComponent from "../components/SportsComponent";
import InternationalComponent from "../components/InternationalComponent";
import DeshComponent from "../components/DeshComponent";
import Loader from "../components/Loader";

export default function Home() {
  //http://localhost:5111/latest

  const baseUrl = "http://localhost:5111/latest";
  const [posts, setPosts] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(baseUrl);
      setPosts(res.data);
    })();
  }, []);

  return (
    <div>
      {
        posts.length === 0 ? <Loader /> : <Layout>
        <div className=" bg-slate-100 mx-1 md:mx-5 p-2">
          
          <br />
          {
            posts.length != 0 ? <div className="top mb-8">
            <img
              src={posts[0].postImage}
              className=" aspect-video rounded-md"
              alt=""
            />
  
            <h1 className=" font-semibold">{posts[0].title}</h1>
            <p className="w-70">{posts[0].postDescription.slice(0,150)}</p>
            <button onClick={()=> {navigation(`/details/${posts[0].title}`)}} className=" font-semibold bg-slate-200 p-2 rounded-md hover:outline outline-1 outline-blue-950 duration-100">
              See more
            </button>
          </div> : <p>Loading...</p>
          }
  
  
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {posts.map((post, index) => {
              return (
                <div className="card w-80 bg-base-100 shadow-xl h-90" key={index}>
                  <figure>
                    <img src={post.postImage} alt="img" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.postDescription.slice(0,150)}</p>
                    <div className="card-actions justify-end">
                      <button onClick={()=> {navigation(`/details/${post.title}`)}} className="btn hover:outline outline-1 outline-blue-900 duration-100">
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
  
          <DeshComponent />
          <SportsComponent />
          <InternationalComponent />
        </div>
      </Layout>
      }
    </div>
  );
}
