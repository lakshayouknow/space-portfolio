"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="relative flex flex-col items-center justify-center py-20 px-4 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Section Title */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 py-4">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-20">
        {/* Left Column - Career Objective */}
        <motion.div
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 p-6 md:p-8 rounded-xl backdrop-blur-md border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Career Objective</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-base">
            Seeking opportunities where I can apply my skills in Artificial
            Intelligence, Data Analytics, Automation, and Software Development
            to build impactful solutions while continuously learning emerging
            technologies and contributing to organizational growth.
          </p>

          <div className="pt-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">→</span> Core Strengths
            </h3>
            <ul className="space-y-3">
              {[
                "Problem Solving & Analytical Thinking",
                "AI Solution Development",
                "Workflow Automation",
                "Team Collaboration & Communication",
                "Fast Learning & Continuous Growth",
              ].map((strength, i) => (
                <li
                  key={i}
                  className="text-gray-300 flex items-center gap-3 hover:text-purple-400 transition-colors"
                >
                  <span className="text-purple-500 font-bold">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Professional Summary */}
        <motion.div
          variants={slideInFromRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 p-6 md:p-8 rounded-xl backdrop-blur-md border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 to-transparent hover:border-cyan-500/50 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Summary</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-base">
            I am a Computer Science undergraduate with a strong passion for
            Artificial Intelligence, Data Analytics, Machine Learning, and
            Workflow Automation. I enjoy transforming ideas into intelligent
            digital solutions by combining modern technologies, automation, and
            data-driven decision-making.
          </p>

          <div className="pt-4">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-purple-400">→</span> Experience
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Android Developer Intern",
                  company: "Excel Tech Computer",
                  desc: "Developed Android applications using Java & Kotlin with Firebase integration",
                },
                {
                  title: "Python Developer Intern",
                  company: "Vaishnav Technologies",
                  desc: "Developed Python applications and automated repetitive tasks",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="p-4 rounded-lg border border-gray-600/30 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    {exp.title}
                  </h4>
                  <p className="text-cyan-400 text-xs md:text-sm font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-300 text-xs md:text-sm mt-2 leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="text-center mb-14">
          <h2 className="text-[40px] md:text-[45px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive solutions designed to solve your business challenges with AI, automation, and data analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              title: "AI Automation",
              description:
                "Design intelligent workflow automation using AI Agents, OpenAI APIs, and n8n to streamline complex processes.",
              icon: "⚡",
              color: "from-purple-600 to-purple-400",
              borderColor: "border-purple-500/50",
            },
            {
              title: "Data Analytics",
              description:
                "Transform raw datasets into meaningful business insights through advanced analysis and interactive visualization.",
              icon: "📊",
              color: "from-cyan-600 to-cyan-400",
              borderColor: "border-cyan-500/50",
            },
            {
              title: "Dashboard Development",
              description:
                "Build interactive, real-time dashboards for executive reporting, KPI monitoring, and business intelligence.",
              icon: "📈",
              color: "from-pink-600 to-pink-400",
              borderColor: "border-pink-500/50",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={slideInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
              }}
              className={`group relative p-6 md:p-8 rounded-xl border ${service.borderColor} bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 hover:border-opacity-100`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl -z-10`}
              ></div>

              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
