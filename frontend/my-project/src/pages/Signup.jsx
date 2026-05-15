import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-black to-slate-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-black text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Join the future of AI image captioning
        </p>

        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition p-4 rounded-2xl font-bold text-lg">
            Signup
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}