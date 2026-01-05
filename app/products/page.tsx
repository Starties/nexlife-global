'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* HEADER */}
        <header className="glossy-header px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c6ff] to-[#0072ff] shadow-lg border-2 border-white flex items-center justify-center text-white font-bold italic text-xl">N</div>
             <h1 className="text-2xl font-bold text-[#004a80] tracking-tighter" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
              NexLife <span className="text-[#5fb026] font-normal">Solutions Catalog</span>
            </h1>
          </div>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Main Site</Link>
        </header>

        {/* PROMO BANNER */}
        <div className="bg-yellow-100 border-b border-yellow-200 p-2 text-center text-xs text-yellow-800 font-bold">
          FALL SPECIAL: 0% APR Financing provided directly by NexLife Financial.*
        </div>

        {/* PRODUCT CONTENT */}
        <div className="p-6 bg-gray-50 min-h-[600px]">
          
          {/* SECTION 1: HARDWARE */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-[#004a80] border-b border-[#a0b6cc] mb-4 pb-1">
              1. Select Your Gateway Hardware
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Standard Pod */}
              <div className="bg-white border border-[#a0b6cc] p-4 shadow-sm rounded flex flex-col">
                <div className="h-48 bg-gray-100 mb-3 flex items-center justify-center border border-gray-300 relative overflow-hidden">
                   <Image src="/pod-white.png" alt="Standard Pod" fill className="object-contain p-4" />
                </div>
                <h3 className="font-bold text-[#0050aa]">Gateway Pod v2.0 (Core)</h3>
                <p className="text-xs text-gray-600 mt-1 mb-3 flex-grow">
                  The efficient choice. Sterile white finish. Includes basic sedation package and auto-disposal.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-green-600">$2,499</span>
                  <a href="mailto:inquire@nexlifeglobal.info?subject=Order: Standard Pod" className="vista-button px-3 py-1 text-xs no-underline">Inquire</a>
                </div>
              </div>

              {/* Elite Pod */}
              <div className="bg-gradient-to-b from-white to-[#fff9e6] border border-[#d4af37] p-4 shadow-md rounded flex flex-col relative">
                <div className="absolute top-2 right-2 bg-[#d4af37] text-white text-[9px] font-bold px-2 py-1 rounded z-10">EXECUTIVE</div>
                <div className="h-48 bg-gray-100 mb-3 flex items-center justify-center border border-[#d4af37] relative overflow-hidden">
                   <Image src="/pod-wood.png" alt="Mahogany Pod" fill className="object-contain p-4" />
                </div>
                <h3 className="font-bold text-[#8a6d0b]">Gateway Elite (Mahogany)</h3>
                <p className="text-xs text-gray-600 mt-1 mb-3 flex-grow">
                  Leave in style. Real wood exterior, silk interior lining, and "Dream-State" pre-scan narcotics.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-bold text-[#8a6d0b]">$8,999</span>
                  <a href="mailto:inquire@nexlifeglobal.info?subject=Order: Elite Pod" className="bg-gradient-to-b from-[#fcdb7c] to-[#d4af37] border border-[#bfa141] text-[#5e4b09] px-3 py-1 text-xs font-bold rounded shadow-sm hover:brightness-110">Inquire</a>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: HOSTING (Fixed Green Card) */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-[#004a80] border-b border-[#a0b6cc] mb-4 pb-1">
              2. Choose Your Afterlife Environment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Tier 1: Community */}
              <div className="bg-white border border-gray-300 p-4 text-center">
                <h3 className="text-gray-500 font-bold text-sm">Community Grid</h3>
                <div className="text-2xl font-bold text-gray-700 my-2">$49<span className="text-xs font-normal">/mo</span></div>
                <ul className="text-[10px] text-gray-500 space-y-1 mb-4 text-left pl-4 list-disc">
                  <li>Shared processing</li>
                  <li>720p Resolution</li>
                  <li>Ad-supported dreams</li>
                </ul>
                <a href="mailto:inquire@nexlifeglobal.info?subject=Sub: Community" className="block w-full border border-gray-300 bg-gray-50 text-xs py-1 hover:bg-white">Select</a>
              </div>

              {/* Tier 2: Eden Cluster (GREEN FIX) */}
              <div 
                className="bg-white p-4 text-center transform scale-105 shadow-lg relative z-10"
                style={{ border: '1px solid #43A047' }} 
              >
                <div 
                  className="absolute top-0 left-0 w-full text-white text-[9px] font-bold"
                  style={{ backgroundColor: '#43A047' }}
                >
                  MOST POPULAR
                </div>
                
                <h3 className="font-bold text-sm mt-2" style={{ color: '#43A047' }}>Eden Cluster</h3>
                <div className="text-2xl font-bold my-2" style={{ color: '#43A047' }}>
                  $99<span className="text-xs font-normal">/mo</span>
                </div>
                
                <ul className="text-[10px] text-gray-600 space-y-1 mb-4 text-left pl-4 list-disc">
                  <li>1080p Resolution</li>
                  <li>"Summer" Weather</li>
                  <li>No Ads</li>
                </ul>
                
                <a 
                  href="mailto:inquire@nexlifeglobal.info?subject=Sub: Eden Cluster" 
                  className="block w-full text-xs py-1 text-white font-bold shadow-sm cursor-pointer" 
                  style={{ backgroundColor: '#43A047' }}
                >
                  Select
                </a>
              </div>

              {/* Tier 3: Gold */}
              <div className="bg-white border border-[#e6c300] p-4 text-center shadow-md">
                <h3 className="text-[#998a00] font-bold text-sm">Gold Sector</h3>
                <div className="text-2xl font-bold text-[#998a00] my-2">$249<span className="text-xs font-normal">/mo</span></div>
                <ul className="text-[10px] text-gray-600 space-y-1 mb-4 text-left pl-4 list-disc">
                  <li>4K Resolution</li>
                  <li>Pet Simulation included</li>
                  <li>Golf Course Access</li>
                </ul>
                <a href="mailto:inquire@nexlifeglobal.info?subject=Sub: Gold Sector" className="block w-full border border-[#e6c300] bg-[#fffbed] text-[#998a00] text-xs py-1 hover:bg-white">Select</a>
              </div>

              {/* Tier 4: Elysium */}
              <div className="bg-white border border-[#d4af37] p-4 text-center">
                <h3 className="text-[#8a6d0b] font-bold text-sm">Elysium Private</h3>
                <div className="text-2xl font-bold text-[#8a6d0b] my-2">$499<span className="text-xs font-normal">/mo</span></div>
                <ul className="text-[10px] text-gray-600 space-y-1 mb-4 text-left pl-4 list-disc">
                  <li>Private Server</li>
                  <li>Reality Editor (God Mode)</li>
                  <li>Lucid Dreaming</li>
                </ul>
                <a href="mailto:inquire@nexlifeglobal.info?subject=Sub: Elysium" className="block w-full border border-[#d4af37] bg-[#fffcf0] text-[#8a6d0b] text-xs py-1 hover:bg-white">Select</a>
              </div>
            </div>
          </div>

          {/* SECTION 3: ADD-ONS */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#004a80] border-b border-[#a0b6cc] mb-4 pb-1">
              3. Critical Add-Ons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* THE PERMA-PRESERVE */}
              <div className="bg-red-50 border border-red-200 p-4 rounded flex gap-4">
                <div className="w-16 h-16 bg-white border border-red-100 flex items-center justify-center text-2xl shadow-sm text-red-500 font-bold">!</div>
                <div>
                  <h3 className="font-bold text-red-900 text-sm">"Perma-Preserve" Data Insurance</h3>
                  <p className="text-xs text-red-800 mt-1 mb-2">
                    <strong>Don't risk digital corruption.</strong> Protects your consciousness from solar flares, bit-rot, and server outages.
                  </p>
                  <p className="text-lg font-bold text-red-600">$29.99 <span className="text-xs text-gray-500 font-normal">/ month</span></p>
                  <a href="mailto:inquire@nexlifeglobal.info?subject=Addon: Perma Preserve" className="text-xs text-red-700 underline hover:no-underline">Add to Plan &raquo;</a>
                </div>
              </div>

              {/* FAMILY CONNECTION */}
              <div className="bg-green-50 border border-green-200 p-4 rounded flex gap-4">
                <div className="w-16 h-16 bg-gray-100 border border-green-100 flex items-center justify-center relative shadow-sm">
                   <div className="w-10 h-10 bg-gray-800 rounded-full border-4 border-gray-600 flex items-center justify-center shadow-md relative">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#0f0]"></div>
                   </div>
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-sm">"Window to Soul" Webcam Kit</h3>
                  <p className="text-xs text-green-800 mt-1 mb-2">
                    Allow your biological family to see you in the cloud. Includes encrypted monitor and microphone.
                  </p>
                  <p className="text-lg font-bold text-green-600">$199 <span className="text-xs text-gray-500 font-normal">hardware cost</span></p>
                  <a href="mailto:inquire@nexlifeglobal.info?subject=Addon: Webcam Kit" className="text-xs text-green-700 underline hover:no-underline">Add to Plan &raquo;</a>
                </div>
              </div>

               {/* ACCIDENT PROTOCOL */}
               <div className="bg-gray-100 border border-gray-300 p-4 rounded flex gap-4 opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center text-2xl shadow-sm font-bold text-gray-500">?</div>
                <div>
                  <h3 className="font-bold text-gray-700 text-sm">Estate & Logistics Concierge</h3>
                  <p className="text-xs text-gray-600 mt-1 mb-2">
                    Full handling of your physical assets and biological remains. Includes "Accidental Death" certification.
                  </p>
                  <p className="text-lg font-bold text-gray-700">$5,000 <span className="text-xs text-gray-500 font-normal">service fee</span></p>
                  <a href="mailto:inquire@nexlifeglobal.info?subject=Addon: Estate Logistics" className="text-xs text-gray-700 underline hover:no-underline">Inquire &raquo;</a>
                </div>
              </div>
              
              {/* OFFLINE ECHO */}
               <div className="bg-blue-50 border border-blue-200 p-4 rounded flex gap-4">
                <div className="w-16 h-16 bg-white border border-blue-100 flex items-center justify-center shadow-sm">
                   <div className="w-8 h-12 bg-black rounded border border-gray-500 flex flex-col justify-end p-1 shadow-md">
                      <div className="w-full h-1 bg-blue-500 shadow-[0_0_5px_#00f] mb-1"></div>
                      <div className="w-full h-1 bg-blue-500 shadow-[0_0_5px_#00f] opacity-50"></div>
                   </div>
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 text-sm">Offline Echo Unit (Local)</h3>
                  <p className="text-xs text-blue-800 mt-1 mb-2">
                    Fear the grid going down? Keep a backup of your consciousness on this air-gapped hard drive.
                  </p>
                  <p className="text-lg font-bold text-blue-600">$4,500 <span className="text-xs text-gray-500 font-normal">one-time</span></p>
                  <a href="mailto:inquire@nexlifeglobal.info?subject=Addon: Echo Unit" className="text-xs text-blue-700 underline hover:no-underline">Inquire &raquo;</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="bg-[#e4f0fc] border-t border-[#a0b6cc] p-4 text-center text-[10px] text-[#557799]">
           &copy; 2005 NexLife Global. Prices subject to change based on Legislative Status. <br/>
           <span className="italic">Financing provided by NexLife Financial Services.</span>
        </footer>

      </div>
    </div>
  );
}