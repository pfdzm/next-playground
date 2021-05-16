import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function ContentWrapper({ children, ...rest }: Props) {
  return (
    <motion.main
      layoutId="content"
      className="flex flex-col"
      {...rest}
    >
      {children}
    </motion.main>
  )
}
