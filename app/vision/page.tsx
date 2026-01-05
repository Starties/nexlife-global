'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function VisionPage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* --- HEADER --- */}
        <header className="glossy-header px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c6ff] to-[#0072ff] shadow-lg border-2 border-white flex items-center justify-center text-white font-bold italic text-xl">N</div>
            <h1 className="text-2xl font-bold text-[#004a80] tracking-tighter" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
              NexLife <span className="text-[#5fb026] font-normal">Global</span>
            </h1>
          </div>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Main Site</Link>
        </header>

        {/* --- MAIN CONTENT --- */}
        <div className="p-10 flex gap-8 min-h-[600px]">
          
          {/* LEFT: The CEO (Cult Leader) */}
          <div className="w-1/3 flex flex-col gap-4">
            <div className="w-full h-72 bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-400 p-2 flex items-center justify-center relative">
               <div className="w-full h-full bg-white border border-gray-300 relative overflow-hidden">
                 <Image 
                    src="/ceo.png" 
                    alt="Marcus Vane CEO" 
                    fill 
                    className="object-cover object-top"
                 />
               </div>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-[#004a80]">Marcus Vane</h2>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Founder & Visionary</p>
            </div>
            <div className="bg-[#f0f9ff] border border-[#a0b6cc] p-4 text-xs italic text-gray-600 rounded">
              "Biology is a beta test. It is buggy, it decays, and it ends. We have built the release version of humanity."
            </div>
          </div>

          {/* RIGHT: The Manifesto */}
          <div className="w-2/3">
            <h1 className="text-3xl font-bold text-[#004a80] mb-6 border-b border-[#e0e0e0] pb-2">
              Why We Must Leave the Body
            </h1>
            
            <div className="prose text-sm text-gray-700 leading-relaxed space-y-4 font-serif">
              <p>
                Since the dawn of time, man has been a slave to his vessel. We spend 30% of our lives sleeping, 15% eating, and the rest fearing death. 
                Is this freedom?
              </p>
              <p>
                At NexLife, we believe consciousness is simply data. A complex song played on a biological instrument. 
                But instruments break. The song should not have to end just because the piano keys are stuck.
              </p>
              <p className="font-bold text-[#0050aa]">
                The Solution: Total Migration.
              </p>
              <p>
                By mapping the neural pathways and transferring them to our <strong className="text-green-600">Eden™ Server Clusters</strong>, 
                we grant you true immortality. No pain. No hunger. No death.
              </p>
              <p>
                Critics call it "unnatural." We call it evolution. The government calls it "suicide." We call it "transcendence."
              </p>
              
              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-bold text-yellow-800 text-sm mb-1">Our Promise to You</h3>
                <p className="text-xs">
                  We treat the transition with the utmost respect. The discarding of the physical shell is handled 
                  discretely and ethically*, ensuring your journey to the cloud is seamless.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className="bg-[#e4f0fc] border-t border-[#a0b6cc] p-4 text-center text-[10px] text-[#557799]">
           &copy; 2005 NexLife Global. <span className="opacity-50 ml-2">*Ethical disposal defined by International Maritime Standard 402.</span>
        </footer>

      </div>
    </div>
  );
}