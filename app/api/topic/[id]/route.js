import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const PUT = async(request, {params}) => {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  try {
   await Topic.findByIdAndUpdate({_id:id}, {title, description});
    return NextResponse.json({ message: "topic is updated" });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
export const GET = async(request, {params}) => {
  const { id } = params;
  await connectMongoDB();
  try {
 const response=  await Topic.findOne({_id:id});
    return NextResponse.json({response});
  } catch (error) {
    return NextResponse.json({ error });
  }
};
