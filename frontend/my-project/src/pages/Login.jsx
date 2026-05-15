import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-black text-white text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Login to continue your AI captioning journey
        </p>

        <form className="mt-10 space-y-5">
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
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Signup
          </Link>
        </p>
      </motion.div>
    </div>
  );
}