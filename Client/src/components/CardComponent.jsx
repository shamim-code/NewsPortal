import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CardComponent(props) {

    const navigation = useNavigate();

  return (
    <div className='w-56 bg-base-100 p-2 rounded-md shadow-md shadow-blue-950'>
      <img src={props.image} alt=""  /> <br />
      <h1 onClick={()=> {navigation(`/details/${props.title}`)}} className=' font-semibold cursor-pointer'>{props.title}</h1>
      <p className=' font-extralight text-gray-500'>{props.desc.slice(0,100)}</p>
    </div>
  )
}
