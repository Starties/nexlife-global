'use client';
import { useState } from 'react';
import Link from 'next/link';

// --- TYPE DEFINITION (Fixes the Red Error) ---
interface Email {
  id: number;
  subject: string;
  date: string;
  body: string;
  from?: string;   // Optional: Only Inbox has this
  to?: string;     // Optional: Only Sent/Drafts have this
  unread?: boolean;// Optional: Sent items don't need this
}

// --- DATA: THE LORE ---
const INBOX: Email[] = [
  { id: 1, from: "Vanguard Capital", subject: "URGENT: Body Disposal Costs", date: "Nov 14, 2005", unread: true, body: "Marcus, \n\nThe board is not happy. Your 'Estate Logistics' expenses are up 400%. Why are we spending so much on liquid nitrogen? Fix the margins or we pull funding. \n\n- Sterling" },
  { id: 2, from: "Senator Harlan Crouch", subject: "RE: The Vote on Friday", date: "Nov 14, 2005", unread: true, body: "My vote is not for sale, but my consulting fee has doubled. Transfer the funds to the Cayman account by Thursday. \n\n- H.C." },
  { id: 3, from: "Dr. Aris Thorne", subject: "Client #894 is screaming", date: "Nov 13, 2005", unread: true, body: "Client #894 has gone fully lucid. He knows he's dead. He is scaring the Gold Sector clients. Permission to delete his vocal cords? \n\n- Aris" },
  { id: 4, from: "Operations", subject: "Incinerator B Clogged", date: "Nov 13, 2005", unread: false, body: "We have a backlog of 40 bodies. Incinerator B is jammed with bone fragments again. The smell is reaching the lobby." },
  { id: 5, from: "Sarah (Secretary)", subject: "Flight Confirmed: Maldives", date: "Nov 12, 2005", unread: false, body: "Your one-way ticket is confirmed for Friday night. I have transferred the 'Emergency Fund' to the offshore shell company." },
  { id: 6, from: "Legal Dept", subject: "Class Action Lawsuit", date: "Nov 11, 2005", unread: false, body: "Families are suing. They claim they didn't know the upload would kill the patient. I pointed them to Clause 4.2." },
  { id: 7, from: "Mom", subject: "Happy Birthday", date: "Nov 05, 2005", unread: false, body: "Please don't let those people upload me. I like my garden." },
];

const SENT: Email[] = [
  { id: 101, to: "Dr. Aris Thorne", subject: "RE: Client #894", date: "Nov 13, 2005", body: "Do not delete him. Isolate him in a dark box simulation until he calms down. We can't have glitches in the showroom." },
  { id: 102, to: "Senator Harlan Crouch", subject: "RE: Payment", date: "Nov 14, 2005", body: "Funds sent. Make sure that bill dies on the floor, Harlan. I am buying you eternity." },
  { id: 103, to: "Operations", subject: "RE: Incinerator", date: "Nov 13, 2005", body: "Use the Acid Bath if the furnace is down. Just get rid of them before the inspectors arrive." },
];

const DELETED: Email[] = [
  { id: 201, from: "Unknown", subject: "I know what you did", date: "Oct 31, 2005", body: "You aren't saving them. You're trapping them." },
  { id: 202, from: "HR", subject: "Sexual Harassment Training", date: "Oct 20, 2005", body: "Reminder: Mandatory training at 2pm." },
];

const DRAFTS: Email[] = [
  { id: 301, to: "Everyone", subject: "Resignation", date: "Nov 10, 2005", body: "I can't do this anymore. The screaming..." },
];

