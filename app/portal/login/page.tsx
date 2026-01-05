'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Win7Login() {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // SIMULATE "Welcome" SPINNER
    setTimeout(() => {
      if (empId.toUpperCase() === 'NX-774') {
        router.push('/portal/mail'); // The Secret Page
      } else {
        setLoading(false);
        setError('The user name or password is incorrect.');
        setPassword(''); // Clear password on fail
      }
    }, 2000);
  };

  const handleShutdown = () => {
    // Go back to the "Happy" site
    router.push('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-sans text-white">
      
      {/* 1. WINDOWS 7 BACKGROUND (CSS Simulation of the Blue Swirls) */}
      <div className="absolute inset-0 z-0 bg-[#0f3e66]">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#3b98d6_0%,#0f3e66_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        {/* Decorative Swirls (CSS Shapes) */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4eaae6] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#1c6fa6] rounded-full blur-[80px] opacity-30"></div>
      </div>

      {/* 2. LOGIN CENTER FRAME */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        
        {/* USER AVATAR FRAME */}
        <div className="w-48 h-48 bg-white/10 border-[3px] border-white/30 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
          {/* Silhoutte Image */}
           <div className="w-40 h-40 bg-gradient-to-b from-[#bcdbe6] to-[#7fa9c2] rounded flex items-end justify-center overflow-hidden border border-white/50">
             <div className="w-24 h-24 bg-white/80 rounded-full mb-[-10px] shadow-sm"></div>
             <div className="absolute top-8 w-16 h-16 bg-white/80 rounded-full shadow-sm"></div>
           </div>
           {/* Glass Shine */}
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
        </div>

        {/* LOADING SPINNER STATE */}
        {loading ? (
          <div className="flex flex-col items-center gap-2 animate-pulse">
            <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            <p className="text-shadow text-lg font-bold">Welcome</p>
          </div>
        ) : (
          /* LOGIN FORM STATE */
          <form onSubmit={handleLogin} className="flex flex-col items-center gap-3 w-64">
            
            {/* Display Name */}
            <h1 className="text-2xl font-normal drop-shadow-md mb-2">NexLife Admin</h1>
            
            {/* INPUT 1: Employee ID */}
            <input 
              type="text" 
              placeholder="Employee ID" 
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              className="w-full p-2 text-black text-sm rounded-[3px] border border-[#3e6f91] shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] focus:ring-2 ring-[#61c9ff] outline-none"
              autoFocus
            />

            {/* INPUT 2: Password + Submit Button */}
            <div className="flex gap-1 w-full relative">
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 text-black text-sm rounded-[3px] border border-[#3e6f91] shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] focus:ring-2 ring-[#61c9ff] outline-none"
              />
              
              {/* THE BLUE ARROW BUTTON */}
              <button 
                type="submit"
                className="absolute right-[-35px] top-0 h-full w-8 bg-gradient-to-b from-[#6bb8e8] to-[#2c77ad] border border-[#205a88] rounded-[3px] flex items-center justify-center hover:brightness-110 active:scale-95 shadow-md"
              >
                <span className="text-white font-bold">→</span>
              </button>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-xs text-yellow-200 mt-2 text-center drop-shadow-md bg-black/20 p-1 rounded">
                {error}
              </p>
            )}

            <p className="text-xs text-[#b8d6ed] mt-2 hover:underline cursor-pointer">
              Reset Password...
            </p>
          </form>
        )}

      </div>

      {/* 3. FOOTER LOGO */}
      <div className="absolute bottom-12 z-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight drop-shadow-lg opacity-80">
          NexLife <span className="font-light">OS Enterprise</span>
        </h2>
        <p className="text-[10px] text-[#8cbcdb]">© 2005 Microsoft Corporation. All rights reserved.</p>
      </div>

      {/* 4. SHUTDOWN BUTTON (The "Back" Link) */}
      <div className="absolute bottom-8 right-8 z-20">
        <button 
          onClick={handleShutdown}
          className="group flex items-center gap-2 bg-[#d12f2f] hover:bg-[#ff4d4d] border border-[#8a1c1c] px-3 py-1 rounded-[3px] shadow-lg transition-all active:translate-y-[1px]"
        >
          <div className="w-4 h-4 rounded-full border-2 border-white/80 relative flex items-center justify-center">
             <div className="w-[2px] h-2 bg-white/80 absolute top-[-3px]"></div>
          </div>
          <span className="text-xs font-bold drop-shadow-md">Shut down</span>
        </button>
      </div>

    </div>
  );
}