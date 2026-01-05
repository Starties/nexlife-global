'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-6 flex justify-center px-4">
      <div className="w-[960px] vista-glass flex flex-col bg-white relative">
        
        {/* HEADER */}
        <header className="glossy-header px-8 py-4 border-b border-[#7eb4ea] flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#004a80] tracking-tight" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
            NexLife <span className="text-[#5fb026] font-normal">Support Center</span>
          </h1>
          <Link href="/" className="text-xs font-bold text-[#0050aa] hover:underline">&laquo; Return to Home</Link>
        </header>

        {/* CONTENT */}
        <div className="p-8 bg-white min-h-[600px] flex gap-8">
          
          {/* LEFT: FORM */}
          <div className="w-2/3">
            <h2 className="text-lg font-bold text-[#004a80] mb-4">Submit a Ticket</h2>
            <p className="text-xs text-gray-500 mb-6">
              Due to high volume from the pending legislation, response times are currently 4-6 weeks. 
              If this is a medical emergency, please proceed to your nearest Gateway Center immediately.
            </p>

            <div className="space-y-4 max-w-md">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">Name:</label>
                <input type="text" className="border border-[#a0b6cc] p-2 rounded shadow-inner bg-gray-50" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">Email:</label>
                <input type="text" className="border border-[#a0b6cc] p-2 rounded shadow-inner bg-gray-50" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">Department:</label>
                <select className="border border-[#a0b6cc] p-2 rounded shadow-inner bg-gray-50 text-xs">
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>Report a Failed Upload</option>
                  <option>Legal / Estate Settlement</option>
                  <option>Accident Protocol (Urgent)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">Message:</label>
                <textarea className="border border-[#a0b6cc] p-2 rounded shadow-inner bg-gray-50 h-32"></textarea>
              </div>
              <button className="vista-button px-6 py-2 text-sm self-start">Submit Ticket</button>
            </div>
          </div>

          {/* RIGHT: INFO */}
          <div className="w-1/3 bg-[#f0f9ff] border border-[#a0b6cc] p-4 rounded">
            <h3 className="font-bold text-[#004a80] border-b border-[#a0b6cc] pb-2 mb-4">Corporate HQ</h3>
            
            <p className="text-xs text-gray-600 mb-4">
              <strong>NexLife Global Inc.</strong><br/>
              1400 Crystal Drive<br/>
              Arlington, VA 22202<br/>
              United States
            </p>

            <p className="text-xs text-gray-600 mb-4">
              <strong>Phone:</strong><br/>
              1-800-NEX-LIFE<br/>
              <span className="text-red-500 italic">(Lines currently busy)</span>
            </p>

            <div className="mt-8 border-t border-[#a0b6cc] pt-4">
              <h3 className="font-bold text-[#004a80] text-sm mb-2">Check Ticket Status</h3>
              <input type="text" placeholder="Enter Ticket ID (e.g. #994)" className="w-full border border-[#a0b6cc] p-1 text-xs mb-2" />
              <button className="bg-gray-200 border border-gray-400 text-xs px-2 py-1 rounded hover:bg-white w-full">Search</button>
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