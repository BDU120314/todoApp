"use client"
import { useRouter } from 'next/navigation'
import React, {useState} from 'react'
const EditTopicForm = ({id, title, description}) => {
  console.log(description)
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const router = useRouter()
    
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json", // Corrected header name
            },
            body: JSON.stringify({ newTitle, newDescription }), // Corrected method name
          });
      router.refresh()
      router.push('/')
          // Handle the response as needed
        } catch (error) {
          console.log(error);
        }
      };
      

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
    <input value={newTitle} onChange={(e) => { setNewTitle(e.target.value) }} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topics Title' />
    <input value={newDescription} onChange={(e) => { setNewDescription(e.target.value) }} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topics Description' />
    <button type='submit' className='bg-green-600 text-white font-bold px-6 py-2 w-fit'>Update Topic</button>
</form>
  )
}

export default EditTopicForm