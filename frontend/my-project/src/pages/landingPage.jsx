import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-extrabold tracking-wide">
          VisionCaption AI
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 items-center px-10 lg:px-24 py-20 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] mb-4 font-semibold">
            AI Powered Image Understanding
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Generate Smart Captions From Images
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            Upload any image and let AI generate meaningful captions instantly.
            Built using deep learning, NLP, and computer vision technologies.
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition shadow-2xl"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
            >
              Explore Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
              <h2 className="text-3xl font-bold">95%</h2>
              <p className="text-gray-400 mt-1">Caption Accuracy</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
              <h2 className="text-3xl font-bold">1M+</h2>
              <p className="text-gray-400 mt-1">Images Processed</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10">
              <h2 className="text-3xl font-bold">AI</h2>
              <p className="text-gray-400 mt-1">Deep Learning</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="AI"
            className="rounded-3xl shadow-2xl border border-white/10 relative z-10"
          />
        </motion.div>
      </div>
    </div>
  );
}