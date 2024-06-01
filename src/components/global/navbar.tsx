import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
type Props = {}

const Navbar = async  (props:Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">workfl</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 dark:text-white/55 text-neutral-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a5 5 0 1110 0 5 5 0 01-10 0z"
          />
        </svg>
        <p className="text-3xl font-bold">w</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-40%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none ">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        <MenuIcon className="h-8 w-8 text-white cursor-pointer md:hidden" />
      </aside>
    </header>
  );
}

export default Navbar