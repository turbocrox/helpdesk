import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{ background: '#55D6C2' }}
    >
      <div
        className=" shadow-xl flex flex-col items-center justify-center p-10"
        style={{
          width: '1000px',
          height: '700px',
          top : '162px',
          left : '220px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // translucent center box
        }}
      >
        <h1 className="text-3xl font-bold italic text-gray-800 mb-6">Helpdesk System</h1>
         <h1 className="text-xl font-small text-gray-900 mb-6">Sign up here</h1>

       <form className="flex flex-col gap-4  text-black mx-auto">
  <input
    type="text"
    placeholder="Username"
    className="w-[400px] p-2  placeholder-black bg-white border border-gray-900 outline-none"
  />
 <input
  type="password"
  placeholder="Password"
  className="w-[400px] p-2 text-black placeholder-black bg-white border border-gray-900 outline-none"
/>
<input
  type="email"
  placeholder="Email"
  className="w-[400px] p-2 text-black placeholder-black bg-white border border-gray-900 outline-none"
/>

  <button
  type="submit"
  className="w-[200px] mx-auto justify-center bg-blue-500 text-white font-serif  py-1.5 rounded-xl hover:bg-green-600 text-lg"
>
  Sign Up
</button>
</form>
        <div className="w-[600px] flex justify-center mt-4 text-sm relative pt-3">
  <span onClick={() => navigate('/email')} className="absolute left-[100px] text-red-500 cursor-pointer pl-3">
    Forgot password
  </span>
  <span onClick={() => navigate('/login')} className="absolute right-[100px] text-gray-900 cursor-pointer pr-14">
    Sign In
  </span>
</div>

      </div>
    </div>
  );
}
