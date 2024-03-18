import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo-big.png'


export default function Footer() {
  return (
    <footer className='overflow-hidden'>
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2 md:pl-8 ">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Value1">
                  <Image
                    src={logo}
                    width={150}
                    height={150}
                    alt="Value1 Branding"
                  />
                </Link>
              </div>
              <div className="text-gold-500">World's Most Inclusive Enterprises. Co-owned by consumers & workforce.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gold-500 font-medium mb-1">Explore</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/about" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Community</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Blog</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gold-500 font-medium mb-1">Legal</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/legal" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Terms & Condition</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/legal" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/legal" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Cancellation & Returns</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/legal" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Shopping Policy</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="font-medium mb-1 text-gold-500">Social Media</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://www.facebook.com/Value1.in" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Facebook</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.instagram.com/value1.in" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Instagram</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://twitter.com/Value1_co" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">X (Twitter)</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.linkedin.com/company/value1-co-owning/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">LinkedIn</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex flex-row items-center justify-center mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://twitter.com/Value1_co" className="flex justify-center items-center text-gold-600 bg-white hover:text-white hover:bg-gold-500 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.facebook.com/Value1.in" className="flex justify-center items-center text-gold-600 bg-white hover:text-white hover:bg-gold-500 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.instagram.com/value1.in" className="flex justify-center items-center text-gold-600 bg-white hover:text-white hover:bg-gold-500 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.linkedin.com/company/value1-co-owning/" className="flex justify-center items-center text-gold-600 bg-white hover:text-white hover:bg-gold-500 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm text-center pt-3">&copy; <span className='text-gold-500'>Value1.in</span> All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
