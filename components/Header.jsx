import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'> 
    <Link className="text-white font-bold" href={"/"}>Todo</Link>
    <Link className='bg-white px-2' href={"/addTopic"}>Add Task</Link>
    </nav>
  )
}

export default Header