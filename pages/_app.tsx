import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import Layout from '../components/layout'
import NavBar from '../components/layout/NavBar'
import '../styles/globals.css'

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout menu={<NavBar items={menuItems} />}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
