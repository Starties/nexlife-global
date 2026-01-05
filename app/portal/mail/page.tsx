'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- TYPE DEFINITION ---
interface Email {
  id: number;
  subject: string;
  date: string;
  body: string;
  from?: string; // Present in Inbox
  to?: string;   // Present in Sent/Drafts
  unread?: boolean;
  attachment?: string; // Fake file name
  corrupted?: boolean; // Glitch effect
}

// --- LORE: THE CEO'S DATA ---
const INBOX: Email[] = [
  { 
    id: 1, 
    from: "SYSTEM_ROOT", 
    subject: "CRITICAL_FAILURE_SECTOR_4", 
    date: "Nov 14, 2005", 
    unread: true, 
    corrupted: true,
    body: "E̶R̶R̶O̶R̶:̶ ̶C̶o̶n̶s̶c̶i̶o̶u̶s̶n̶e̶s̶s̶ ̶L̶e̶a̶k̶ ̶d̶e̶t̶e̶c̶t̶e̶d̶.\n\nSubject #894 is broadcasting panic signals across the Eden Cluster. Bandwidth is destabilizing. \n\nRECOMMENDATION: Immediate purge of Sector 4." 
  },
  { 
    id: 2, 
    from: "Vanguard Capital", 
    subject: "URGENT: Quarterly Expense Report", 
    date: "Nov 14, 2005", 
    unread: true, 
    body: "Marcus,\n\nThe board is looking at the 'Logistics' expense report. Why are we spending $40k a month on liquid nitrogen? I thought the protocol was to dump the organic material in the ocean?\n\nIf the 'Ethical Disposal' costs don't go down, we miss our Q4 targets. Fix it.\n\n- Sterling" 
  },
  { 
    id: 3, 
    from: "Dr. Aris Thorne", 
    subject: "Client #894 (The Screaming)", 
    date: "Nov 13, 2005", 
    unread: true, 
    attachment: "audio_log_894.wav",
    body: "He won't stop screaming, Marcus. It's been 48 hours.\n\nWe deleted his vocal cords in the simulation, but he's projecting the sound directly into the code. Other clients are starting to hear him in their dreams.\n\nI recommend we format his drive. It's a total loss." 
  },
  { 
    id: 4, 
    from: "Operations (Basement)", 
    subject: "Incinerator B Clogged AGAIN", 
    date: "Nov 13, 2005", 
    unread: false, 
    body: "We have a backlog of 40 'empty vessels' (bodies) on the loading dock. Incinerator B is jammed with bone fragments again.\n\nThe smell is leaking into the lobby. I saw a tour group cover their noses today. We need a bone grinder installed ASAP." 
  },
  { 
    id: 5, 
    from: "Sarah (HR)", 
    subject: "Office Potluck!", 
    date: "Nov 12, 2005", 
    unread: false, 
    body: "Hi Team! :)\n\nJust a reminder that the Thanksgiving Potluck is this Friday! Please bring a dish.\n\n(Reminder: Please do not store biological samples in the breakroom fridge. Looking at you, Research Team.)" 
  },
  { 
    id: 6, 
    from: "Senator Harlan Crouch", 
    subject: "RE: The Payment", 
    date: "Nov 10, 2005", 
    unread: false, 
    body: "The wire transfer didn't go through. If I don't see that money by tomorrow, I'm letting the Preservation Act go to a vote.\n\nDon't test me, Vane. I know where you bury the mistakes." 
  },
];

const SENT: Email[] = [
  { id: 101, to: "Dr. Aris Thorne", subject: "RE: Client #894", date: "Nov 13, 2005", body: "Do NOT format him. He is our poster boy. Put him in a dark box simulation. Isolate him. Just make the noise stop." },
  { id: 102, to: "Operations", subject: "RE: Incinerator", date: "Nov 13, 2005", body: "Use the Acid Bath if the furnace is down. I don't care about the smell. Just get rid of the evidence before the inspectors arrive on Friday." },
  { id: 103, to: "Travel Agent", subject: "One-Way to Maldives", date: "Nov 12, 2005", body: "Book it. First class. I'm not coming back." },
];

