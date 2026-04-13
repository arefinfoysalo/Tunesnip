/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Play, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight, 
  X,
  Eye,
  Users,
  Clock,
  ExternalLink
} from 'lucide-react';

// --- Configuration & Data ---

// USER INSTRUCTION: Update these stats manually as needed
const SITE_STATS = {
  facebookFollowers: "15,425",
  instagramFollowers: "8,751",
  totalViews: "850,259"
};

interface Feedback {
  id: string;
  name: string;
  text: string;
  timestamp: number;
}

// --- Components ---

export default function App() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('tunesnip_community_feedback');
    if (saved) setFeedbacks(JSON.parse(saved));
  }, []);

  const handleAddFeedback = (name: string, text: string) => {
    const newItem: Feedback = {
      id: Date.now().toString(),
      name,
      text,
      timestamp: Date.now()
    };
    const updated = [newItem, ...feedbacks];
    setFeedbacks(updated);
    localStorage.setItem('tunesnip_community_feedback', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand-primary selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Play className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter text-brand-primary">TuneSnip</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-brand-secondary uppercase tracking-widest">
            <a href="#feed" className="hover:text-brand-primary transition-colors">Latest Feed</a>
            <a href="#feedback" className="hover:text-brand-primary transition-colors">Feedback</a>
            <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/TuneSnip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 rounded-full transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/tunesnip?igsh=NDcxd2dmNzNreDd1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-50 hover:bg-pink-50 hover:text-pink-600 rounded-full transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-brand-primary/10"
              >
                Premium Music & Cinema Clips
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-10 tracking-tighter"
              >
                Vibrant short clips of all kinds of music.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-brand-secondary mb-12 leading-relaxed max-w-2xl font-medium"
              >
                Enjoy vibrant short clips of all kinds of music – with a special focus on Bangladeshi band songs.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-5 mb-20"
              >
                <a 
                  href="https://www.facebook.com/TuneSnip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-black transition-all premium-shadow hover:-translate-y-1"
                >
                  <Facebook className="w-5 h-5" />
                  Follow on Facebook
                </a>
                <a 
                  href="https://www.instagram.com/tunesnip?igsh=NDcxd2dmNzNreDd1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-brand-primary border-2 border-gray-100 rounded-2xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-all premium-shadow hover:-translate-y-1"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-10 bg-white rounded-[40px] border border-gray-100 premium-shadow"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-brand-secondary text-xs font-bold uppercase tracking-widest">
                    <Facebook className="w-4 h-4 text-blue-600" />
                    FB Followers
                  </div>
                  <div className="text-4xl font-display font-bold tracking-tighter">
                    {SITE_STATS.facebookFollowers}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-brand-secondary text-xs font-bold uppercase tracking-widest">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    IG Followers
                  </div>
                  <div className="text-4xl font-display font-bold tracking-tighter">
                    {SITE_STATS.instagramFollowers}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-brand-secondary text-xs font-bold uppercase tracking-widest">
                    <Eye className="w-4 h-4 text-brand-primary" />
                    Total Views
                  </div>
                  <div className="text-4xl font-display font-bold tracking-tighter">
                    {SITE_STATS.totalViews}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-400 rounded-full blur-[100px]" />
          </div>
        </section>

        {/* Social Pages Section */}
        <section id="feed" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-display font-bold mb-6 tracking-tighter"
              >
                Our Social Presence
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-brand-secondary font-medium"
              >
                Visit and follow our official Facebook and Instagram pages directly.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Facebook Page Plugin */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] overflow-hidden border border-gray-100 premium-shadow h-[600px] flex flex-col"
              >
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-lg">Facebook Page</span>
                  </div>
                  <a href="https://www.facebook.com/TuneSnip" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex-grow bg-gray-50 relative">
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTuneSnip&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </motion.div>

              {/* Instagram Page Embed */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] overflow-hidden border border-gray-100 premium-shadow h-[600px] flex flex-col"
              >
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-lg">Instagram Profile</span>
                  </div>
                  <a href="https://www.instagram.com/tunesnip" target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:text-brand-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex-grow bg-gray-50 relative flex flex-col items-center justify-center p-10 text-center">
                  <Instagram className="w-16 h-16 text-pink-500 mb-6 opacity-20" />
                  <h3 className="text-2xl font-display font-bold mb-4">Visit us on Instagram</h3>
                  <p className="text-brand-secondary mb-8 max-w-xs mx-auto">Click below to view our latest vibrant clips and follow our journey on Instagram.</p>
                  <a 
                    href="https://www.instagram.com/tunesnip?igsh=NDcxd2dmNzNreDd1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-black transition-all premium-shadow"
                  >
                    View Instagram Profile
                  </a>
                  <p className="mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Instagram restricts direct in-page browsing for security.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-brand-secondary font-medium mb-8">Want to see more of our vibrant clips?</p>
              <a 
                href="https://www.instagram.com/tunesnip" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all premium-shadow"
              >
                View All on Instagram
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Community Feedback Section */}
        <section id="feedback" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter">Community Feedback</h2>
              <p className="text-xl text-brand-secondary font-medium max-w-2xl mx-auto">
                Everyone supports us – leave your feedback. Share your thoughts with the TuneSnip community.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-10 rounded-[40px] border border-gray-100 premium-shadow mb-16">
                <FeedbackForm onSubmit={handleAddFeedback} />
              </div>

              <div className="space-y-8">
                <AnimatePresence mode="popLayout">
                  {feedbacks.length === 0 ? (
                    <p className="text-center py-20 text-gray-300 italic font-medium">No feedback yet. Be the first to share your thoughts!</p>
                  ) : (
                    feedbacks.map((item) => (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={item.id} 
                        className="bg-white p-8 rounded-3xl border border-gray-100 premium-shadow relative overflow-hidden group"
                      >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center font-bold text-brand-primary text-xl">
                              {item.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <span className="font-bold text-lg block leading-none mb-1">{item.name}</span>
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-secondary">Community Member</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400 font-medium">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-brand-secondary text-lg leading-relaxed font-medium">{item.text}</p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-brand-primary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[60px] p-12 md:p-24 border border-white/10 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white tracking-tighter leading-[0.95]">Get in touch with TuneSnip</h2>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                        <p className="text-2xl font-bold text-white tracking-tight">01346755866</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                        <p className="text-2xl font-bold text-white tracking-tight">lrfumofficial@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-12 rounded-[40px] premium-shadow">
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">Follow our journey</h3>
                  <p className="text-brand-secondary mb-10 font-medium leading-relaxed">Join our community on social media for daily updates and exclusive snippets of your favorite music and cinema.</p>
                  <div className="flex flex-col gap-5">
                    <a 
                      href="https://www.facebook.com/TuneSnip" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all premium-shadow"
                    >
                      <Facebook className="w-5 h-5" />
                      Follow on Facebook
                    </a>
                    <a 
                      href="https://www.instagram.com/tunesnip?igsh=NDcxd2dmNzNreDd1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-5 border-2 border-gray-100 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                      Follow on Instagram
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
                  <Play className="text-white w-5 h-5 fill-current" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tighter text-brand-primary">TuneSnip</span>
              </div>
              <p className="text-brand-secondary max-w-sm leading-relaxed font-medium text-lg">
                A premium platform for vibrant short clips of music and cinema. Specializing in Bangladeshi band songs and international cinema snippets.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Quick Links</h4>
              <ul className="space-y-5 text-sm font-bold text-brand-secondary uppercase tracking-widest">
                <li><a href="#feed" className="hover:text-brand-primary transition-colors">Social Feed</a></li>
                <li><a href="#feedback" className="hover:text-brand-primary transition-colors">Feedback</a></li>
                <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-8 uppercase tracking-widest text-xs text-gray-400">Connect</h4>
              <ul className="space-y-5 text-sm font-bold text-brand-secondary uppercase tracking-widest">
                <li>
                  <a 
                    href="https://www.facebook.com/TuneSnip" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors flex items-center gap-3"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/tunesnip?igsh=NDcxd2dmNzNreDd1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-brand-primary transition-colors flex items-center gap-3"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
            <div className="flex items-center gap-2">
              Founder: <span className="text-brand-primary">Arefin Foysal</span>
            </div>
            <div>
              © {new Date().getFullYear()} TuneSnip – All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeedbackForm({ onSubmit }: { onSubmit: (name: string, text: string) => void }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onSubmit(name, text);
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name</label>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-brand-primary/20 focus:bg-white transition-all text-sm font-medium"
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Feedback</label>
        <textarea 
          placeholder="Share your thoughts or suggestions..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={5}
          className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-brand-primary/20 focus:bg-white transition-all text-sm font-medium resize-none"
        />
      </div>
      <button 
        type="submit"
        className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-sm hover:bg-black transition-all premium-shadow flex items-center justify-center gap-3 group"
      >
        Submit Feedback
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
