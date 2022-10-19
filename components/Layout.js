import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MasterChef 🍕</title>
      </Head>
      <div className="w-full h-full ">
        <nav className="flex items-center justify-center fixed z-[999] top-0 left-0 w-full h-[64px] bg-gradient-to-r from-orange-400 to-orange-500 shadow-sm">
          <Link href="/">
            <a className="text-xl font-bold text-center text-white">
              MasterChef
            </a>
          </Link>
        </nav>

        <main className="flex justify-center w-full h-full pt-[64px]">
          {children}
        </main>

        <footer className="flex items-center justify-center py-10 mx-10 border-t border-t-gray-200">
          <p className="text-xs text-gray-500">Copyright 2022 @MasterChef</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
