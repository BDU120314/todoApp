import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi";

const getAllTopics = async() => { 
    try {
        const res = await fetch("http://localhost:3000/api/topic", {cache:"no-store"})
        if (!res.ok) {
            throw new Error("failed to fetch topics")
        }
        return res.json()
    } catch (error) {
        console.log("loading error", error)
    }
 }

const TopicsList =async () => {
  const {response} = await getAllTopics()
  console.log(response)
  return (
    <>
{response.map((topic) => {
    return (
        <div key={topic._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5'>
        <div>
            <h1 className='font-bold text-2xl'>{topic.title}</h1>
            <div>
               {topic.description}
            </div>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <RemoveBtn  id = {topic._id}/>
            <Link href={`/editTopic/${topic._id}`}><HiPencilAlt /></Link>
        </div>
    </div> 
    )
 })}

    </>
  )
}

export default TopicsList