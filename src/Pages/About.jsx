import React from "react";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Tools & Others", items: ["Docker", "AWS", "Git", "Figma", "VS Code"] }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading development of modern web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Frontend Developer", 
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Built responsive websites and web applications for various clients using modern frontend frameworks."
    },
    {
      title: "Junior Developer",
      company: "Startup",
      period: "2019 - 2020", 
      description: "Started my career developing features and fixing bugs in a fast-paced startup environment."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">JS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            About Me
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a love for creating digital experiences 
            that are both beautiful and functional. With several years of experience, I specialize 
            in modern web technologies and enjoy solving complex problems with clean, efficient code.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">My Story</h2>
          <div className="prose prose-lg text-slate-600 leading-relaxed">
            <p className="mb-6">
              My journey into development started with curiosity about how websites work. 
              What began as a hobby quickly became a passion, leading me to pursue formal 
              education and eventually a career in web development.
            </p>
            <p className="mb-6">
              Over the years, I've worked with startups and established companies, 
              building everything from simple websites to complex web applications. 
              I believe in writing clean, maintainable code and creating user experiences 
              that are intuitive and delightful.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community 
              through blog posts and mentoring.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-white px-3 py-2 rounded-lg text-slate-700 font-medium text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-100"
              >
                <div className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-1 mb-3">
                    <span className="text-blue-600 font-medium">{exp.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl">
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl border-2">
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" }, 
              { icon: Twitter, href: "#", label: "Twitter" }
            ].map(({ icon: Icon, href, label }) => (
              <a 
                key={label}
                href={href}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-200 hover:scale-105 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors duration-200" />
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}