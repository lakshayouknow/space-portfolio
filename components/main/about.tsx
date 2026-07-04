"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-10 md:px-20"
    >
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center"
      >
        About Me
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column - Career Objective */}
        <motion.div
          variants={slideInFromLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl font-bold text-white">Career Objective</h2>
          <p className="text-gray-300 leading-relaxed">
            Seeking opportunities where I can apply my skills in Artificial
            Intelligence, Data Analytics, Automation, and Software Development
            to build impactful solutions while continuously learning emerging
            technologies and contributing to organizational growth.
          </p>

          <h3 className="text-xl font-bold text-white mt-5">Core Strengths</h3>
          <ul className="text-gray-300 space-y-2">
            <li>✓ Problem Solving & Analytical Thinking</li>
            <li>✓ AI Solution Development</li>
            <li>✓ Workflow Automation</li>
            <li>✓ Team Collaboration & Communication</li>
            <li>✓ Fast Learning & Continuous Growth</li>
          </ul>
        </motion.div>

        {/* Right Column - Professional Summary */}
        <motion.div
          variants={slideInFromRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a Computer Science undergraduate with a strong passion for
            Artificial Intelligence, Data Analytics, Machine Learning, and
            Workflow Automation. I enjoy transforming ideas into intelligent
            digital solutions by combining modern technologies, automation, and
            data-driven decision-making.
          </p>

          <h3 className="text-xl font-bold text-white mt-5">Experience</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold">
                Android Developer Intern
              </h4>
              <p className="text-gray-400 text-sm">Excel Tech Computer</p>
              <p className="text-gray-300 text-sm">
                Developed Android applications using Java & Kotlin with Firebase
                integration
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Python Developer Intern</h4>
              <p className="text-gray-400 text-sm">Vaishnav Technologies</p>
              <p className="text-gray-300 text-sm">
                Developed Python applications and automated repetitive tasks
              </p>
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
        className="mt-20 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Automation",
              description:
                "Design intelligent workflow automation using AI Agents, OpenAI APIs, and n8n.",
            },
            {
              title: "Data Analytics",
              description:
                "Transform raw datasets into meaningful business insights through analysis and visualization.",
            },
            {
              title: "Dashboard Development",
              description:
                "Build interactive dashboards for executive reporting and KPI monitoring.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={slideInFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-[#7042f88b] rounded-lg bg-[#0a0e27]/50 hover:bg-[#0a0e27]/80 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
