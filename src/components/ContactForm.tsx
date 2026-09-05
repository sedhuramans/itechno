'use client';

import React, { useState } from 'react';
import Title from './Title';
import Image from 'next/image';
import {
  Mail,
  MapPin,
  Send,
  Clock,
  Phone,
  Linkedin,
  Crown,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { chiefDirectors } from '@/data/team-data';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formBody = new FormData();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch('https://formsubmit.co/ajax/itechno2k@gmail.com', {
        method: 'POST',
        body: formBody,
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Title 
          title="CONTACT & LEADERSHIP" 
          className="from-yellow-300 via-white to-blue-400 mb-4"
        />
        <p className="text-center font-kodeMono tracking-widest text-yellow-300/80 text-xs sm:text-sm uppercase mb-14 font-semibold">
          DIRECT CONTACT CHANNELS FOR PARTICIPANTS &amp; INSTITUTIONS
        </p>

        {/* =========================================================================
            CHIEF EVENT DIRECTORS / DIRECT PARTICIPANT CONTACT
           ========================================================================= */}
        <div className="mb-16">
          <div className="flex items-center justify-between border-b border-yellow-500/30 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-400/50 shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <Crown className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="text-[10px] font-kodeMono uppercase tracking-[0.25em] text-amber-400 font-bold block">
                  EXECUTIVE BOARD
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-amber-400">
                  CHIEF EVENT DIRECTORS
                </h3>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-kodeMono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              DIRECT PARTICIPANT HOTLINE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {chiefDirectors.map((director) => (
              <div
                key={director.name}
                className="relative rounded-[24px] border border-amber-500/40 bg-[#05070e]/95 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:border-amber-400/80 transition-all duration-500 group overflow-hidden"
              >
                {/* Ambient Behind Glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                  {/* Photo with glowing frame */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-blue-500 shadow-[0_0_25px_rgba(212,175,55,0.4)] overflow-hidden">
                      <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#05070e]">
                        {director.image ? (
                          <Image
                            src={director.image}
                            alt={director.name}
                            fill
                            sizes="128px"
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center font-orbitron font-black text-3xl text-amber-300">
                            {director.initials || 'CD'}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 right-1/2 translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#05070e] border border-amber-400 flex items-center gap-1 shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      <span className="text-[8px] font-kodeMono font-bold text-amber-300 uppercase tracking-widest">
                        DIRECTOR
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center w-full">
                    <span className="text-[10px] font-kodeMono uppercase tracking-[0.2em] text-amber-400 font-bold mb-1">
                      {director.role}
                    </span>
                    <h4 className="text-2xl font-black font-orbitron text-white tracking-wide mb-2 group-hover:text-amber-200 transition-colors">
                      {director.name}
                    </h4>
                    <p className="text-xs font-inter text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {director.bio}
                    </p>

                    {/* Direct Contact Links */}
                    <div className="flex flex-col gap-2 font-kodeMono text-xs w-full min-w-0">
                      {director.phone && (
                        <a
                          href={`tel:${director.phone.replace(/\s+/g, '')}`}
                          className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-3 py-1.5 rounded-xl bg-amber-950/60 border border-amber-400/40 text-amber-200 hover:bg-amber-400 hover:text-black transition-all font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)] min-w-0"
                        >
                          <Phone className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                          <span className="truncate">{director.phone}</span>
                        </a>
                      )}

                      {director.email && (
                        <a
                          href={`mailto:${director.email}`}
                          className="inline-flex items-center justify-center sm:justify-start gap-2.5 px-3 py-1.5 rounded-xl bg-black/60 border border-amber-500/25 text-slate-300 hover:border-amber-400 hover:text-amber-200 transition-all min-w-0"
                        >
                          <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span className="truncate">{director.email}</span>
                        </a>
                      )}
                    </div>

                    {/* LinkedIn Button */}
                    {director.linkedin && (
                      <div className="mt-3 flex justify-center sm:justify-start">
                        <a
                          href={director.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-blue-500/40 bg-blue-950/50 text-blue-300 hover:bg-blue-600 hover:text-white transition-all text-xs font-kodeMono shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          <span>Connect on LinkedIn</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TRANSMISSION FORM & DIRECTORY
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-orbitron font-bold text-white tracking-widest mb-6 border-b border-yellow-500/30 pb-4 inline-block">
              CENTRAL DIRECTORY
            </h3>

            {/* Email */}
            <div className="group p-6 rounded-[22px] border border-yellow-500/25 bg-[#05070e]/85 backdrop-blur-xl hover:border-yellow-400/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-3.5 rounded-xl bg-[#030508] border border-yellow-500/30 text-yellow-400 group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h4 className="text-yellow-300/80 font-kodeMono text-[10px] tracking-[0.2em] mb-1 uppercase font-bold">Official_Mail</h4>
                  <a href="mailto:itechno2k@gmail.com" className="text-slate-200 font-inter hover:text-white transition-colors text-sm sm:text-base tracking-wide font-medium">
                    itechno2k@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="group p-6 rounded-[22px] border border-yellow-500/25 bg-[#05070e]/85 backdrop-blur-xl hover:border-blue-400/60 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-3.5 rounded-xl bg-[#030508] border border-blue-500/30 text-blue-400 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h4 className="text-blue-300/80 font-kodeMono text-[10px] tracking-[0.2em] mb-1 uppercase font-bold">Festival_Venue</h4>
                  <p className="text-slate-200 font-inter text-sm sm:text-base tracking-wide leading-relaxed">
                    Takshashila University, Ongur, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="group p-6 rounded-[22px] border border-yellow-500/25 bg-[#05070e]/85 backdrop-blur-xl hover:border-yellow-400/60 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="p-3.5 rounded-xl bg-[#030508] border border-yellow-500/30 text-yellow-400 group-hover:border-yellow-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                  <Clock size={22} />
                </div>
                <div className="flex flex-col justify-center pt-1">
                  <h4 className="text-yellow-300/80 font-kodeMono text-[10px] tracking-[0.2em] mb-1 uppercase font-bold">Query_Turnaround</h4>
                  <p className="text-slate-200 font-inter text-sm sm:text-base tracking-wide">
                    Standard Response ≈ 24-48 HRS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-[24px] border border-yellow-500/30 bg-[#05070e]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
              
              {/* Decorative corners (Gold & Sapphire) */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-400/70 rounded-tl-[24px]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/70 rounded-br-[24px]" />

              <h3 className="text-xl font-orbitron font-bold text-white tracking-widest mb-8">TRANSMIT INQUIRY</h3>

              {success && (
                <div className="mb-8 p-4 rounded-xl bg-emerald-950/60 border border-emerald-400/60 text-emerald-200 text-sm font-kodeMono tracking-widest uppercase text-center flex items-center justify-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Transmission Sent Successfully
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-yellow-300 font-kodeMono text-[10px] tracking-[0.2em] uppercase font-bold">
                     FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-5 py-3 rounded-xl bg-[#030508] border border-yellow-500/25 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:bg-yellow-400/5 focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all font-inter"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-yellow-300 font-kodeMono text-[10px] tracking-[0.2em] uppercase font-bold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@domain.com"
                    className="w-full px-5 py-3 rounded-xl bg-[#030508] border border-yellow-500/25 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:bg-yellow-400/5 focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all font-inter"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-yellow-300 font-kodeMono text-[10px] tracking-[0.2em] uppercase font-bold">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-3 rounded-xl bg-[#030508] border border-yellow-500/25 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:bg-yellow-400/5 focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all font-inter"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-yellow-300 font-kodeMono text-[10px] tracking-[0.2em] uppercase font-bold">
                    INQUIRY TOPIC *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    aria-label="Subject"
                    title="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-form-select w-full px-5 py-3 rounded-xl bg-[#030508] border border-yellow-500/25 text-white focus:border-yellow-400 focus:bg-yellow-400/5 focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all font-inter appearance-none"
                  >
                    <option value="" disabled>Select Category...</option>
                    <option value="Registration">Event Registration &amp; Rules</option>
                    <option value="Sponsorship">Sponsorship &amp; Collaboration</option>
                    <option value="Technical">Technical &amp; Platform Support</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 mb-8">
                <label className="block text-yellow-300 font-kodeMono text-[10px] tracking-[0.2em] uppercase font-bold">
                  MESSAGE / INQUIRY *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your question or inquiry here..."
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-[#030508] border border-yellow-500/25 text-white placeholder:text-slate-500 focus:border-yellow-400 focus:bg-yellow-400/5 focus:outline-none focus:ring-4 focus:ring-yellow-400/10 transition-all resize-none font-inter"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 text-black font-kodeMono font-bold tracking-[0.2em] uppercase rounded-xl hover:from-yellow-300 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center gap-3 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform text-black" />
                {loading ? 'SENDING...' : 'TRANSMIT INQUIRY'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
