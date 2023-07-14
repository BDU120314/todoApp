"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";

    const RemoveBtn = ({id}) => {
    const router = useRouter()
    const deleteTopics = async () => {
    const confirmed = confirm("are you sure to delete")
    
        if (confirmed) {
          const res= await fetch(`http://localhost:3000/api/topic?id=${id}`, {
            method:"DELETE"
        }) 
        if(res.ok){
            router.refresh()
            }
        }
        
  }
  return (
    <button onClick={deleteTopics} className='text-red-400'>
     <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBtn