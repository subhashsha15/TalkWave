import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios'
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";
import { motion } from 'framer-motion';

const CheckEmailPage = () => {
  const [data, setData] = useState({
    email: "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/email`

    try {
      const response = await axios.post(URL, data)

      toast.success(response.data.message)

      if (response.data.success) {
        setData({
          email: "",
        })
        navigate('/password', {
          state: response?.data?.data
        })
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }


  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -500 },
        show: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 2, ease: "easeOut" }}
      className='mt-0 w-full'
    >
      <div className='w-full max-w-md  rounded overflow-hidden p-4 mx-auto backdrop-blur-sm bg-white/30'>
        <div className='w-fit mx-auto mb-2'>
          <img src="/logo-icon.png" alt="" className='size-24' />
        </div>
        <h1 className='text-2xl mt-10'>Welcome to Chat app!</h1>
        <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='enter your email'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <button
            className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
          >
            Let's Go
          </button>
        </form>
        <p className='my-3 text-center'>New User ? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link></p>
      </div>
    </motion.div>
  )
}

export default CheckEmailPage
