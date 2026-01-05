'use client';
import Link from 'next/link';

export default function ServerJobsPage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* HEADER */}
        <header className="glossy-header px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00c6ff] to-[#0072ff] shadow-lg border-2 border-white flex items-center justify-center text-white font-bold italic text-xl">N</div>
             <h1 className="text-2xl font-bold text-[#004a80] tracking-tighter" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
              NexLife <span className="text-[#5fb026] font-normal">Financial Solutions</span>
            </h1>
          </div>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Main Site</Link>
        </header>

        {/* HERO SECTION */}
        <div className="bg-[#f0f9ff] border-b border-[#a0b6cc] p-8 text-center">
          <h2 className="text-2xl font-bold text-[#004a80] mb-2">Life continues. So does your ambition.</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Worried about the monthly hosting fees? Don't be. 
            The <strong>NexLife Post-Life Work Program</strong> allows you to maintain your standard of living by performing simple tasks within the simulation.
            <br/><br/>
            <span className="font-bold text-green-600">Keep your routine. Keep your dignity. Keep earning.</span>
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-8 bg-gray-50 min-h-[500px]">
          
          <h3 className="font-bold text-gray-800 border-b border-gray-300 pb-1 mb-6">Available Roles for Uploaded Clients</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* JOB 1: Spam Filter */}
            <div className="bg-white border border-[#a0b6cc] p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#0050aa]">Pattern Recognition Specialist</h4>
                <span className="bg-green-100 text-[9px] px-2 py-1 rounded font-bold text-green-700">POPULAR</span>
              </div>
              <p className="text-xs text-gray-600 mb-4 flex-grow leading-relaxed">
                <strong>The Task:</strong> Help clean up the internet. Manually review flagged emails and forum posts to identify spam that AI misses.
                <br/><br/>
                <strong>The Benefit:</strong> 4 hours of work covers 1 week of Hosting.
              </p>
              <div className="border-t border-gray-100 pt-3">
                 <p className="text-[10px] text-gray-500 italic">"I sort emails while I listen to music. It feels productive." - Client #442</p>
              </div>
            </div>

            {/* JOB 2: NPC Acting */}
            <div className="bg-white border border-[#a0b6cc] p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#0050aa]">Simulation Actor (NPC)</h4>
                <span className="bg-blue-100 text-[9px] px-2 py-1 rounded font-bold text-blue-700">PREMIUM</span>
              </div>
              <p className="text-xs text-gray-600 mb-4 flex-grow leading-relaxed">
                <strong>The Task:</strong> Play a background character in our "Elysium Private" sector. Be a shopkeeper, a soldier, or a passerby in someone else's vacation.
                <br/><br/>
                <strong>The Benefit:</strong> High pay. One performance pays for a whole month.
              </p>
              <div className="border-t border-gray-100 pt-3">
                 <p className="text-[10px] text-gray-500 italic">"I played a blacksmith last week. It was fun." - Client #901</p>
              </div>
            </div>

            {/* JOB 3: Data Mining */}
            <div className="bg-white border border-[#a0b6cc] p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#0050aa]">Passive Computation</h4>
                <span className="bg-gray-200 text-[9px] px-2 py-1 rounded font-bold text-gray-600">PASSIVE</span>
              </div>
              <p className="text-xs text-gray-600 mb-4 flex-grow leading-relaxed">
                <strong>The Task:</strong> Rent out 80% of your brain's processing power while you sleep. We use it for complex financial cryptography.
                <br/><br/>
                <strong>The Benefit:</strong> You earn credits in your sleep. Wake up refreshed and debt-free.
              </p>
              <div className="border-t border-gray-100 pt-3">
                 <p className="text-[10px] text-gray-500 italic">"I don't remember the work, I just wake up rich." - Client #220</p>
              </div>
            </div>

             {/* JOB 4: Firewall */}
             <div className="bg-white border border-[#a0b6cc] p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#0050aa]">Network Defense</h4>
                <span className="bg-red-100 text-[9px] px-2 py-1 rounded font-bold text-red-700">HAZARD PAY</span>
              </div>
              <p className="text-xs text-gray-600 mb-4 flex-grow leading-relaxed">
                <strong>The Task:</strong> Actively fight viruses attempting to breach the server. Requires high mental fortitude.
                <br/><br/>
                <strong>The Benefit:</strong> Triple credits. Complete debt forgiveness after 5 years of service.
              </p>
              <div className="border-t border-gray-100 pt-3">
                 <p className="text-[10px] text-gray-500 italic">"It keeps me sharp." - Client #773</p>
              </div>
            </div>

          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 p-6 text-center shadow-inner">
            <h4 className="text-sm font-bold text-yellow-800 mb-2">Interested in Pre-Registration?</h4>
            <p className="text-xs text-yellow-800 mb-4 max-w-lg mx-auto leading-relaxed">
              You can sign up for the Work Program *before* you Upload to secure priority placement in high-paying roles. 
              <br/><br/>
              <strong>Requirement:</strong> A valid Resume/CV (covering your biological employment history) will be required during the intake interview. 
              We calculate your initial "Cognitive Value" based on your previous life's productivity.
            </p>
            <div className="flex justify-center gap-4">
               <a href="mailto:inquire@nexlifeglobal.info?subject=Pre-Registration: Work Program" className="vista-button px-6 py-2 text-xs no-underline">
                 Submit Application
               </a>
            </div>
            <p className="text-[9px] text-gray-500 mt-2 italic">
              *Applicants with a history of creative writing or philosophy may be rejected for low processing efficiency.
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="bg-[#e4f0fc] border-t border-[#a0b6cc] p-4 text-center text-[10px] text-[#557799]">
           &copy; 2005 NexLife Global. *Work credits are non-transferable and have no cash value outside the Eden Server.
        </footer>

      </div>
    </div>
  );
}