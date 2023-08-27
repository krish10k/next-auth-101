"use client";

import Link from "next/link";
import React from "react";
import {useRouter} from 'next/navigation'
import {Axios} from "axios";

export default function LoginPage(){
    const [ user,setUser] = React.useState({
        email:"",
        password:""
    })

const  onLogin = async()=>{
console.log(user)
}
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
<h1>Login</h1>
<hr />

<label htmlFor="email"></label>
<input type="email" 
className="p-2 border-gray-300 rounded-lg m-4"
value={user.email}
id="email"
onChange={(e)=>setUser({...user, email : e.target.value})}
placeholder="E mail"
/>

<hr />
<label htmlFor="Password"></label>
<input type="password" 
className="p-2 border-gray-300 rounded-lg m-4"
value={user.password}
id="password"
onChange={(e)=>setUser({...user, password : e.target.value})}
placeholder="Password"
/>

<button type="submit" className=" m-2 p-2 border border-blue-400 rounded-lg focus:border-grey-600" onClick={onLogin}>Login</button>
        </div>
    )
}