import React, { useState, useEffect } from "react";
import BlogPost from "@/Entities/BlogPost.json";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Clock, Calendar, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await BlogPost.filter({ published: true }, "-created_date");
      setPosts(data);
    } catch (error) {
      console.error("Failed to load blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const allTags = [...new Set(posts.flatMap(post => post.tags || []))];
  
  const filteredPosts = selectedTag === "all" 
    ? posts 
    : posts.filter(post => post.tags?.includes(selectedTag));

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-slate-200 rounded w-1/3 mx-auto"></div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 space-y-4">
                <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Thoughts, insights, and stories about development, design, and technology
          </p>
        </motion.div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedTag("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === "all" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Tag className="w-3 h-3 mr-1 inline" />
                {tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Blog Posts */}
        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No Posts Yet</h3>
              <p className="text-slate-600 text-lg">
                Blog posts will appear here once they're published
              </p>
            </motion.div>
          ) : (
            <motion.div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
                >
                  <Link to={createPageUrl(`BlogPost?id=${post.id}`)}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Cover Image */}
                      {post.cover_image && (
                        <div className="md:w-48 h-32 md:h-24 bg-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                          <img 
                            src={post.cover_image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h2>
                        
                        {post.excerpt && (
                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {format(new Date(post.created_date), "MMM d, yyyy")}
                          </div>
                          
                          {post.reading_time && (
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.reading_time} min read
                            </div>
                          )}
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-white text-slate-600 hover:bg-slate-100 transition-colors duration-200">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}