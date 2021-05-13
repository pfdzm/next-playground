export default function Layout({
  menu,
  children,
  footer = (
    <p>
      Made with ♥️ by <span>Pablo</span>
    </p>
  ),
}: {
  menu: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-between items-center">
      <header className="flex-grow-0 flex-shrink-0 w-full">{menu}</header>
      <main className="mx-auto max-w-3xl py-12 px-6 flex-grow">{children}</main>
      <footer className="flex-grow-0 flex-shrink-0 h-8">{footer}</footer>
    </div>
  )
}
