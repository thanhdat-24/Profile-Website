// src/components/Profile.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import siteConfig from "../config/siteConfig";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import ImageModal from "./ImageModal";
import ZaloQRModal from "./ZaloQRModal";
import TypewriterEffect from "./TypewriterEffect";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZaloModalOpen, setIsZaloModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl shadow-glass overflow-hidden"
        >
          <div className="md:flex items-stretch">
            {/* Avatar Section */}
            <div className="md:w-2/5 bg-gradient-to-br from-[#2193b0] to-[#6dd5ed] p-10 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute inset-0">
                <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative flex flex-col items-center">
                {/* Avatar Container */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-12 group cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  {/* Avatar frame */}
                  <div className="relative w-48 h-48 rounded-full p-2 bg-gradient-to-r from-white/80 to-white/50 shadow-2xl">
                    <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
                      <img
                        src={siteConfig.avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>
                
                {/* Dynamic Title badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full max-w-[320px]"
                >
                  <div className="relative px-8 py-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-white text-xl font-bold tracking-wider">
                        <TypewriterEffect
                          texts={siteConfig.dynamicTitles}
                          speed={120}
                          deleteSpeed={80}
                          pauseTime={2500}
                          className="text-white text-xl font-bold tracking-wider min-h-[28px]"
                        />
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="h-px w-12 bg-white/50"></span>
                        <span className="text-white text-lg font-medium tracking-wide">
                          Developer
                        </span>
                        <span className="h-px w-12 bg-white/50"></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Info Section */}
            <div className="md:w-3/5 p-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  {/* Name with typewriter effect */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-4xl font-bold bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] bg-clip-text text-transparent"
                  >
                    {siteConfig.fullName}
                  </motion.h1>
                  
                  {/* Subtitle with animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-2 text-lg text-[#2193b0] dark:text-[#6dd5ed] font-medium"
                  >
                    <TypewriterEffect
                      texts={["Passionate about Technology", "Building Modern Solutions", "Creating Amazing Experiences"]}
                      speed={80}
                      deleteSpeed={50}
                      pauseTime={3000}
                      showCursor={false}
                    />
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {siteConfig.about}
                  </motion.p>
                </div>

                {/* Contact Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-[#2193b0] dark:hover:text-[#6dd5ed] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#2193b0]/10 dark:bg-gray-700 flex items-center justify-center">
                      <FaPhone className="w-4 h-4" />
                    </div>
                    <span>{siteConfig.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-[#2193b0] dark:hover:text-[#6dd5ed] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#2193b0]/10 dark:bg-gray-700 flex items-center justify-center">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <span>{siteConfig.email}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-[#2193b0] dark:hover:text-[#6dd5ed] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#2193b0]/10 dark:bg-gray-700 flex items-center justify-center">
                      <FaMapMarkerAlt className="w-4 h-4" />
                    </div>
                    <span>{siteConfig.address}</span>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1 }}
                  className="flex space-x-4"
                >
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#2193b0] hover:text-white dark:hover:bg-[#2193b0] transition-all transform hover:scale-110"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#2193b0] hover:text-white dark:hover:bg-[#2193b0] transition-all transform hover:scale-110"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#1877f2] hover:text-white dark:hover:bg-[#1877f2] transition-all transform hover:scale-110"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <button
                    onClick={() => setIsZaloModalOpen(true)}
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#0068ff] hover:text-white dark:hover:bg-[#0068ff] transition-all transform hover:scale-110"
                  >
                    <SiZalo className="w-6 h-6" />
                  </button>
                </motion.div>

                {/* Download CV Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                  className="pt-6"
                >
                  <a
                    href={siteConfig.cvLink}
                    download
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Tải CV
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={siteConfig.avatar}
      />

      {/* Zalo QR Modal */}
      <ZaloQRModal
        isOpen={isZaloModalOpen}
        onClose={() => setIsZaloModalOpen(false)}
        zaloQR={siteConfig.social.zalo.qrCode}
        zaloPhone={siteConfig.social.zalo.phone}
      />
    </>
  );
};

export default Profile;