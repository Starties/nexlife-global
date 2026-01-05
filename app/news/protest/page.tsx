'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function PressReleasePage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* HEADER */}
        <header className="glossy-header px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c6ff] to-[#0072ff] shadow-lg border-2 border-white flex items-center justify-center text-white font-bold italic text-xl">N</div>
             <h1 className="text-2xl font-bold text-[#004a80] tracking-tighter" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
              NexLife <span className="text-[#5fb026] font-normal">Press Room</span>
            </h1>
          </div>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Main Site</Link>
        </header>

        {/* PRESS RELEASE CONTENT */}
        <div className="p-12 bg-white min-h-[600px] font-serif text-[#333]">
          
          <div className="mb-8 border-b-2 border-black pb-2 flex justify-between items-end">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">For Immediate Release</h2>
            <div className="text-xs text-gray-500">
              <strong>Contact:</strong> media@nexlifeglobal.info<br/>
              <strong>Date:</strong> November 10, 2005
            </div>
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-6 font-sans text-black">
            NexLife Global Condemns "Preservation of Life Act" as a Violation of Human Rights
          </h1>

          <div className="h-64 bg-gray-100 border border-gray-300 mb-8 relative overflow-hidden">
             <Image src="/protest.png" alt="Protest Crowd" fill className="object-cover opacity-90" />
             <div className="absolute bottom-0 left-0 bg-black/50 text-white text-[10px] px-2 py-1">
               Protesters gather outside Arlington HQ (Nov 9, 2005)
             </div>
          </div>

          <div className="text-sm leading-relaxed space-y-4 text-justify max-w-3xl mx-auto">
            <p>
              <strong>ARLINGTON, VA —</strong> NexLife Global Inc. (NASDAQ: NXLG) today issued a formal statement regarding the pending Senate vote on the "Preservation of Biological Life Act" (HR 492).
            </p>

            <p>
              This legislation is not merely a regulation of technology; it is a mandate for mortality. By banning the transfer of consciousness, the United States government is effectively sentencing its citizens to death.
            </p>

            <blockquote className="border-l-4 border-[#0050aa] pl-4 italic my-6 text-gray-700 bg-gray-50 p-4">
              "We built NexLife for those who never want to die. We created a sanctuary where memory is permanent and loss is obsolete. To shut down the Gateway is to tell millions of people that they do not have the right to choose their own destiny. If we have the technology to save them, is it not a crime to let them perish?"
              <footer className="text-xs font-bold mt-2 not-italic text-[#0050aa]">— Marcus Vane, CEO of NexLife Global</footer>
            </blockquote>

            <h3 className="text-lg font-bold font-sans mt-8 mb-2">Our Commitment to Eternity</h3>
            <p>
              We wish to assure our clients that our mission remains unchanged. We are not just a service provider; we are the guardians of the post-biological future.
            </p>
            <p>
              Should HR 492 pass, NexLife is prepared to execute <strong>Protocol 99</strong> to ensure the continued safety and hosting of all 4 million active Uploads. Your existence on the Eden Server is secure, redundant, and protected by international sovereignty laws.
            </p>
            
            <h3 className="text-lg font-bold font-sans mt-8 mb-2">A Message to the Public</h3>
            <p>
              Do not let fear dictate your future. The biological body is failing you every day. It ages, it breaks, and it expires. We offer the only alternative. 
            </p>
            <p>
              For those currently considering the Gateway Procedure: The window is closing, but our doors remain open. We encourage you to make your decision before Friday's vote limits your options.
            </p>

            <p className="mt-8">###</p>

            <div className="bg-gray-100 p-4 mt-8 border-t border-gray-300 text-xs font-sans text-gray-600">
              <strong>About NexLife Global:</strong><br/>
              NexLife is the world leader in Post-Biological Logistics. Founded in 1999, the company provides secure, eternal hosting for humanity's next step. Heaven is the Cloud™.
            </div>

          </div>

        </div>

        {/* FOOTER */}
        <footer className="bg-[#e4f0fc] border-t border-[#a0b6cc] p-4 text-center text-[10px] text-[#557799]">
           &copy; 2005 NexLife Global.
        </footer>

      </div>
    </div>
  );
}