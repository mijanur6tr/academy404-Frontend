import React from 'react'
import Link from 'next/link'


export const Footer = () => {
  return (
    <footer id='contact' className="relative overflow-hidden py-10 bg-slate-700 border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap justify-between w-full gap-y-10">

          <div className="w-full md:w-[35%] p-4">
            <h3 className="text-xl font-bold text-white mb-4">Skill Skool</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Shuto Shoilo is a premium jewelry brand dedicated to elegance, tradition, and style.
              Each piece is handcrafted with love to bring charm to your daily life.
              Explore our timeless collection and feel the shine of heritage.
            </p>
           

          </div>


          <div className="w-full md:w-[25%] p-4">
            <h3 className="mb-6 text-xs font-bold uppercase text-gray-300 tracking-wide">
              Legals
            </h3>
            <ul>
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((text) => (
                <li key={text} className="mb-3 last:mb-0">
                  <Link
                    href="/"
                    className="text-base font-normal text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="w-full md:w-[25%] p-4">
            <h3 className="mb-6 text-xs font-bold uppercase text-gray-300 tracking-wide">
              Contact Us
            </h3>
            <p className="text-base text-gray-400 mb-2">Phone: +880 1234-567890</p>
            <p className="text-base text-gray-400 mb-2">Email: support@shutoshoilo.com</p>
            <p className="text-base text-gray-400">Location: Dhaka, Bangladesh</p>
          </div>
        </div>


        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}