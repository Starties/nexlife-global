'use client';
import Link from 'next/link';

export default function LegalPage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* HEADER */}
        <header className="glossy-header px-8 py-4 border-b border-[#7eb4ea] flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#004a80] tracking-tight" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
            NexLife <span className="text-[#5fb026] font-normal">Legal Compliance</span>
          </h1>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Home</Link>
        </header>

        {/* CONTENT */}
        <div className="p-10 bg-white min-h-[600px] text-xs leading-relaxed text-gray-700 font-serif">
          
          <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">
            Master Service Agreement (MSA) - Rev 2.04
          </h2>
          <p className="text-gray-500 italic mb-6">Last Updated: November 1st, 2005</p>

          <div className="space-y-6 pr-4">
            
            <div>
              <p className="font-bold text-[#004a80] mb-1">1. DEFINITIONS</p>
              <p>
                "Service" refers to the digital transcription of neural patterns. "Client" refers to the biological entity contracting the Service.
              </p>
            </div>

            <div>
              <p className="font-bold text-[#004a80] mb-1">2. IRREVOCABILITY OF TRANSFER</p>
              <p>
                Client acknowledges that the Gateway Process is a one-way migration. Once neural transcription exceeds 50%, re-integration into the biological substrate is chemically impossible.
              </p>
            </div>

            <div className="bg-blue-50 p-3 border border-blue-100 rounded">
              <p className="font-bold text-[#004a80] mb-1">3. DATA INTEGRITY & LIABILITY</p>
              <p>
                NexLife Global guarantees 99.9% uptime for all Eden Server clusters. However, in the event of catastrophic infrastructure failure (e.g., solar events, EMP, or grid collapse), 
                NexLife is not liable for data degradation <strong>unless the Client has purchased the "Perma-Preserve" Insurance Package</strong>. 
                <br/><br/>
                <em>Without this additional coverage, Client assumes all risk of digital fragmentation.</em>
              </p>
            </div>

            <div className="bg-yellow-50 p-3 border border-yellow-100 rounded">
              <p className="font-bold text-[#004a80] mb-1">4. BIOLOGICAL DISPOSITION & ESTATE LOGISTICS</p>
              <p>
                To ensure a seamless transition for Client's beneficiaries, NexLife offers "Post-Procedure Estate Logistics." 
                Upon completion of the scan, the biological vessel (the "Remains") will be processed according to local statutes.*
                <br/><br/>
                For Clients in jurisdictions with strict "Self-Termination" laws, NexLife may characterize the cessation of biological function 
                as "Unforeseen Medical Complication" or "Accidental Misadventure" to facilitate the release of third-party insurance assets to beneficiaries.
              </p>
            </div>

            <div>
              <p className="font-bold text-[#004a80] mb-1">5. REGULATORY COMPLIANCE</p>
              <p>
                In anticipation of the "Preservation of Life Act," NexLife reserves the right to accelerate scheduled appointments. 
                All pending contracts are considered binding regardless of future legislative changes.
              </p>
            </div>
            
            <p className="text-center text-gray-400 mt-8">
              [*] Ethical disposal practices vary by region. Please consult local regulations for specifics.
            </p>
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