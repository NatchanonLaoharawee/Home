import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Home, User, Briefcase, BookOpen, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "Home", url: createPageUrl("Home"), icon: Home },
  { name: "About", url: createPageUrl("About"), icon: User },
  { name: "Projects", url: createPageUrl("Projects"), icon: Briefcase },
  { name: "Blog", url: createPageUrl("Blog"), icon: BookOpen },
  { name: "Contact", url: createPageUrl("Contact"), icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --primary-blue: #2563eb;
          --primary-blue-light: #3b82f6;
          --text-primary: #0f172a;
          --text-secondary: #64748b;
          --text-muted: #94a3b8;
          --bg-subtle: #f8fafc;
          --border-color: #e2e8f0;
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-feature-settings: 'cv11', 'ss01';
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .glass-effect {
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to={createPageUrl("Home")} 
              className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200"
            >
              Portfolio
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`text-sm font-medium transition-all duration-200 hover:text-blue-600 relative ${
                    location.pathname === item.url ? 'text-blue-600' : 'text-slate-700'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.url && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden glass-effect"
          >
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.url 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}