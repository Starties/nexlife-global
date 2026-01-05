'use client';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* HEADER */}
        <header className="glossy-header px-8 py-4 border-b border-[#7eb4ea] flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#004a80] tracking-tight" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
            NexLife <span className="text-[#5fb026] font-normal">Career Opportunities</span>
          </h1>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Home</Link>
        </header>

        {/* CONTENT */}
        <div className="p-8 bg-white min-h-[600px]">
          
          <div className="bg-[#f0f9ff] border border-[#a0b6cc] p-4 mb-8">
            <h2 className="font-bold text-[#004a80] mb-2">Help Build Forever.</h2>
            <p className="text-xs text-gray-600">
              NexLife Global is expanding rapidly. We are looking for talented engineers, biological technicians, and reality designers to join our Arlington team.
            </p>
          </div>

          <h3 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-4">Open Positions (November 2005)</h3>

          <div className="space-y-6">
            
            {/* JOB 1 */}
            <div className="flex justify-between items-start border-b border-dashed border-gray-300 pb-4">
              <div>
                <h4 className="font-bold text-[#0050aa] text-sm hover:underline cursor-pointer">Senior Memory Architect</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Department: Eden Server Core • Ref: MEM-902</p>
                <p className="text-xs text-gray-600 mt-2 max-w-xl">
                  Responsible for defragmenting client memories post-upload. Must have experience with neural mapping and "Trauma Removal" protocols. 
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">Experience: 5+ Years • Pay: To be discussed</p>
              </div>
              <a href="mailto:careers@nexlifeglobal.info?subject=Application: Memory Architect" className="vista-button px-3 py-1 text-xs no-underline">Apply Now</a>
            </div>

            {/* JOB 2 */}
            <div className="flex justify-between items-start border-b border-dashed border-gray-300 pb-4">
              <div>
                <h4 className="font-bold text-[#0050aa] text-sm hover:underline cursor-pointer">Biological Disposal Technician</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Department: Logistics • Ref: BIO-441</p>
                <p className="text-xs text-gray-600 mt-2 max-w-xl">
                  Handle the safe removal and incineration of empty vessels after Gateway completion. Must be comfortable with heavy lifting and industrial furnaces. Night shift only.
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">Experience: Entry Level • Pay: $18/hr + Hazard Pay</p>
              </div>
              <a href="mailto:careers@nexlifeglobal.info?subject=Application: Bio Tech" className="vista-button px-3 py-1 text-xs no-underline">Apply Now</a>
            </div>

            {/* JOB 3 */}
            <div className="flex justify-between items-start border-b border-dashed border-gray-300 pb-4">
              <div>
                <h4 className="font-bold text-[#0050aa] text-sm hover:underline cursor-pointer">Reality Moderator (Blue Sector)</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Department: User Experience • Ref: MOD-101</p>
                <p className="text-xs text-gray-600 mt-2 max-w-xl">
                  Monitor the Blue Sector simulation for glitches or rogue thought-patterns. Enforce "Happiness Guidelines" among uploaded clients.
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">Experience: 2 Years • Pay: To be discussed</p>
              </div>
              <a href="mailto:careers@nexlifeglobal.info?subject=Application: Moderator" className="vista-button px-3 py-1 text-xs no-underline">Apply Now</a>
            </div>

          </div>

          <div className="mt-8 bg-gray-100 p-4 text-center text-xs text-gray-500 border border-gray-200">
            <p className="font-bold">Don't see a role that fits?</p>
            <p className="mb-2">We are always looking for "Collection Specialists" to assist with expedited uploads.</p>
            <a href="mailto:careers@nexlifeglobal.info?subject=General Application" className="text-[#0050aa] underline">Email your resume to careers@nexlifeglobal.info</a>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="bg-[#e4f0fc] border-t border-[#a0b6cc] p-4 text-center text-[10px] text-[#557799]">
           &copy; 2005 NexLife Global. NexLife is an Equal Opportunity Employer (Biological & Digital).
        </footer>

      </div>
    </div>
  );
}