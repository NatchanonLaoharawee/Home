import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Github, Linkedin, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                Creating Digital
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-light">
                I'm a passionate developer crafting beautiful, functional applications 
                that solve real-world problems with elegant code and thoughtful design.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link to={createPageUrl("Projects")}>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-medium rounded-xl border-2 hover:bg-slate-50 transition-all duration-200">
                  <Download className="mr-2 w-5 h-5" />
                  Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
                >
                  <Github className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors duration-200" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-200" />
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group"
                >
                  <Twitter className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors duration-200" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in modern web development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to={createPageUrl("Projects")} 
              className="block group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-12 text-center hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Explore All Projects
                </h3>
                <p className="text-slate-600 text-lg">
                  Discover the full range of applications, websites, and tools I've built
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What I Do
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specializing in modern technologies to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS",
                icon: "🎨"
              },
              {
                title: "Backend Development", 
                description: "Building robust APIs and server-side solutions with Node.js, Python, and cloud services",
                icon: "⚙️"
              },
              {
                title: "Full-Stack Solutions",
                description: "End-to-end application development with seamless integration and deployment",
                icon: "🚀"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-6">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}