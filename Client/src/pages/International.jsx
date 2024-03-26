import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function International() {

  const [posts, setPosts] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://newsportal-1.onrender.com/post/International");

      setPosts(res.data);
    })();
  }, []);


  return (
    <div>
      {posts.length === 0 ? (
        <Layout> <Loader /> </Layout>
      ) : (
        <Layout>
          <div className="m-2 grid grid-cols-2 justify-items-center items-center">
            {posts[0] ? (
              <div
                style={{
                  backgroundImage: `url(${posts[0].postImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-60 w-60 sm:w-[350px]  md:h-72 md:w-[400px] lg:w-[750px] lg:h-[380px] relative rounded-md shadow-md shadow-black"
              >
                <div className=" absolute backdrop-blur-sm bg-white/30 top-36 md:top-48 lg:top-72 h-24 hover:backdrop-blur-md w-full">
                  <p className=" font-semibold cursor-pointer">
                    {posts[0].title.slice(0, 80)}
                  </p>
                  <p className=" truncate">{posts[0].postDescription}</p>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="grid grid-cols-1 gap-5">
              {posts[1] ? (
                <div
                  style={{
                    backgroundImage: `url(${posts[0].postImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="h-44 w-60 sm:w-[300px] md:w-80 lg:w-[500px] relative rounded-md shadow-md shadow-black"
                >
                  <div className=" absolute backdrop-blur-sm bg-white/30 top-24 h-20 w-full">
                    <p className=" font-semibold hover:backdrop-blur-md h-full cursor-pointer">
                      {posts[0].title.slice(0, 80)}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {posts[2] ? (
                <div
                  style={{
                    backgroundImage: `url(${posts[0].postImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="h-44 w-60 sm:w-[300px] md:w-80 lg:w-[500px] relative rounded-md shadow-md shadow-black"
                >
                  <div className=" absolute backdrop-blur-sm bg-white/30 top-24 h-20 w-full">
                    <p className=" font-semibold hover:backdrop-blur-md h-full cursor-pointer">
                      {posts[0].title.slice(0, 80)}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="m-5 grid grid-cols-1 gap-4">
            <h1 className=" bg-slate-800 text-white uppercase text-center">
              International news
            </h1>
            {posts.slice(3, 8).map((post, index) => {
              return (
                <div key={index}
                  style={{
                    backgroundImage: `url(${posts[0].postImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="h-44 w-60 sm:w-[300px] md:w-80 lg:w-[500px] relative rounded-md shadow-md shadow-black"
                >
                  <div className=" absolute backdrop-blur-sm bg-white/30 top-24 h-20 w-full">
                    <p
                      onClick={() => {
                        navigation(`/details/${post.title}`);
                      }}
                      className=" font-semibold hover:backdrop-blur-md h-full cursor-pointer"
                    >
                      {posts[0].title.slice(0, 80)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Layout>
      )}
    </div>
  );
}
