import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Newticket = () => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    date: '',
    name: '',
    department: '',
    subject: '',
    category: '',
    description: '',
    type: '',
    priority: '',
    captchaChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="ml-[250px] pt-8 min-h-screen bg-white px-8">
        <h1 className="text-3xl text-center font-[Sanchez] mb-8 mt-20">
          Create New Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ───────────────────── First four pairs ───────────────────── */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {[
              ['ticketNo', 'Ticket No.', '298px'],
              ['date', 'Date', '298px'],
              ['name', 'Name', '298px'],
              ['department', 'Department', '298px'],
            ].map(([key, label, width]) => (
              <div key={key} className="flex items-center">
                <label htmlFor={key} className="w-32 font-medium text-gray-700">
                  {label}
                </label>
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={formData[key]}
                  onChange={handleChange}
                  className="flex-1 border border-gray-100 rounded-xl px-3 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                  style={{
                    width,
                    height: '43px',
                    backgroundColor: 'rgba(196,196,196,0.63)',
                  }}
                />
              </div>
            ))}

            {/* ───────────────────── Subject full‑width ───────────────────── */}
            <div className="col-span-2 flex items-center ">
              <label htmlFor="subject" className="w-32 font-[Sanchez] text-gray-700">
                Subject:
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="      border border-gray-100 rounded-xl px-3 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                style={{
                  width: '984px',
                  height: '43px',
                  backgroundColor: 'rgba(196,196,196,0.63)',
                }}
              />
            </div>

            {/* ───────────── Category / Type / Priority vs. Description ───────────── */}
            <div className="col-span-2 flex gap-8 ">
              {/* Left column */}
              <div className="flex flex-col gap-4 w-[398px] ">
                {[
                  ['category', 'Category'],
                  ['type', 'Type'],
                  ['priority', 'Priority'],
                ].map(([key, label]) => (
                  <div key={key} className="flex items-center">
                    <label htmlFor={key} className="w-32 font-[Sanchez] text-gray-700">
                      {label}:
                    </label>
                    <input
                      id={key}
                      name={key}
                      type="text"
                      value={formData[key]}
                      onChange={handleChange}
                      className=" mt-10 border border-gray-100 rounded-xl px-3 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                      style={{
                        width: '100%',
                        height: '42px',
                        backgroundColor: 'rgba(196,196,196,0.63)',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Right column: Description with pin icon */}
              <div className="relative flex flex-col w-[560px]  ml-100 mt-6">
                <label htmlFor="description" className="font-[Sanchez] font-medium text-gray-900 mb-2">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-gray-100 rounded-xl px-3 py-2 pr-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                  style={{
                    width: '100%',
                    height: '252px',
                    backgroundColor: 'rgba(196,196,196,0.63)',
                  }}
                />
                {/* Change /pin.png to the correct file path */}
                <img
                  src="pin.png"
                  alt="attachment"
                  className="absolute bottom-3 right-3 w-[54px] h-[47] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* ───────────────────── Captcha & Submit ───────────────────── */}
     {/* Captcha + Submit aligned horizontally */}
<div className="flex items-center justify-between mt-10 w-full px-8">
  {/* Captcha Image */}
  <img
    src="/captucha.png"
    alt="captcha"
    className="w-[504px] h-[144px] bg-gray-200 rounded"
  />

  {/* Submit Button aligned to right */}
  <button
    type="submit"
    className="bg-teal-400 text-black px-10 py-3 font-semibold  font-[Sanchez] rounded hover:bg-teal-500 transition"
  >
    Submit
  </button>
</div>

        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Newticket;
