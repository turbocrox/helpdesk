import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      {/* Main content wrapper */}
      <div className="ml-[250px] flex flex-col items-center pt-8 min-h-screen bg-white">
        <h1 className="text-3xl text-black font-[Sanchez] mb-10 mt-20">Dashboard</h1>

        {/* Four dashboard cards */}
        <div className="flex gap-6">
          {/* Total Tickets */}
          <div className="w-[255px] h-[280px] bg-blue-500 text-white rounded-[20px] shadow-[4px_4px_2px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
            <h2 className="text-lg  text-black font-[Sanchez] pb-[30px]">Total Tickets</h2>
            <p
              className="text-[100px] pt-10 font-[Sanchez]"
              style={{ color: 'rgba(5, 56, 107, 1)' }}
            >
              12
            </p>
          </div>

          {/* Total Solved */}
          <div className="w-[255px] h-[280px] bg-green-400 text-white rounded-[20px] shadow-[4px_4px_2px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
            <h2 className="text-lg  text-black font-[Sanchez] pb-[30px]">Total Solved</h2>
            <p
              className="text-[100px] pt-10 font-[Sanchez]"
              style={{ color: 'rgba(5, 56, 107, 1)' }}
            >
              8
            </p>
          </div>

          {/* Total Awaiting Approval */}
          <div className="w-[255px] h-[280px] bg-red-400 text-white rounded-[20px] shadow-[4px_4px_2px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
            <h2 className="text-lg font-[Sanchez] text-black mb-2 text-center pb-[20px] ">
              Total Awaiting <br /> Approval
            </h2>
            <p
              className="text-[100px] pt-6 font-[Sanchez]"
              style={{ color: 'rgba(5, 56, 107, 1)' }}
            >
              2
            </p>
          </div>

          {/* Total in Progress */}
          <div className="w-[255px] h-[280px] bg-yellow-200 text-white rounded-[20px] shadow-[4px_4px_2px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center">
            <h2 className="text-lg text-black font-[Sanchez] pb-[20px] ">
              Total in <br /> Progress
            </h2>
            <p
              className="text-[100px] pt-10 font-[Sanchez]"
              style={{ color: 'rgba(5, 56, 107, 1)' }}
            >
              2
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
