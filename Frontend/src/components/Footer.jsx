import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <span className="h-8 w-8 rounded">
          <img src="https://imgs.search.brave.com/GQifWacQ11ZQqw-SB26Teyx5pZUA9b1TTdRFLqoTb3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjkzNi8yOTM2/ODg2LnBuZw" alt="" />
        </span>
        <span className="text-white font-semibold tracking-wide">REDOX GYM</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-300">
        <a href="#sessions" className="hover:text-white">Sessions</a>
        <a href="#pricing" className="hover:text-white">Pricing</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Designed and Developed by Aryan Agrawal</p>
    </div>
  )
}

export default Footer
