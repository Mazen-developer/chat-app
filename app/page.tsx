"use client";

import { useState ,useEffect } from "react";
type UserType = {
  id: number;
  name: string;
  // أي خصائص تانية
};
export default function AddUser() {

const [messages, setmessage] = useState<UserType[]>([]);
  const [name, setName] = useState("");

async function addUser() {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const newUser = await res.json();

  // ضيفه فوراً في الواجهة
setmessage((prev) => [newUser, ...prev]);

  setName("");
}

useEffect(()=>{
getUsers()
})
async function getUsers(){
const res =  await fetch("/api/users")
const data = await res.json()
setmessage(data)
}
  return (
    <div className="flex bg-amber-100/70 flex-col justify-end items-center h-screen w-full">
      
<div className="">
{messages.map((message:any)=>(
<div  className="bg-amber-300 rounded-2xl my-3 px-2 w-fit" key={message._id}>
<p>{message.name}</p>
</div>
))}
<div className=" my-2">
      <input
      className="bg-white rounded-2xl px-2 shadow-sm"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
                                   
      <button className="bg-amber-100 rounded-2xl px-4" onClick={ async()=>{
       await addUser()
      }}>send</button>
</div>
</div>
    </div>
  );
}
