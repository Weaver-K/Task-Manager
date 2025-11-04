import { motion } from "framer-motion";

export default function MotionButton({ children, onClick, className }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-primary text-white shadow-md ${className}`}
    >
      {children}
    </motion.button>
  );
}
