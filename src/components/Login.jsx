import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const hardcodedEmail = 'a@b.c';
  const hardcodedPassword = '123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === hardcodedEmail && password === hardcodedPassword) {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

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
          top: '162px',
          left: '220px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // translucent center box
        }}
      >
        <h1 className="text-3xl font-bold italic text-gray-800 mb-8">Helpdesk System</h1>

        <form className="flex flex-col gap-4  text-black mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-[400px] p-2  placeholder-black bg-white border border-gray-900 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[400px] p-2 text-black placeholder-black bg-white border border-gray-900 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-[200px] mx-auto justify-center bg-green-500 text-white font-serif  py-1.5 rounded-xl hover:bg-green-600 text-lg"
          >
            Sign In
          </button>
        </form>
        {error && (
          <p className="text-red-600 mt-2 text-center font-semibold">{error}</p>
        )}
        <div className="w-[600px] flex justify-center mt-4 text-sm relative pt-3">
          <span onClick={() => navigate('/email')} className="absolute left-[100px] text-red-500 cursor-pointer pl-3">
            Forgot password
          </span>
          <Link to="/signin" className="absolute right-[100px] text-gray-900 cursor-pointer pr-14">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
