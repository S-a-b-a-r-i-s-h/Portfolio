import React from 'react'

const MenuButton = ({ children }: any) => {
  return (
    <div className="text-[RGB(27,27,27)] group relative cursor-pointer overflow-hidden  text-8xl max-sm:text-5xl max-sm:leading-4 pt-5 leading-6 ">
      <span className="inline-block p-10 pt-12 max-sm:p-6 transition duration-700 ease-out group-hover:-translate-y-[180%]">
        {children}
      </span>
      <span className="absolute left-0 inline-block translate-y-[180%] uppercase rotate-12 p-10 max-sm:p-6 transition duration-700 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  )
}

export default MenuButton