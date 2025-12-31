import React, { useState } from 'react';
import axios from 'axios';
import { AtSign, Phone, Instagram, Youtube } from 'lucide-react';
import SlideText from './SlideText'; // Ensure this matches your project structure

const ContactForm = () => {
  // --- Brand Colors extracted from image ---
  const designColors = {
    background: '#D8D4C9', // Beige background
    textDark: '#1a1a1a',    // Almost black text
    accent: '#CBF34D',      // The acid green/yellow accent
    cardBg: '#FFFFFF',      // White card body
    cardHeaderBg: '#141414' // Black card header
  };

  // --- Form State ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ message: string; type: 'success' | 'error' | null }>({
    message: '',
    type: null,
  });

  // --- Handlers ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', type: null });

    try {
      // IMPORTANT: Update this URL to match your backend server
      const API_URL = 'http://localhost:5000/api/send-inquiry'; 
      
      const response = await axios.post(API_URL, formData);

      setSubmitStatus({ message: response.data.message || 'Message sent successfully!', type: 'success' });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred. Please try again.';
      setSubmitStatus({ message: errorMessage, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Custom Input Style (Underline Only) ---
  const inputStyle = "w-full bg-transparent border-b border-[#8c8c8c] focus:border-black outline-none py-4 text-[#1a1a1a] placeholder-transparent transition-colors resize-none text-lg";
  const labelStyle = "block text-sm font-medium text-[#4a4a4a] mb-1";

  return (
    // Outer container with the specific Beige background
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: designColors.background }}>
      <div className="max-w-7xl mx-auto">
        
        {/* HUGE CONTACT HEADING WITH ANIMATION */}
        <div className="mb-16">
          <SlideText className="text-[5rem] md:text-[9rem] font-bold text-[#1a1a1a] leading-none tracking-tight">
            Contact
          </SlideText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: Minimalist Form --- */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Full Name */}
              <div className="relative group">
                <label htmlFor="name" className={labelStyle}>Full name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className={inputStyle} 
                />
              </div>

              {/* Email Address */}
              <div className="relative group">
                <label htmlFor="email" className={labelStyle}>Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className={inputStyle} 
                />
              </div>

              {/* Messages */}
              <div className="relative group">
                <label htmlFor="message" className={labelStyle}>Messages</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows={4} 
                  className={inputStyle} 
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#141414] text-[#CBF34D] text-sm font-semibold py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 disabled:opacity-70 shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`mt-4 text-sm font-medium ${
                  submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
          
          {/* --- RIGHT SIDE: The Card Design --- */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="bg-white rounded-[2rem] shadow-xl p-2 w-full max-w-md relative">
              
              {/* Black Header Area with Yellow Dots */}
              <div className="bg-[#141414] rounded-[1.5rem] py-12 px-6 text-center relative mx-1 mt-1">
                {/* Decorative Dots */}
                <span className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-[#CBF34D]"></span>
                <span className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#CBF34D]"></span>
                <span className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-[#CBF34D]"></span>
                <span className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#CBF34D]"></span>
                
                <h3 className="text-white text-lg font-medium leading-relaxed">
                  Get in touch with us!<br />
                  <span className="text-gray-300">Lets talk!</span>
                </h3>
              </div>

              {/* Contact List */}
              <div className="p-8 space-y-6">
                {/* Email Item */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#141414] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AtSign className="h-5 w-5 text-[#CBF34D]" />
                  </div>
                  <span className="text-[#1a1a1a] font-medium text-lg">info@adsprodxb.com</span>
                </div>

                {/* Phone Item */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#141414] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#CBF34D]" />
                  </div>
                  <span className="text-[#1a1a1a] font-medium text-lg">+971 50 928 5454</span>
                </div>

                {/* Social 1 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#141414] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-5 w-5 text-[#CBF34D]" />
                  </div>
                  <span className="text-[#1a1a1a] font-medium text-lg">@adspro_gfx</span>
                </div>

                {/* Social 2 */}
                <div className="flex items-center space-x-4">
                  <div className="bg-[#141414] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Youtube className="h-5 w-5 text-[#CBF34D]" />
                  </div>
                  <span className="text-[#1a1a1a] font-medium text-lg">@adspro_gfx</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;