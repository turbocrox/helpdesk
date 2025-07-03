import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Email() {
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
       
         <h2 className="text-xl font-small text-gray-900 mb-1">Don't worry ,Enter your  Email  below  and  we  will </h2> 
            <h2 className="text-xl font-small text-gray-900 mb-9">send  you a  link  to  change password</h2>


       <form className="flex flex-col gap-4  text-black mx-auto">
  
<input
  type="email"
  placeholder="Email"
  className="w-[500px] p-2 text-black placeholder-black bg-white border border-gray-900 outline-none mb-6"
/>

  <button
  type="submit"
  className="w-[200px] mx-auto justify-center bg-green-500 text-white font-serif  py-1.5 rounded-xl hover:bg-green-600 text-lg"
>
  Submit
</button>
<button onClick={() => navigate('/login')}
  type="button"
  className="w-[200px] mx-auto justify-center bg-blue-500 text-white font-serif  py-1.5 rounded-xl hover:bg-green-600 text-lg"
>
  Sign In
</button>
</form>
        


      </div>
    </div>
  );
}