const DRAFTS: Email[] = [
  { 
    id: 301, 
    to: "Everyone", 
    subject: "I am sorry", 
    date: "Nov 14, 2005", 
    body: "I can't do this anymore. I lied. There is no Heaven. The server isn't a paradise, it's a jar. We just put them in a jar and shook it.\n\nGod forgive me. I'm going to turn it off. I'm going to turn it all off." 
  },
];

const DELETED: Email[] = [
  { id: 401, from: "Spam Filter", subject: "Enlarge your... Portfolio", date: "Oct 30, 2005", body: "[SPAM DETECTED]" },
  { id: 402, from: "Mom", subject: "Please come home", date: "Oct 25, 2005", body: "Marcus, why won't you answer my calls? Your father is worried." },
];

export default function MailPage() {
  // STATE
  const [currentFolder, setCurrentFolder] = useState<string>('Inbox');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  // We explicitly type the state
  const [emails, setEmails] = useState<{ [key: string]: Email[] }>({ 
    Inbox: INBOX, Sent: SENT, Deleted: DELETED, Drafts: DRAFTS 
  });
  
  // COMPOSE STATE
  const [isComposing, setIsComposing] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');

  // HELPERS
  const activeList = emails[currentFolder];
  const activeEmail = activeList.find(e => e.id === selectedId);

  // Fake "New Mail" checker
  useEffect(() => {
    const timer = setTimeout(() => {
      // Logic for incoming mail sound could go here
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (id: number) => {
    setSelectedId(id);
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
    setEmails(prev => ({ ...prev, Sent: [newEmail, ...prev.Sent] }));
    setIsComposing(false);
    setComposeTo('');
    setComposeSubject('');
    setComposeBody('');
    alert("Message Sent.");
  };

  return (
    <div className="min-h-screen bg-[#5b7fa3] p-4 font-sans text-xs flex flex-col items-center select-none" style={{ fontFamily: 'Verdana, sans-serif' }}>
      
      {/* --- OUTLOOK CONTAINER --- */}
      <div className="w-full max-w-[1024px] bg-white border-2 border-[#003c74] shadow-[10px_10px_20px_rgba(0,0,0,0.3)] h-[85vh] flex flex-col relative">
        
        {/* COMPOSE MODAL */}
        {isComposing && (
          <div className="absolute inset-0 z-50 bg-black/40 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-[#ece9d8] border-2 border-[#003c74] w-[600px] shadow-2xl rounded-t-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#0050aa] to-[#3a6ea5] text-white p-1 px-2 flex justify-between items-center font-bold">
                <span>New Message</span>
                <button onClick={() => setIsComposing(false)} className="bg-[#d12f2f] px-2 text-white border border-white/30 hover:bg-red-600">X</button>
              </div>
              <div className="p-4 flex flex-col gap-2 font-sans">
                <div className="flex gap-2 items-center">
                  <span className="w-16 text-right font-bold text-[#444]">To:</span>
                  <input value={composeTo} onChange={e => setComposeTo(e.target.value)} className="flex-grow border border-[#7f9db9] p-1 shadow-inner" />
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-16 text-right font-bold text-[#444]">Subject:</span>
                  <input value={composeSubject} onChange={e => setComposeSubject(e.target.value)} className="flex-grow border border-[#7f9db9] p-1 shadow-inner" />
                </div>
                <textarea 
                  value={composeBody} 
                  onChange={e => setComposeBody(e.target.value)} 
                  className="w-full h-64 border border-[#7f9db9] p-2 mt-2 font-mono text-sm shadow-inner"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <button onClick={() => setIsComposing(false)} className="px-4 py-1 border border-gray-400 bg-gray-200 hover:bg-white shadow-sm">Discard</button>
                  <button onClick={handleSend} className="px-6 py-1 border border-[#003c74] bg-[#0050aa] text-white font-bold hover:bg-[#003c74] shadow-sm">Send</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- HEADER --- */}
        <div className="bg-gradient-to-b from-[#89aace] to-[#5581b1] text-white p-2 flex justify-between items-center border-b border-[#003c74]">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 bg-[#E68A00] text-white flex items-center justify-center font-serif font-bold text-sm border border-white/50 shadow-inner">O</div>
             <div className="font-bold text-lg drop-shadow-md">Outlook Web Access</div>
             <span className="bg-[#ffcc00] text-black px-1 text-[9px] font-bold border border-black/20 shadow-sm ml-2">EXCHANGE 2003</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="font-bold text-white drop-shadow-md">User: Marcus Vane (CEO)</span>
            <Link href="/" className="bg-[#d12f2f] border border-red-800 hover:bg-[#ff4d4d] text-white px-3 py-0.5 rounded-sm text-[10px] font-bold shadow-sm">Log Off</Link>
          </div>
        </div>

        {/* --- TOOLBAR --- */}
        <div className="bg-gradient-to-b from-[#f6f6f6] to-[#d2d2d2] border-b border-[#999] p-1 flex gap-2 shadow-sm relative z-10">
          <button onClick={() => setIsComposing(true)} className="flex items-center gap-1 border border-gray-400 hover:border-[#003c74] bg-[#eaeaea] hover:bg-[#ffe1ac] px-2 py-0.5 transition-colors cursor-pointer shadow-sm text-[#333]">
            <span>📝</span> New
          </button>
          <button className="flex items-center gap-1 border border-gray-400 hover:border-[#003c74] bg-[#eaeaea] hover:bg-[#ffe1ac] px-2 py-0.5 transition-colors cursor-pointer shadow-sm text-[#333]">
            <span>🗑️</span> Delete
          </button>
          <div className="ml-auto flex items-center gap-2 text-gray-500 border-l border-gray-400 pl-2">
             <span className="text-[10px]">Connected to Microsoft Exchange</span>
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* --- MAIN LAYOUT --- */}
        <div className="flex flex-grow overflow-hidden">
          
          {/* SIDEBAR */}
          <div className="w-48 bg-[#ece9d8] border-r border-[#999] flex flex-col shrink-0 select-none pt-2">
            <div className="font-bold text-[#333] mb-2 px-3 text-[11px] uppercase tracking-wide opacity-50">Mailbox</div>
            
            {['Inbox', 'Drafts', 'Sent', 'Deleted'].map((folder) => (
              <div 
                key={folder}
                onClick={() => { setCurrentFolder(folder); setSelectedId(null); }}
                className={`
                  flex justify-between px-3 py-1 cursor-pointer items-center border-l-4
                  ${currentFolder === folder 
                    ? 'bg-[#c1d2ee] border-[#003c74] text-black font-bold' 
                    : 'border-transparent hover:bg-[#e0e0e0] text-gray-700'}
                `}
              >
                <span>{folder}</span>
                {folder === 'Inbox' && emails.Inbox.some(e => e.unread) && (
                  <span className="font-bold text-[#003c74] bg-white px-1 rounded-sm text-[9px] border border-[#003c74]">
                    {emails.Inbox.filter(e => e.unread).length}
                  </span>
                )}
              </div>
            ))}
            
            <div className="mt-8 px-3 font-bold text-[#333] mb-1 text-[11px] uppercase tracking-wide opacity-50">Folders</div>
            <div className="px-3 py-1 text-gray-500 hover:bg-[#e0e0e0] cursor-not-allowed">Junk E-mail</div>
            <div className="px-3 py-1 text-gray-500 hover:bg-[#e0e0e0] cursor-not-allowed">Calendar</div>
            <div className="px-3 py-1 text-gray-500 hover:bg-[#e0e0e0] cursor-not-allowed">Contacts</div>
          </div>

          {/* EMAIL LIST */}
          <div className="w-80 border-r border-[#999] bg-white overflow-y-auto shrink-0 flex flex-col">
            {activeList.map((email) => (
              <div 
                key={email.id}
                onClick={() => handleSelect(email.id)}
                className={`
                  p-2 border-b border-[#dcdcdc] cursor-pointer text-[11px] leading-tight flex flex-col gap-1
                  ${selectedId === email.id ? 'bg-[#316ac5] text-white' : 'hover:bg-[#f7f7f7] text-black'}
                `}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`truncate w-32 ${email.unread ? 'font-bold' : ''}`}>
                    {/* LOGIC: In 'Sent', show who we sent TO. In 'Inbox', show FROM. */}
                    {currentFolder === 'Sent' || currentFolder === 'Drafts' ? `To: ${email.to || 'Unknown'}` : email.from}
                  </span>
                  <span className={`text-[10px] ${selectedId === email.id ? 'text-blue-100' : 'text-gray-400'}`}>
                    {email.date}
                  </span>
                </div>
                
                <div className={`truncate ${email.unread ? 'font-bold' : ''} ${selectedId === email.id ? 'text-white' : 'text-[#003c74]'}`}>
                  {email.corrupted ? '⚠️ ' : ''}
                  {email.attachment ? '📎 ' : ''}
                  {email.subject}
                </div>
              </div>
            ))}
          </div>

          {/* READING PANE */}
          <div className="flex-grow bg-white overflow-y-auto relative p-6">
            {activeEmail ? (
              <div className="flex flex-col gap-4 animate-fadeIn">
                 {/* EMAIL HEADER */}
                 <div className="bg-[#f2f2f2] border border-[#999] p-4 shadow-sm relative">
                   {activeEmail.corrupted && (
                     <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase animate-pulse">
                       System Corruption Detected
                     </div>
                   )}
                   <h2 className="text-lg font-bold text-[#003c74] mb-3">{activeEmail.subject}</h2>
                   <div className="text-gray-700 space-y-1 text-sm border-t border-gray-300 pt-2">
                     <p><strong className="text-[#555]">From:</strong> {currentFolder === 'Sent' || currentFolder === 'Drafts' ? 'Marcus Vane (Me)' : activeEmail.from}</p>
                     <p><strong className="text-[#555]">To:</strong> {currentFolder === 'Sent' || currentFolder === 'Drafts' ? activeEmail.to : 'Marcus Vane (Me)'}</p>
                     <p><strong className="text-[#555]">Date:</strong> {activeEmail.date}</p>
                   </div>
                   
                   {/* FAKE ATTACHMENT COMPONENT */}
                   {activeEmail.attachment && (
                     <div className="mt-4 flex items-center gap-2 p-2 bg-white border border-gray-300 w-fit cursor-not-allowed opacity-80 hover:bg-red-50" title="File corrupted">
                        <div className="w-6 h-8 bg-gray-200 border border-gray-400 flex items-center justify-center text-[10px]">WAV</div>
                        <div className="text-xs text-blue-800 underline">{activeEmail.attachment} (4.2 MB)</div>
                     </div>
                   )}
                 </div>

                 {/* EMAIL BODY */}
                 <div className={`whitespace-pre-wrap text-sm leading-relaxed font-serif text-gray-800 p-2 ${activeEmail.corrupted ? 'font-mono text-red-700' : ''}`}>
                   {activeEmail.body}
                 </div>
              </div>
            ) : (
              // EMPTY STATE
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 select-none">
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-20">microsoft</div>
                  <div className="text-3xl opacity-40 font-bold tracking-tight">Outlook Web Access</div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* FOOTER */}
        <div className="bg-[#ece9d8] text-gray-600 text-[10px] p-1 border-t border-[#999] flex justify-between px-2">
          <span>Items: {activeList.length}</span>
          <span>NexLife Secure Exchange Server v2.0 | Connected to: NXL-ARL-01</span>
        </div>

      </div>
    </div>
  );
}