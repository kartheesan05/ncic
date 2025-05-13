"use client"

import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

// Custom animation hook for section reveal
function useAnimateInView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return [ref, isInView];
}

export default function Home() {
  const [aboutRef, aboutInView] = useAnimateInView();
  const [tracksRef, tracksInView] = useAnimateInView();
  const [agendaRef, agendaInView] = useAnimateInView();
  const [committeeRef, committeeInView] = useAnimateInView();
  const [contactRef, contactInView] = useAnimateInView();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      } 
    }
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${montserrat.variable} font-sans`}>
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-3"
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Image 
              src="/logo.png" 
              alt="ICICRCET'25 Logo" 
              width={180} 
              height={50} 
              className="h-12 w-auto" 
            />
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {["About", "Tracks", "Agenda", "Committee", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-700 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-700 after:transition-all after:duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a 
              href="https://forms.gle/219Ekf3pHEj97wGz6" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-2 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.a>
            <motion.button 
              className="md:hidden text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0 opacity-20">
            <motion.div 
              className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl" 
              animate={{ 
                x: [0, 30, 0], 
                y: [0, 20, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 12,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl" 
              animate={{ 
                x: [0, -40, 0], 
                y: [0, 30, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 18,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute bottom-24 left-1/2 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl" 
              animate={{ 
                x: [0, 40, 0], 
                y: [0, -30, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15,
                ease: "easeInOut" 
              }}
            />
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  May 26, 2025 • Online (Google Meet)
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 text-transparent bg-clip-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  ICICRCET<span className="text-blue-700">'25</span>
                </motion.h1>
                
                <motion.h2 
                  className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  2nd International Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science and Engineering
                </motion.h2>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/brochure.pdf';
                      link.download = "ICICRCET'25-Brochure.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium py-3 px-8 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Download Brochure</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </motion.button>
                  <motion.button 
                    onClick={() => window.open('https://forms.gle/219Ekf3pHEj97wGz6', '_blank')}
                    className="bg-white text-blue-700 border border-blue-200 font-medium py-3 px-8 rounded-lg hover:shadow-md hover:bg-blue-50 transition duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Register</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="flex space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    delay: 1,
                    staggerChildren: 0.1,
                    delayChildren: 1
                  }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.a 
                      key={i}
                      href="#" 
                      className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1 + i * 0.1
                      }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={[
                          "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 4.48-10 10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13.5v6l5-3z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
                          "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                          "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.236.599 1.799 1.163.569.569.921 1.142 1.174 1.8.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427-.25.668-.599 1.236-1.163 1.799-.569.569-1.142.921-1.8 1.174-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.236-.599-1.799-1.163-.569-.569-.921-1.142-1.174-1.8-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.599-1.236 1.163-1.799.569-.569 1.142-.921 1.8-1.174.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z",
                          "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                          "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        ][i-1]}/>
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center gap-8">
                  {/* SVCE Logo */}
                  <div className="flex flex-col items-center mt-15">
                    <Image 
                      src="/svce.png" 
                      alt="Presented by SVCE" 
                      width={1000} 
                      height={1000}
                      className="w-full max-w-full drop-shadow-2xl"
                      priority
                    />
                    <motion.p
                      className="text-xl font-semibold text-blue-700 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Presented by
                    </motion.p>
                  </div>

                  {/* AIMST Logo */}
                  <div className="flex flex-col items-center">
                    <Image 
                      src="/aimst.png" 
                      alt="Knowledge Partner AIMST" 
                      width={300} 
                      height={300}
                      className="w-full max-w-xs drop-shadow-2xl"
                      priority
                    />
                    <motion.p
                      className="text-xl font-semibold text-blue-700 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Knowledge Partner
                    </motion.p>
                  </div>

                  {/* Know-I Logo */}
                  <div className="flex flex-col items-center mt-15">
                    <Image 
                      src="/knowi.png" 
                      alt="Hosted by Know-I" 
                      width={300} 
                      height={300}
                      className="w-full max-w-xs drop-shadow-2xl rounded-2xl"
                      priority
                    />
                    <motion.p
                      className="text-xl font-semibold text-blue-700 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Hosted by
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-20 bg-white"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-transparent bg-clip-text"
                variants={fadeIn}
              >
                About The Conference
              </motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-12"
                variants={fadeIn}
              ></motion.div>
              <motion.div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
                variants={fadeIn}
              >
                <p className="text-lg md:text-xl font-light leading-relaxed">
                  The <span className="font-medium text-blue-700">International Conference on Innovative Computing Research and Cutting Edge Technologies</span> in Computer Science and
                  Engineering (ICICRCET) is an annual event that brings together researchers, scholars, and industry experts in Computer Science and
                  Engineering.
                </p>
                <p className="text-lg leading-relaxed">
                  Organized by <span className="font-medium text-blue-700">Sri Venkateswara College of Engineering</span> in association with the <span className="font-medium text-blue-700">AIMST University</span>, the conference provides
                  a platform for:
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Presenting innovative research
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Fostering industry-academia collaboration
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Enhancing skill development among students and faculty
                  </li>
                </ul>
                <p className="text-lg leading-relaxed">
                  The conference is conducted by <span className="font-medium text-blue-700">CSE Department, SVCE</span>, and hosted by <span className="font-medium text-blue-700">Know-I</span>, a Machine Learning club, known
                  for promoting research and innovation in AI and emerging technologies.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
            >
              {/* Vision Section */}
              <motion.div 
                className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300"
                variants={cardVariant}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To excel in providing education and research in the field of computer science and engineering in the cutting-edge technology so as to produce competence professional at global level
                </p>
              </motion.div>

              {/* Mission Section */}
              <motion.div 
                className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300"
                variants={cardVariant}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mission</h3>
                <ul className="text-gray-600 space-y-3 list-disc pl-5">
                  <li>Providing competent and trained faculty enriching the aptitude of the student to generate innovative and effective problem solving skills with professionalism.</li>
                  <li>Providing strong research and state of the art facility to the students to face dynamic challenges of industry and society</li>
                  <li>Educating the students to be successful, ethical and lifelong learners</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Tracks Section */}
        <motion.section 
          id="tracks" 
          className="py-20 bg-gray-50"
          ref={tracksRef}
          initial="hidden"
          animate={tracksInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-transparent bg-clip-text"
                variants={fadeIn}
              >Conference Tracks</motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
                variants={fadeIn}
              ></motion.div>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeIn}
              >
                The conference invites original contributions in the following tracks, but not limited to:
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={tracksInView ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Track 1: Computational Intelligence",
                  color: "border-blue-600",
                  bgColor: "bg-blue-100",
                  textColor: "text-blue-700",
                  items: [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Deep Learning",
                    "Natural Language Processing",
                    "Computational optimization",
                    "Robotics",
                    "Text Mining",
                    "Web Mining",
                    "Visualization Techniques"
                  ]
                },
                {
                  title: "Track 2: Ambient Intelligence",
                  color: "border-indigo-600",
                  bgColor: "bg-indigo-100",
                  textColor: "text-indigo-700",
                  items: [
                    "Data Science & Data Analytics",
                    "Smart Cities",
                    "Affective Computing",
                    "Context aware pervasive systems",
                    "Intelligent Transportation"
                  ]
                },
                {
                  title: "Track 3: Security",
                  color: "border-purple-600",
                  bgColor: "bg-purple-100",
                  textColor: "text-purple-700",
                  items: [
                    "Biometrics",
                    "Internet Security",
                    "Cloud Security",
                    "Secure Transactions",
                    "Advanced Cryptography",
                    "Cyber Security"
                  ]
                },
                {
                  title: "Track 4: Computing",
                  color: "border-emerald-600",
                  bgColor: "bg-emerald-100",
                  textColor: "text-emerald-700",
                  items: [
                    "Cloud Computing",
                    "Edge Computing",
                    "Quantum Computing",
                    "High Performance Computing",
                    "Bio-Inspired Computing",
                    "Human Centered Computing"
                  ]
                },
                {
                  title: "Track 5: Techniques & Technologies",
                  color: "border-rose-600",
                  bgColor: "bg-rose-100",
                  textColor: "text-rose-700",
                  items: [
                    "Virtualization Techniques",
                    "Computer Vision",
                    "Human Computer Interface & BCI",
                    "Augmented Reality / Virtual Reality",
                    "Block Chain",
                    "Metaverse"
                  ]
                }
              ].map((track, i) => (
                <motion.div 
                  key={i}
                  className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${track.color}`}
                  variants={cardVariant}
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{track.title}</h3>
                  <ul className="text-gray-600 space-y-2">
                    {track.items.map((item, j) => (
                      <motion.li 
                        key={j}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <svg className={`w-5 h-5 ${track.textColor} mr-2 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* Agenda Section */}
        <motion.section 
          id="agenda" 
          className="py-20 bg-white"
          ref={agendaRef}
          initial="hidden"
          animate={agendaInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-transparent bg-clip-text"
                variants={fadeIn}
              >Important Dates</motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
                variants={fadeIn}
              ></motion.div>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeIn}
              >
                Key deadlines and dates for ICICRCET'25
              </motion.p>
            </div>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              ></motion.div>

              {/* Timeline Events */}
              <motion.div 
                className="relative space-y-24"
                variants={staggerContainer}
                initial="hidden"
                animate={agendaInView ? "visible" : "hidden"}
              >
                {[
                  {
                    date: "May 18, 2025",
                    title: "Full Paper Submission Deadline",
                    description: "Last date to submit your research papers for review",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  {
                    date: "May 20, 2025",
                    title: "Intimation of Selected Papers",
                    description: "Authors will be notified about paper acceptance",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    date: "May 23, 2025",
                    title: "Last Date for Registration",
                    description: "Final deadline for conference registration",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    )
                  },
                  {
                    date: "May 26, 2025",
                    title: "Conference Date",
                    description: "Main conference day",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )
                  }
                ].map((event, i) => (
                  <motion.div 
                    key={i}
                    className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    variants={cardVariant}
                  >
                    {/* Content */}
                    <motion.div 
                      className={`w-1/2 ${i % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.date}</h3>
                      <h4 className="text-xl font-semibold text-blue-700 mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </motion.div>

                    {/* Icon */}
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                    >
                      {event.icon}
                    </motion.div>

                    {/* Empty space for the other side */}
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Committee Section */}
        <motion.section 
          id="committee" 
          className="py-20 bg-gray-50"
          ref={committeeRef}
          initial="hidden"
          animate={committeeInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-transparent bg-clip-text"
                variants={fadeIn}
              >Organizing Committee</motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
                variants={fadeIn}
              ></motion.div>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeIn}
              >
                Meet our dedicated team of professionals working to make ICICRCET'25 a success.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={committeeInView ? "visible" : "hidden"}
            >
              {/* Committee Section - Chief Patrons */}
              <motion.div 
                className="col-span-full mb-12"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Chief Patrons</h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={staggerContainer}
                >
                  {[
                    {
                      name: "Dr. A. C. Muthiah",
                      role: "Chairman, Governing Council, SVCE",
                      description: "Leading SVCE's vision for excellence in engineering education and research."
                    },
                    {
                      name: "Dr. M. Sivanandham, Ph.D",
                      role: "Secretary, SVEHT",
                      description: "Guiding the strategic development and growth of SVCE."
                    }
                  ].map((patron, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                      variants={cardVariant}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    >
                      <motion.div 
                        className="w-32 h-32 rounded-full overflow-hidden mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image 
                          src={`/chiefpatron${i + 1}.jpg`}
                          alt={patron.name} 
                          width={100} 
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.h4 
                        className="text-xl font-semibold mb-1 text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {patron.name}
                      </motion.h4>
                      <motion.p 
                        className="text-blue-700 font-medium mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {patron.role}
                      </motion.p>
                      <motion.p 
                        className="text-gray-600 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {patron.description}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Patron Section */}
              <motion.div 
                className="col-span-full mb-12"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Patron</h3>
                <motion.div 
                  className="max-w-lg mx-auto"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                    variants={cardVariant}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  >
                    <motion.div 
                      className="w-32 h-32 rounded-full overflow-hidden mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image 
                        src="/patron1.jpg"
                        alt="Prof. S.Ganesh Vaidyanathan" 
                        width={100} 
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-semibold mb-1 text-gray-800"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Prof. S.Ganesh Vaidyanathan, M.E., Ph.D
                    </motion.h4>
                    <motion.p 
                      className="text-blue-700 font-medium mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      Principal, SVCE
                    </motion.p>
                    <motion.p 
                      className="text-gray-600 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Leading SVCE's academic excellence and institutional development
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Convenors Section */}
              <motion.div 
                className="col-span-full mb-12"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Convenors</h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
                  variants={staggerContainer}
                >
                  {[
                    {
                      name: "Dr. R. Anitha",
                      qualification: "M.E., Ph.D",
                      role: "HoD/CSE",
                      description: "Leading the Department of Computer Science and Engineering"
                    },
                    {
                      name: "Dr. N. Rajganesh",
                      qualification: "M.E., Ph.D",
                      role: "AHoD/CSE",
                      description: "Supporting departmental initiatives and academic programs"
                    }
                  ].map((convenor, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                      variants={cardVariant}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    >
                      <motion.div 
                        className="w-28 h-28 rounded-full overflow-hidden mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image 
                          src={`/convenor${i + 1}.jpg`}
                          alt={convenor.name} 
                          width={100} 
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.h4 
                        className="text-lg font-semibold mb-1 text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {`${convenor.name}, ${convenor.qualification}`}
                      </motion.h4>
                      <motion.p 
                        className="text-blue-700 mb-2 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {convenor.role}
                      </motion.p>
                      <motion.p 
                        className="text-gray-600 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {convenor.description}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Faculty Co-ordinators Section */}
              <motion.div 
                className="col-span-full"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Faculty Co-ordinators</h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={staggerContainer}
                >
                  {[
                    {
                      name: "Ms. R. K. Kapila Vani",
                      qualification: "M.E., (Ph.D)",
                      role: "Asst. Professor/CSE"
                    },
                    {
                      name: "Mr. P. Selvamani",
                      qualification: "M.E., (Ph.D)",
                      role: "Asst. Professor/CSE"
                    },
                    {
                      name: "Ms. V. Radha",
                      qualification: "M.E., (Ph.D)",
                      role: "Asst. Professor/CSE"
                    },
                    {
                      name: "Mr. V. Krishnamoorthy",
                      qualification: "M.E., (Ph.D)",
                      role: "Asst. Professor/CSE"
                    }
                  ].map((coordinator, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                      variants={cardVariant}
                      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                    >
                      <motion.div 
                        className="w-24 h-24 rounded-full overflow-hidden mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image 
                          src={`/coordinator${i + 1}.jpg`}
                          alt={coordinator.name} 
                          width={100} 
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.h4 
                        className="text-lg font-semibold mb-1 text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {coordinator.name}
                      </motion.h4>
                      <motion.p 
                        className="text-blue-700 mb-1 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {coordinator.qualification}
                      </motion.p>
                      <motion.p 
                        className="text-gray-600 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {coordinator.role}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-20 bg-white"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-transparent bg-clip-text"
                variants={fadeIn}
              >Contact Us</motion.h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"
                variants={fadeIn}
              ></motion.div>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeIn}
              >
                Have questions about ICICRCET'25? Get in touch with our team.
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <motion.div 
                className="bg-gray-50 rounded-xl p-8 shadow-sm col-span-full"
                variants={cardVariant}
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-gray-800"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Get In Touch
                </motion.h3>
                
                <motion.div 
                  className="space-y-5"
                  variants={staggerContainer}
                >
                  {[
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>,
                      title: "Email",
                      subtitle: "General Inquiries",
                      link: "mailto:ncrctcse@svce.ac.in",
                      linkText: "ncrctcse@svce.ac.in"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>,
                      title: "Phone",
                      subtitle: "Conference Secretariat",
                      link: "tel:044-27152000(301)",
                      linkText: "044-27152000(301)"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>,
                      title: "Address",
                      address: [
                        "Department of Computer Science & Engineering",
                        "Sri Venkateswara College of Engineering",
                        "Chennai, Tamil Nadu, India - 602117"
                      ]
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>,
                      title: "Conference Platform",
                      address: [
                        "Online Conference via Google Meet",
                        "Link will be shared with registered participants",
                        "Technical support available during the event"
                      ]
                    }
                  ].map((contact, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-start"
                      variants={cardVariant}
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">{contact.title}</h4>
                        {contact.subtitle && <p className="text-gray-600 mb-1">{contact.subtitle}</p>}
                        {contact.link ? (
                          <a href={contact.link} className="text-blue-700 hover:underline">{contact.linkText}</a>
                        ) : (
                          <p className="text-gray-600">
                            {contact.address.map((line, j) => (
                              <span key={j} className="block">{line}</span>
                            ))}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.a 
                        key={i}
                        href="#" 
                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d={[
                            "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                            "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.236.599 1.799 1.163.569.569.921 1.142 1.174 1.8.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427-.25.668-.599 1.236-1.163 1.799-.569.569-1.142.921-1.8 1.174-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.236-.599-1.799-1.163-.569-.569-.921-1.142-1.174-1.8-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.599-1.236 1.163-1.799.569-.569 1.142-.921 1.8-1.174.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z",
                            "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                            "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                            "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                          ][i-1]}/>
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Footer */}
        <motion.footer 
          className="bg-gray-900 text-white py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="col-span-1 md:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="ICICRCET'25 Logo" 
                    width={180} 
                    height={50} 
                    className="h-12 w-auto bg-white p-1 rounded"
                  />
                </div>
                <motion.p 
                  className="text-gray-400 mb-4 max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                    The 2nd International Conference on Innovative Computing Research and Cutting Edge Technologies in Computer Science and Engineering (ICICRCET'25).
                </motion.p>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  May 26, 2025 • Online (Google Meet)
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
                <motion.ul 
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5
                      }
                    }
                  }}
                >
                  {["About", "Tracks", "Agenda", "Committee", "Contact"].map((item, i) => (
                    <motion.li 
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <motion.a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Important Links</h3>
                <motion.ul 
                  className="space-y-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.6
                      }
                    }
                  }}
                >
                  {["Paper Submission", "Registration", "Sponsorship", "FAQs", "Privacy Policy"].map((item, i) => (
                    <motion.li 
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <motion.a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 mb-4 md:mb-0">© 2025 ICICRCET. All rights reserved.</p>
              
              <motion.div 
                className="flex space-x-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.8
                    }
                  }
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={[
                        "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                        "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.236.599 1.799 1.163.569.569.921 1.142 1.174 1.8.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427-.25.668-.599 1.236-1.163 1.799-.569.569-1.142.921-1.8 1.174-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.236-.599-1.799-1.163-.569-.569-.921-1.142-1.174-1.8-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427.25-.668.599-1.236 1.163-1.799.569-.569 1.142-.921 1.8-1.174.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666z",
                        "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                        "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      ][i-1]}/>
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
