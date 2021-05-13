import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function NavBar(props: {
  items: { label: string; path: string }[]
}) {
  return (
    <nav>
      <ul className="list-none flex w-full justify-around items-center px-5 py-3 text-green-800 font-bold text-2xl">
        {props.items.map(({ label, path }, key) => {
          return <NavItem key={key} label={label} path={path} />
        })}
      </ul>
    </nav>
  )
}

function NavItem(props: { label: string; path: string }) {
  const router = useRouter()
  const isActive = router.asPath === props.path
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link href={props.path}>
        <a
          className={`rounded py-2 px-5 bg-green-200 ${
            isActive ? 'text-green-900' : 'text-green-700'
          }`}
        >
          {props.label}
        </a>
      </Link>
    </motion.li>
  )
}
