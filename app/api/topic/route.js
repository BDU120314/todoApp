import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export const POST =async(request) => { 
    const {title, description} = await request.json()
    await connectMongoDB()
    await Topic.create({title, description})
    return NextResponse.json({message: "topic is created"}, {status:201})
 }

 export const GET = async(request) => { 
    await connectMongoDB()
    const response=  await Topic.find().sort({ updatedAt: -1 })
    return NextResponse.json({response})
  }

 export const DELETE = async(request) => { 
    await connectMongoDB()
    const id = request.nextUrl.searchParams.get("id")
    const response=  await Topic.findOneAndDelete(id)
    return NextResponse.json({response}, {message: "topic is delete"})
  }