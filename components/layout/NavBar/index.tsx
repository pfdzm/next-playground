import Link from 'next/link'
import { useRouter } from 'next/router'

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
    <li>
      <Link href={props.path}>
        <a
          className={`rounded py-2 px-5 hover:bg-green-100 text-green-800 ${
            isActive ? 'bg-green-100' : ''
          }`}
        >
          {props.label}
        </a>
      </Link>
    </li>
  )
}
