import { motion } from 'framer-motion'

export default function Header({ children }: { children: React.ReactNode }) {
  return <motion.h1 layoutId="header" className="font-extrabold text-gray-800 text-3xl">{children}</motion.h1>
}
