import React from "react";

const PriceingCards = () => {
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mx-auto container mt-10 justify-items-center">
      
     
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <span className="badge badge-sm badge-warning text-white self-start mb-2">Basic</span>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Standard</h2>
            <span className="text-xl">$19/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
           
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Borrow 3 books/mo: Perfect for light weekend reading.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Standard Library: Access to all public tech and fiction titles.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Digital Reader: Read on any device with our web-based viewer.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Renewals: One-time renewal per book if you need more time.</span>
      </li>
    </ul>
          <div className="mt-auto pt-6">
            <button className="btn btn-outline btn-block bg-[#fa3d3b] text-white  hover:bg-white hover:text-[#fa3d3b]">Start Free</button>
          </div>
        </div>
      </div>

      
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
        <div className="card-body">
          <span className="badge badge-sm bg-[#fa3d3b] text-white self-start mb-2">Most Popular</span>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Premium</h2>
            <span className="text-xl">$29/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited Borrows: No limits. Read as much as you can handle.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Early Access: Read new releases 7 days before everyone else.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Offline Mode: Download books to read without an internet connection.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority Support: Direct line to our team for any library requests.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-Res Scans: Access to premium, high-quality technical diagrams.</span>
      </li>
      
    </ul>
          <div className="mt-auto pt-6">
            <button className="btn bg-[#fa3d3b] text-white  hover:bg-white hover:text-[#fa3d3b] btn-block">Subscribe</button>
          </div>
        </div>
      </div>

      
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <span className="badge badge-sm bg-green-500 text-white self-start mb-2">Team</span>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Family</h2>
            <span className="text-xl">$49/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>5 Sub-Accounts: Individual profiles for the whole household.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Shared Knowledge: Create shared folders for study groups or family.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced Tracking: See reading stats and history for all members.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Device Sync: Pick up exactly where you left off on any account.</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Gift Credits: Send 1 guest pass per month to a friend for free.</span>
      </li>
      
    </ul>
      
          <div className="mt-auto pt-6">
            <button className="btn btn-outline bg-[#fa3d3b] text-white   hover:bg-white hover:text-[#fa3d3b] btn-block">Contact Us</button>
          </div>
        </div>
      </div>

    </div>
  );
};



export default PriceingCards;