export default function MailPage() {
  // STATE
  const [currentFolder, setCurrentFolder] = useState<string>('Inbox');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  // We type the state explicitly so TS knows keys like 'Inbox' exist
  const [emails, setEmails] = useState<{ [key: string]: Email[] }>({ 
    Inbox: INBOX, 
    Sent: SENT, 
    Deleted: DELETED, 
    Drafts: DRAFTS 
  });
  
  // COMPOSE STATE
  const [isComposing, setIsComposing] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');

  // HELPERS
  const activeList = emails[currentFolder];
  const activeEmail = activeList.find(e => e.id === selectedId);

  const handleSelect = (id: number) => {
    setSelectedId(id);
    // Only mark as read if we are in Inbox and it has an unread property
    if (currentFolder === 'Inbox') {
      setEmails(prev => ({
        ...prev,
        Inbox: prev.Inbox.map(e => e.id === id ? { ...e, unread: false } : e)
      }));
    }
  };

  const handleSend = () => {
    const newEmail: Email = {
      id: Date.now(),
      to: composeTo,
      subject: composeSubject,
      date: "Nov 14, 2005",
      body: composeBody
    };
    
    // Add to Sent folder
    setEmails(prev => ({
      ...prev,
      Sent: [newEmail, ...prev.Sent]
    }));

    // Reset and Close
    setIsComposing(false);
    setComposeTo('');
    setComposeSubject('');
    setComposeBody('');
    alert("Message Sent.");
  };

  return (
    <div className="min-h-screen bg-[#3a6ea5] p-4 font-sans text-xs flex flex-col items-center">
      
      <div className="w-full max-w-[1024px] bg-white border border-[#003c74] shadow-2xl h-[85vh] flex flex-col relative">
        
        {/* --- COMPOSE MODAL (Overlay) --- */}
        {isComposing && (
          <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-[#f0f0f0] border-2 border-[#003c74] w-[600px] shadow-2xl">
              <div className="bg-gradient-to-r from-[#003c74] to-[#3a6ea5] text-white p-1 flex justify-between items-center pl-2">
                <span className="font-bold">New Message</span>
                <button onClick={() => setIsComposing(false)} className="bg-[#d12f2f] px-2 border border-white/50 text-white font-bold">X</button>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className="w-16 text-right font-bold text-gray-600">To:</span>
                  <input value={composeTo} onChange={e => setComposeTo(e.target.value)} className="flex-grow border border-gray-400 p-1 bg-white" />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-16 text-right font-bold text-gray-600">Cc:</span>
                  <input className="flex-grow border border-gray-400 p-1 bg-white" />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-16 text-right font-bold text-gray-600">Subject:</span>
                  <input value={composeSubject} onChange={e => setComposeSubject(e.target.value)} className="flex-grow border border-gray-400 p-1 bg-white" />
                </div>
                <textarea 
                  value={composeBody} 
                  onChange={e => setComposeBody(e.target.value)} 
                  className="w-full h-64 border border-gray-400 p-2 mt-2 font-mono text-sm bg-white"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button onClick={() => setIsComposing(false)} className="px-4 py-1 border border-gray-400 bg-gray-200 hover:bg-white">Discard</button>
                  <button onClick={handleSend} className="px-6 py-1 border border-[#003c74] bg-[#0050aa] text-white font-bold hover:bg-[#003c74]">Send</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- OUTLOOK HEADER --- */}
        <div className="bg-[#003c74] text-white p-2 flex justify-between items-center border-b border-[#639ace]">
          <div className="flex items-center gap-2">
             <div className="font-bold text-lg">Microsoft Outlook Web Access</div>
             <span className="bg-yellow-500 text-black px-1 text-[10px] font-bold rounded">Connected to Exchange Server</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="font-bold text-yellow-300">User: Marcus Vane (CEO)</span>
            <Link href="/" className="bg-[#d12f2f] hover:bg-[#ff4d4d] text-white px-2 py-1 rounded text-[10px] font-bold">Log Off</Link>
          </div>
        </div>

        {/* --- TOOLBAR --- */}
        <div className="bg-[#d3e5fa] border-b border-[#a0b6cc] p-1 flex gap-2 shadow-sm relative z-10">
          <button onClick={() => setIsComposing(true)} className="flex items-center gap-1 border border-transparent hover:border-[#003c74] hover:bg-[#ffe1ac] px-2 py-1 transition-colors cursor-pointer">
            <span>✉️</span> New
          </button>
          <button className="flex items-center gap-1 border border-transparent hover:border-[#003c74] hover:bg-[#ffe1ac] px-2 py-1 transition-colors cursor-pointer">
            <span>❌</span> Delete
          </button>
          <div className="ml-auto flex items-center gap-2 text-gray-500">
             <span>🔍</span>
             <input type="text" placeholder="Search Inbox" className="border border-[#a0b6cc] px-1 text-[10px]" />
          </div>
        </div>

        {/* --- MAIN LAYOUT --- */}
        <div className="flex flex-grow overflow-hidden">
          
          {/* SIDEBAR */}
          <div className="w-48 bg-[#f3f3f3] border-r border-[#999] p-2 flex flex-col gap-1 shrink-0 select-none">
            <div className="font-bold text-[#003c74] mb-2 px-2">Mailbox - Vane, M.</div>
            
            <div onClick={() => setCurrentFolder('Inbox')} className={`flex justify-between px-2 py-1 cursor-pointer border ${currentFolder === 'Inbox' ? 'bg-[#d3e5fa] border-[#003c74]' : 'border-transparent hover:bg-[#e0e0e0]'}`}>
              <span>Inbox</span>
              {/* Only verify unread if unread exists on the item */}
              <span className="font-bold text-blue-800">({emails.Inbox.filter(e => e.unread).length})</span>
            </div>

            <div onClick={() => setCurrentFolder('Drafts')} className={`px-2 py-1 cursor-pointer border ${currentFolder === 'Drafts' ? 'bg-[#d3e5fa] border-[#003c74]' : 'border-transparent hover:bg-[#e0e0e0]'}`}>
              Drafts
            </div>

            <div onClick={() => setCurrentFolder('Sent')} className={`px-2 py-1 cursor-pointer border ${currentFolder === 'Sent' ? 'bg-[#d3e5fa] border-[#003c74]' : 'border-transparent hover:bg-[#e0e0e0]'}`}>
              Sent Items
            </div>

            <div onClick={() => setCurrentFolder('Deleted')} className={`px-2 py-1 cursor-pointer border ${currentFolder === 'Deleted' ? 'bg-[#d3e5fa] border-[#003c74]' : 'border-transparent hover:bg-[#e0e0e0]'}`}>
              Deleted Items
            </div>

            <div className="px-2 py-1 cursor-pointer hover:bg-[#e0e0e0] text-red-600 mt-4">Junk E-mail (99+)</div>
          </div>

          {/* EMAIL LIST */}
          <div className="w-80 border-r border-[#999] bg-white overflow-y-auto shrink-0 flex flex-col">
            {activeList.map((email) => (
              <div 
                key={email.id}
                onClick={() => handleSelect(email.id)}
                className={`
                  p-2 border-b border-[#e0e0e0] cursor-pointer text-[11px] leading-tight flex flex-col gap-1 select-none
                  ${selectedId === email.id ? 'bg-[#4f81bd] text-white' : 'hover:bg-[#fffcd6] text-black'}
                `}
              >
                <div className="flex justify-between items-center w-full">
                  {/* Dynamic 'To' or 'From' depending on folder */}
                  <span className={`truncate w-32 ${email.unread ? 'font-bold' : ''}`}>
                    {currentFolder === 'Sent' ? `To: ${email.to}` : email.from}
                  </span>
                  <span className={`text-[10px] ${selectedId === email.id ? 'text-blue-100' : 'text-gray-500'}`}>
                    {email.date}
                  </span>
                </div>
                <div className={`truncate ${email.unread ? 'font-bold' : ''} ${selectedId === email.id ? 'text-white' : 'text-[#003c74]'}`}>
                  {email.subject}
                </div>
              </div>
            ))}
          </div>

          {/* READING PANE */}
          <div className="flex-grow bg-white p-6 overflow-y-auto relative">
            {activeEmail ? (
              <div className="flex flex-col gap-4 animate-fadeIn">
                 {/* HEADER */}
                 <div className="bg-[#e3efff] border-b border-[#999] pb-4 p-4 rounded-t-sm shadow-sm">
                   <h2 className="text-lg font-bold text-[#003c74] mb-2">{activeEmail.subject}</h2>
                   <div className="text-gray-700 space-y-1">
                     <p><strong>From:</strong> {currentFolder === 'Sent' ? 'Me' : activeEmail.from}</p>
                     <p><strong>To:</strong> {currentFolder === 'Sent' ? activeEmail.to : 'Me'}</p>
                     <p><strong>Date:</strong> {activeEmail.date}</p>
                   </div>
                 </div>
                 {/* BODY */}
                 <div className="whitespace-pre-wrap text-sm leading-relaxed font-serif text-gray-800 p-2">
                   {activeEmail.body}
                 </div>
              </div>
            ) : (
              // EMPTY STATE
              <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-20">microsoft</div>
                  <div className="text-4xl opacity-50 font-bold">Outlook</div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* FOOTER */}
        <div className="bg-[#f3f3f3] text-gray-500 text-[10px] p-1 border-t border-[#ccc] flex justify-between">
          <span>Items: {activeList.length}</span>
          <span>NexLife Secure Exchange Server v2.0 | Connected</span>
        </div>

      </div>
    </div>
  );
}