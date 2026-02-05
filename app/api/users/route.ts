import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import User from "@/models/User";


export async function POST (request :Request){
  await connectDB()
  const body =await request.json()
  const name = body
  
  if (!name){
    return NextResponse.json(
   { error:"name  reqiured"},
   {status:400}
    )
  }
  const user = await User.create(name)
return NextResponse.json(user,{status:201});
}
export async function GET(){
  await connectDB();
  const users =await User.find()
  return NextResponse.json(users,{status :201})

}