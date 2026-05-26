import React from "react";
import { motion } from "framer-motion";

const MainScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full bg-black/30 backdrop-blur-md z-50 border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            DevSnippets
          </motion.div>
          <div className="flex gap-8">
            {["Features", "Pricing", "Docs", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: "#ec4899", scale: 1.1 }}
                className="text-gray-300 cursor-pointer transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-20 px-6 text-center"
      >
        <motion.h1
          variants={heroVariants}
          className="text-6xl md:text-7xl font-bold text-white mb-6"
        >
          Code Snippets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Redefined
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Save, organize, and share your code snippets with powerful search and
          collaboration features.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg transition-all"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#ec4899" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Powerful Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fast Search",
              desc: "Lightning-quick search through all your snippets",
              icon: "⚡",
            },
            {
              title: "Organize",
              desc: "Tag and categorize snippets for easy management",
              icon: "📁",
            },
            {
              title: "Collaborate",
              desc: "Share snippets with your team seamlessly",
              icon: "🤝",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
              className="p-6 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-xl border border-purple-500/30 backdrop-blur cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/50"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-300 mb-6">
            Join thousands of developers managing their code better.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MainScreen;
