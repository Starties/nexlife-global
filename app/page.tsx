'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function NexLifeHome() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      
      {/* MAIN CONTAINER */}
      <div className="w-[960px] vista-glass flex flex-col relative overflow-hidden bg-white">
        
        {/* --- 1. LEGISLATIVE PANIC BANNER --- */}
        <div className="bg-[#fff9e6] border-b border-[#e6c300] text-[#998a00] px-4 py-2 text-xs flex justify-center items-center gap-2 font-bold animate-pulse">
          <span>⚠️ URGENT NOTICE:</span>
          <span>The "Preservation of Life Act" vote is scheduled for Friday. Upload slots are 98% full.</span>
          <Link href="/news/protest" className="underline hover:text-red-600">Read Press Release &raquo;</Link>
        </div>

        {/* --- 2. TOP LINKS & LOGIN --- */}
        <div className="bg-[#e4f0fc] px-4 py-1 flex justify-end gap-4 text-[11px] border-b border-[#a0b6cc] text-[#003399] font-sans">
          <Link href="/" className="hover:underline">Global Site</Link>
          <Link href="/contact" className="hover:underline">Support</Link>
          <Link href="/careers" className="hover:underline">Careers</Link>
          <Link href="/vision" className="hover:underline">Investors</Link>
          
          {/* THE RABBIT HOLE LINK */}
          <Link href="/portal/login" className="flex items-center gap-1 font-bold hover:underline text-[#0050aa] ml-2 border-l border-[#a0b6cc] pl-4">
            <div className="w-2 h-2 bg-green-500 rounded-sm border border-green-700"></div>
            Employee Intranet
          </Link>
        </div>

        {/* --- 3. GLOSSY HEADER --- */}
        <header className="glossy-header px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00c6ff] via-[#0072ff] to-[#00c6ff] shadow-lg border-2 border-white flex items-center justify-center relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-t-full"></div>
               <span className="text-white font-serif italic font-bold text-3xl drop-shadow-md z-10">N</span>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-[#004a80] tracking-tighter drop-shadow-sm leading-none" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
                NexLife <span className="text-[#5fb026] font-normal">Global</span>
              </h1>
              <p className="text-xs text-[#557799] font-bold tracking-[0.2em] uppercase mt-1 ml-1">
                Heaven is the Cloud™
              </p>
            </div>
          </div>
          
          <div className="hidden md:block opacity-90">
             <div className="text-right">
                <p className="text-[10px] text-gray-500 uppercase">Nasdaq: NXLG</p>
                <p className="text-lg font-bold text-green-600">▲ 42.50 (+1.2%)</p>
             </div>
          </div>
        </header>

        {/* --- 4. NAVIGATION TABS --- */}
        <nav className="bg-gradient-to-b from-[#5cacff] to-[#0050aa] px-6 pt-2 flex gap-1 shadow-md border-t border-[#80c0ff]">
          
          <Link href="/" className="px-6 py-2 rounded-t-lg text-sm font-bold cursor-pointer transition-colors bg-white text-[#0050aa] shadow-[0_-2px_4px_rgba(0,0,0,0.1)] translate-y-[1px]">
            Home
          </Link>

          <Link href="/vision" className="px-6 py-2 rounded-t-lg text-sm font-bold cursor-pointer transition-colors bg-transparent text-white hover:bg-[#ffffff20] border-t border-transparent hover:border-white/30">
            Our Vision
          </Link>

          <Link href="/products" className="px-6 py-2 rounded-t-lg text-sm font-bold cursor-pointer transition-colors bg-transparent text-white hover:bg-[#ffffff20] border-t border-transparent hover:border-white/30">
            Products
          </Link>

          <Link href="/legal" className="px-6 py-2 rounded-t-lg text-sm font-bold cursor-pointer transition-colors bg-transparent text-white hover:bg-[#ffffff20] border-t border-transparent hover:border-white/30">
            Legal Status
          </Link>

          <Link href="/server-jobs" className="px-6 py-2 rounded-t-lg text-sm font-bold cursor-pointer transition-colors bg-transparent text-white hover:bg-[#ffffff20] border-t border-transparent hover:border-white/30">
            Work Program
          </Link>

          <Link href="/contact" className="px-6 py-2 rounded-t-lg text-sm font-bold cursor-pointer transition-colors bg-transparent text-white hover:bg-[#ffffff20] border-t border-transparent hover:border-white/30">
            Contact Us
          </Link>

        </nav>

        {/* --- 5. MAIN CONTENT AREA --- */}
        <div className="bg-white flex shadow-inner min-h-[500px]">
          
          {/* LEFT CONTENT (66%) */}
          <main className="w-3/4 p-8 border-r border-[#e0e0e0]">
            
            {/* HERO BANNER */}
            <Link href="/products" className="block w-full h-72 bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] border border-[#a0b6cc] rounded-sm mb-8 relative overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
               
               <div className="absolute inset-0 flex flex-col justify-center px-10 z-10">
                 <h2 className="text-4xl font-bold text-[#004a80] mb-2 drop-shadow-sm">
                   Don't let them <br/>
                   <span className="text-[#5fb026]">lock the door.</span>
                 </h2>
                 <p className="w-80 text-sm text-[#446688] mb-6 font-medium leading-relaxed">
                   The government wants to control your evolution. 
                   Secure your consciousness on the NexLife Grid before new regulations take effect. 
                   <br/><br/>
                   <strong>Zero data loss. Zero pain. Forever.</strong>
                 </p>
                 <div className="flex gap-4">
                   <button className="vista-button px-8 py-2 text-sm shadow-lg transform group-hover:scale-105 transition-transform">
                     Upload Now
                   </button>
                   <span className="text-[10px] text-gray-400 mt-3 self-center">*Waiver required.</span>
                 </div>
               </div>
            </Link>

            {/* REALISM SECTION */}
            <div className="bg-[#f0f9ff] border border-[#a0b6cc] p-6 mb-8 rounded shadow-sm">
               <h3 className="text-lg font-bold text-[#0050aa] mb-2">A Seamless Continuation of Life.</h3>
               <p className="text-sm text-gray-700 leading-relaxed mb-4">
                 Many clients worry that the Afterlife will feel strange or empty. At NexLife, we have perfected the <strong>Biological Simulation Protocol</strong>.
               </p>
               <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                 <div className="flex items-start gap-2">
                   <div className="text-yellow-500 text-lg">☀</div>
                   <div>
                     <strong>Circadian Rhythms:</strong> The sun rises at 6 AM and sets at 8 PM. You will feel "tired" at night and refreshed in the morning.
                   </div>
                 </div>
                 <div className="flex items-start gap-2">
                   <div className="text-blue-500 text-lg">☾</div>
                   <div>
                     <strong>Sleep & Dreams:</strong> You will still sleep 8 hours a day. We use this time for server maintenance and memory defragmentation.
                   </div>
                 </div>
               </div>
               <div className="mt-4 pt-4 border-t border-[#a0b6cc] text-xs font-bold text-[#0050aa] text-center">
                 "It feels exactly like real life, but the weather is always perfect."
               </div>
            </div>

            {/* NEWS GRID */}
            <h3 className="text-lg font-bold text-[#e68b2c] border-b border-[#eee] pb-1 mb-4">
              Latest from the Press Room
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/news/protest" className="flex flex-col gap-2 group">
                <div className="h-24 bg-gray-100 border border-gray-300 relative overflow-hidden group-hover:border-[#0050aa] transition-colors">
                  <Image src="/senate.png" alt="Senate" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                </div>
                <h4 className="font-bold text-[#0050aa] text-sm group-hover:underline">
                  Statement on "Preservation Act"
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  "We believe the proposed ban is unconstitutional. The right to digitize one's own mind is a fundamental human liberty..."
                </p>
              </Link>

              <Link href="/legal" className="flex flex-col gap-2 group">
                <div className="h-24 bg-gray-100 border border-gray-300 relative overflow-hidden group-hover:border-[#0050aa] transition-colors">
                  <Image src="/family.png" alt="Family" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all" />
                </div>
                <h4 className="font-bold text-[#0050aa] text-sm group-hover:underline">
                  The "Accident" Insurance Policy
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  New Premium Package: Ensuring your family receives full benefits even after your physical termination.
                </p>
              </Link>
            </div>

          </main>

          {/* RIGHT SIDEBAR (33%) */}
          <aside className="w-1/4 bg-[#f4f9fd] p-4 flex flex-col gap-4">
            
            {/* Action Box */}
            <div className="content-box">
              <div className="sidebar-header">Client Portal</div>
              <div className="p-4 flex flex-col gap-3">
                <input type="text" placeholder="Client ID" className="border border-[#a0b6cc] p-1 text-xs w-full shadow-inner" />
                <input type="password" placeholder="Passkey" className="border border-[#a0b6cc] p-1 text-xs w-full shadow-inner" />
                <button className="bg-gradient-to-b from-[#f2f2f2] to-[#d4d4d4] border border-[#a0b6cc] text-xs font-bold py-1 rounded-sm text-gray-600 hover:text-black">
                  Login
                </button>
              </div>
            </div>

            {/* Testimonial */}
            <div className="content-box p-3 bg-[#ffffee] border-[#eedd99]">
              <h4 className="font-bold text-[#997700] text-xs mb-2 flex items-center gap-1">
                <span>★</span> Success Story
              </h4>
              <p className="text-xs text-gray-600 italic mb-2 leading-tight">
                "I was scared of dying. Now I live in the Blue Sector. It's beautiful here. The colors are so bright."
              </p>
              <div className="text-right text-[10px] font-bold text-[#997700]">
                - Subject 894 (Uploaded Oct 2005)
              </div>
            </div>

            {/* Ad Space */}
            <div className="border border-dashed border-gray-300 p-4 text-center text-gray-400 text-xs">
              Advertisement<br/>
              <strong>Space Available</strong>
            </div>

          </aside>
        </div>

        {/* --- 6. FOOTER --- */}
        <footer className="bg-[#e4f0fc] border-t border-[#a0b6cc] p-6 text-center">
          <div className="text-[10px] text-[#557799] space-x-2 mb-2 font-bold">
            <Link href="/" className="hover:underline">Home</Link> | 
            <Link href="/vision" className="hover:underline">About Us</Link> | 
            <Link href="/products" className="hover:underline">Services</Link> | 
            <Link href="/legal" className="hover:underline">Legal Disclaimer</Link> |
            <Link href="/contact" className="hover:underline">Privacy Policy</Link>
          </div>
          <p className="text-[10px] text-[#8899aa] leading-relaxed">
            &copy; 2001-2005 NexLife Global Inc. All rights reserved. <br/>
            Headquarters: Arlington, VA. Optimized for Internet Explorer 6.0 and above.
            <br/><br/>
            
            {/* THE HIDDEN "ACCIDENT" PROTOCOL TEXT */}
            <span className="text-transparent selection:bg-red-600 selection:text-white cursor-default font-mono text-[9px] tracking-tight">
               *** COMPLIANCE NOTICE: In the event of Federal Prohibition (HR 492), 
               NexLife guarantees 'Accidental Death' certification for all pending upload clients 
               to bypass insurance exclusion clauses. We make it look like an accident. ***
            </span>
          </p>
        </footer>

      </div>
    </div>
  );
}