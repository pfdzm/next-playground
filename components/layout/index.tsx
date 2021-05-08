export default function Layout(props: {
  menu: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className="min-h-full">
      <header>{props.menu}</header>
      <main className="mx-auto max-w-3xl py-12 px-6">{props.children}</main>
      {props.footer && <footer>{props.footer}</footer>}
    </div>
  )
}
