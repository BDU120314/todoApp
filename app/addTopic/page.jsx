
"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
    const AddTopic = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()
    const submitForm = async(event) => { 
        event.preventDefault()

        if (title ===''||description ==='' )  {
            alert("all field required, please fill it")
        }
        try {
            const response = await fetch("http://localhost:3000/api/topic", {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({title, description})
            })

            if (response.ok) {
                router.push("/")
                router.refresh()
            }else{
                throw Error("faild to create topic")
            }

        } catch (error) {
            console.log(error)
        }

}
        

  return (
    <form className='flex flex-col gap-5' onSubmit={submitForm}>
        <input onChange={(e) => { setTitle(e.target.value) }} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topics Title' />
        <input onChange={(e) => { setDescription(e.target.value) }} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topics Description' />
        <button type='submit' className='bg-green-600 text-white font-bold px-6 py-2 w-fit'>Add Topic</button>
    </form>
  )
}

export default AddTopic