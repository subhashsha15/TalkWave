import React from 'react'

const AuthLayouts = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-red-200 h-[100vh] bg-[url('/bg-wallpaper.jpg')] bg-center bg-cover">
        {children}
      </div >
    </>
  )
}

export default AuthLayouts
