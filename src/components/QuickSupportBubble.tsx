import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, Mail, ChevronDown, ChevronUp, Bot, User, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/skymirrData';

interface QuickSupportBubbleProps {
  onRequestEvaluation: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const QuickSupportBubble: React.FC<QuickSupportBubbleProps> = ({ onRequestEvaluation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'faq'>('chat');
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Hello! Welcome to SkyMirr Technologies Support. How can our Melbourne RF engineering team assist you today?',
      time: 'Just now',
    },
  ]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does MuLCAT™ achieve +42% greater 5G tower reach?',
      a: 'Traditional multi-antenna devices suffer from destructive mutual coupling that dissipates signal energy. MuLCAT™ (Multi-Layer Coupling Controlled Antenna Technology) employs proprietary substrate layer geometry that transforms mutual coupling into constructive electromagnetic resonance, increasing effective isotropic radiated power (EIRP) especially in low 600 MHz to 700 MHz bands.',
    },
    {
      q: 'Is the Sky5G Router (TCPA 117) carrier certified?',
      a: 'Yes! The Sky5G router is certified for the T-Mobile 5G Network and is approved for T-Priority (First Responders Tier-1). It has also achieved AT&T certification and meets FCC Part 15/27 and PTCRB regulatory standards.',
    },
    {
      q: 'How do I request an evaluation unit or antenna samples?',
      a: 'Qualified OEMs, enterprise network architects, and system integrators can request evaluation loaners and antenna engineering samples by submitting our Contact form or contacting our sales desk at sales@skymirr.com.',
    },
    {
      q: 'Where can I download product datasheets and firmware?',
      a: 'Technical datasheets are available directly via the "Datasheet PDF" links on each product. For firmware updates, submit your device serial number via our contact portal or email support@skymirr.com.',
    },
    {
      q: 'What makes SkyBlade™ antennas different from standard 5G antennas?',
      a: 'SkyBlade antennas deliver continuous radiation efficiency (>75%) from 600 MHz to 6000 MHz without efficiency dips in Band 71, and feature inter-port isolation exceeding 25 dB for compact 4x4 and 8x8 MIMO systems.',
    },
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    setTimeout(() => {
      let botReply = "Thank you for reaching out! A SkyMirr technical specialist from our Melbourne, FL team has been notified. You can also reach our direct support desk at 321-393-1039.";
      const lower = text.toLowerCase();
      if (lower.includes('sample') || lower.includes('evaluat') || lower.includes('quote') || lower.includes('test')) {
        botReply = "You can request evaluation loaners or sample units directly through our Contact form. Would you like to connect with our sales team?";
      } else if (lower.includes('router') || lower.includes('tcpa') || lower.includes('sky5g') || lower.includes('wifi 7')) {
        botReply = "The Sky5G® Router (TCPA 117) features Wi-Fi 7 tri-band, internal MuLCAT 8x8 MIMO, dual 2.5GbE ports, and T-Mobile & AT&T certification. Full datasheets are available on this site.";
      } else if (lower.includes('antenna') || lower.includes('tamp') || lower.includes('skyblade')) {
        botReply = "SkyBlade antennas cover continuous 600-6000 MHz spectrum with >75% radiation efficiency and >25 dB isolation. Models include TAMP141 (Omni), TAMP161 (MIMO), and TAMP154 (Directional).";
      } else if (lower.includes('mulcat') || lower.includes('technolog') || lower.includes('patent')) {
        botReply = "MuLCAT™ is SkyMirr's patented positive coupling technology that converts parasitic mutual coupling into constructive electromagnetic radiation, increasing tower distance by +42%.";
      } else if (lower.includes('firmware') || lower.includes('download') || lower.includes('support')) {
        botReply = "Firmware updates are distributed based on your device serial number. Use our 'Download Latest Firmware' section or email support@skymirr.com.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
          time: 'Just now',
        },
      ]);
    }, 500);
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="fixed bottom-6 right-20 z-40 flex flex-col items-end">
      {/* Slide-In Support Dialog Card */}
      {isOpen && (
        <div className="mb-3 w-[92vw] sm:w-[370px] h-[500px] max-h-[80vh] bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-900/15 flex flex-col overflow-hidden animate-fade-in">
          {/* Header in clean light style */}
          <div className="bg-slate-50/90 border-b border-slate-200/80 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-2xs">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">SkyMirr Quick Support</h3>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Melbourne HQ Online · Mon-Fri</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close support dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-slate-200/80 bg-slate-50/50 p-1.5 shrink-0 gap-1">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-white text-blue-700 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Live Chat
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'faq'
                  ? 'bg-white text-blue-700 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Help & FAQ
            </button>
          </div>

          {/* Tab 1: Live Chat */}
          {activeTab === 'chat' && (
            <div className="flex-1 flex flex-col justify-between overflow-hidden p-3.5 space-y-3">
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-2xl p-3 leading-relaxed font-normal ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-sm'
                          : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/60'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className={`block text-[9px] mt-1 text-right font-mono ${
                        msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'
                      }`}>
                        {msg.time}
                      </span>
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-600 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Prompts */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 shrink-0 no-scrollbar">
                <button
                  onClick={() => handleQuickPrompt('How does MuLCAT technology work?')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer border border-slate-200/60"
                >
                  MuLCAT Physics
                </button>
                <button
                  onClick={() => handleQuickPrompt('Tell me about the Sky5G TCPA 117 router')}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer border border-slate-200/60"
                >
                  Sky5G Router Specs
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onRequestEvaluation();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-semibold border border-blue-200 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 shadow-2xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-600" />
                  <span>Request Unit</span>
                </button>
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2 pt-2 border-t border-slate-100"
              >
                <input
                  type="text"
                  placeholder="Ask a technical RF question..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shrink-0 cursor-pointer shadow-sm hover:scale-105"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

          {/* Tab 2: FAQ */}
          {activeTab === 'faq' && (
            <div className="flex-1 overflow-y-auto p-4 space-y-2.5 text-xs">
              {faqs.map((faq, index) => {
                const isItemOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isItemOpen ? null : index)}
                      className="w-full text-left p-3.5 flex items-center justify-between gap-2 hover:bg-slate-50 transition-colors cursor-pointer font-semibold text-slate-900"
                    >
                      <span className="text-xs">{faq.q}</span>
                      {isItemOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isItemOpen && (
                      <div className="p-3.5 pt-0 text-slate-600 text-[11px] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick Contact Footer */}
          <div className="bg-slate-50/90 border-t border-slate-200/80 p-3 px-4 flex items-center justify-between text-[11px] text-slate-500 shrink-0 font-mono">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-blue-700 hover:underline font-bold"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={`mailto:${COMPANY_INFO.emailSupport}`}
              className="flex items-center gap-1.5 text-blue-700 hover:underline font-bold"
            >
              <Mail className="w-3 h-3" />
              <span>{COMPANY_INFO.emailSupport}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all cursor-pointer backdrop-blur-md group"
        aria-label="Toggle Quick Support bubble"
      >
        <span className="relative flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        </span>
        <span className="text-xs font-bold tracking-tight">Quick Help</span>
      </button>
    </div>
  );
};