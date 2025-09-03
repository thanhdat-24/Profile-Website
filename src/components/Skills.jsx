// src/components/Skills.jsx
import { motion } from "framer-motion";
import siteConfig from "../config/siteConfig";
import { FaCode, FaTools, FaShieldAlt } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import CircularProgress from "./CircularProgress";

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass rounded-3xl shadow-glass p-10"
      >
        {/* Programming Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="w-6 h-6 text-[#2193b0]" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] bg-clip-text text-transparent">
              Kỹ năng lập trình
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column - Progress bars */}
            <div className="space-y-6">
              {siteConfig.skills.programming.slice(0, Math.ceil(siteConfig.skills.programming.length / 2)).map((skill, index) => (
                <ProgressBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
            
            {/* Right column - Progress bars */}
            <div className="space-y-6">
              {siteConfig.skills.programming.slice(Math.ceil(siteConfig.skills.programming.length / 2)).map((skill, index) => (
                <ProgressBar 
                  key={skill.name} 
                  skill={skill} 
                  index={index + Math.ceil(siteConfig.skills.programming.length / 2)} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        {siteConfig.skills.technical.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16 last:mb-0">
            <div className="flex items-center gap-3 mb-8">
              {categoryIndex === 0 ? (
                <FaTools className="w-6 h-6 text-[#2193b0]" />
              ) : (
                <FaShieldAlt className="w-6 h-6 text-[#2193b0]" />
              )}
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] bg-clip-text text-transparent">
                {category.category}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <CircularProgress
                  key={item.name}
                  skill={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Overall Stats */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] bg-clip-text text-transparent mb-8">
            Thống kê tổng quan
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-[#2193b0] dark:text-[#6dd5ed] mb-2"
              >
                5+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300">Năm kinh nghiệm</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-[#2193b0] dark:text-[#6dd5ed] mb-2"
              >
                100+
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300">Dự án hoàn thành</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-[#2193b0] dark:text-[#6dd5ed] mb-2"
              >
                95%
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300">Khách hàng hài lòng</p>
            </motion.div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] bg-clip-text text-transparent mb-8">
            Chứng chỉ & Giải thưởng
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#2193b0]/10 dark:bg-[#2193b0]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2193b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    AWS Certified Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Amazon Web Services - 2023
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#2193b0]/10 dark:bg-[#2193b0]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#2193b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    React Advanced Concepts
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Meta (Facebook) - 2023
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;