import React, { useState } from "react";

/* "CONNECT WITH AN EXPERT" from https://skymirr.com/ .
   There is no backend in this project, so submit opens a pre-filled email
   to the sales address shown on the live site. */
export const ConnectExpertSection: React.FC = () => {
  const [f, setF] = useState({ name: "", phone: "", email: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((c) => ({ ...c, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\n\n${f.message}`;
    window.location.href = `mailto:sales@skymirr.com?subject=${encodeURIComponent(
      "Connect with an expert"
    )}&body=${encodeURIComponent(body)}`;
  };

  const input =
    "w-full rounded-xl border border-[#C9D6EE] bg-white px-4 py-3 text-[15px] text-[#0B1F3A] placeholder:text-[#5B6B82] focus:outline-none focus:border-[#1F4FD8]";

  return (
    <section className="py-20 sm:py-28 bg-[#F6F0E6] border-t border-[#E3D4BA]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0B1F3A] uppercase">
          Connect with an Expert
        </h2>
        <p className="text-base sm:text-lg text-[#243247]">
          Contact the SkyMirr Team for Sales Support or Technical Guidance
        </p>
        <form onSubmit={submit} className="space-y-4 text-left">
          <input className={input} placeholder="Name" value={f.name} onChange={set("name")} required />
          <input className={input} placeholder="Phone" type="tel" value={f.phone} onChange={set("phone")} />
          <input className={input} placeholder="Email" type="email" value={f.email} onChange={set("email")} required />
          <textarea className={input} placeholder="Message" rows={4} value={f.message} onChange={set("message")} />
          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#1F4FD8] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
          >
            Connect
          </button>
        </form>
      </div>
    </section>
  );
};