"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
const router = useRouter();
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setBtnDisabled(false);
    }else{ setBtnDisabled(true);}
   
  }, [user]);
  const onLogin = async () => {
    try {
        setLoading(true)
        const res = await axios.post('/api/users/login', user)
        console.log(res.data)

        // if (res?.status == 201){
            router.push("/profile")
        // }

        
    } catch (error) {
        console.log("error", error)
    }finally{
        setLoading(false)
    }

  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>Login</h1>
      <hr />

      <label htmlFor="email"></label>
      <input
        type="email"
        className="p-2 border-gray-300 rounded-lg m-4"
        value={user.email}
        id="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="E mail"
      />

      <hr />
      <label htmlFor="Password"></label>
      <input
        type="password"
        className="p-2 border-gray-300 rounded-lg m-4"
        value={user.password}
        id="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />

      <button
        type="submit"
        className=" m-2 p-2 border border-blue-400 rounded-lg focus:border-grey-600"
        disabled={btnDisabled}
        onClick={onLogin}
      >
        {loading? "Loading...":"Login"}
      </button>
    </div>
  );
}
