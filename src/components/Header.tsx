import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold text-white mr-4">
            <Link href="/">Clerk App</Link>
          </div>
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignInButton />
              </div>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignUpButton />
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center font-bold text-white mr-4">
                <Link href="/dashboard">Dashboard-S</Link>
              </div>
              <div className="flex items-center font-bold text-white mr-4">
                <Link href="/dashboard-c">Dashboard-C</Link>
              </div>
              <div className="flex items-center font-bold text-white mr-4">
                <Link href="/repos">Repos</Link>
              </div>
              <div className="flex items-center font-bold text-white mr-4">
                <UserButton />
              </div>
              <div className="flex items-center font-bold text-white mr-4">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
