import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { faqs, siteSettings, navigateTo } = useApp();
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="reference-panel my-6 max-w-[940px] mx-auto px-5 py-8 sm:my-10 sm:px-10 sm:py-11 text-left">
      <div className="mb-10 text-center">
        <div className="eyebrow mb-3">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>Help &amp; Answers</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#182231] font-display mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-[#788697] text-sm sm:text-base max-w-xl mx-auto mb-6">
          Everything you need to know about our cloud, game hosting, and payment gateways.
        </p>

        <button
          type="button"
          onClick={() => navigateTo('support')}
          className="bg-[#2479df] hover:bg-[#1769cc] text-white font-bold text-xs px-6 py-2.5 rounded-full transition-all shadow-md active:scale-95 inline-flex items-center gap-2"
        >
          <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
          <span>Contact 24/7 Support</span>
        </button>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {faqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-[#fbfdff] border border-[#e8eef5] overflow-hidden transition-all duration-200 hover:border-blue-300"
            >
              <button
                type="button"
                id={`faq-item-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[#26384d] hover:text-blue-600 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
