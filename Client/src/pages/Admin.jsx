import React, { useState } from 'react'
import axios from 'axios';
import {useFormik} from 'formik';
import Swal from 'sweetalert2'

export default function Admin() {

    const formik = useFormik({
        initialValues:{
            title: "",
            desc: "",
            category: "",
            image: "",
        },
        onSubmit: async(values)=> {
            const res = await axios.post("https://newsportal-1.onrender.com/post/create", values);

            if(res.data.postStatus=="success"){
                Swal.fire({
                    title: "Success",
                    text: "You have created a new post !",
                    icon: "success"
                  });

                  formik.values.title = "",
                  formik.values.desc = "",
                  formik.values.category = "",
                  formik.values.image = ""
            }
        }
    })
    

    return (
        <div>
            <h1 className='uppercase bg-slate-800 text-white text-center text-2xl'>SamNews Admin Panel</h1>        

            <form onSubmit={formik.handleSubmit} className='flex flex-col mt-10 p-5 m-2 rounded-md gap-3 backdrop-blur-sm bg-stone-900/70' method="post" >

                <label className='text-white mr-2'>Title</label>
                <input className='outline-none rounded-sm p-1' required onChange={formik.handleChange} value={formik.values.title} type="text" name='title' id='title' />

                <label className='text-white mr-2' >Description</label>
                <textarea required onChange={formik.handleChange} value={formik.values.desc} className='outline-none rounded-sm p-1' type="text" name='desc' id='desc' />

                <label className='text-white mr-2'>Category</label>
                {/* Updated select element to properly reflect the Formik state */}
                <select required onChange={formik.handleChange} value={formik.values.category}  name="category">
                    <option value="">Select category</option>
                    <option value="Desh">Desh</option>
                    <option value="International">International</option>
                    <option value="Business">Business</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Health">Health</option>
                    <option value="Sports">Sports</option>
                </select>

                <label className='text-white mr-2' >Image</label>
                <input onChange={formik.handleChange} value={formik.values.image}  className='outline-none rounded-sm p-1' type="text" name='image'  />


                <input className='bg-slate-400 text-white p-2 hover:bg-transparent hover:outline outline-slate-400 cursor-pointer duration-100' type="submit" value="Submit" />

            </form>
        </div>
    )
}

