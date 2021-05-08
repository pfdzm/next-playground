import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar(props: {
  items: { label: string; path: string }[]
}) {
  return (
    <nav>
      <ul className="list-none flex w-full justify-around items-center px-4 py-2 text-blue-500 font-bold">
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
        <a className={`${isActive ? 'font-extrabold underline' : null}`}>
          {props.label}
        </a>
      </Link>
    </li>
  )
}
