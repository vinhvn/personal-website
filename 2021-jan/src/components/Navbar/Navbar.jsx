import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex px-4 py-6 w-full items-center sm:mb-16">
      <div className="flex px-4 w-full sm:w-80 items-center justify-between text-gray-500 dark:text-gray-300">
        <Link to="/about" className="transition-all transform outline-none focus:outline-none hover:text-gray-400 hover:scale-105 active:text-gray-200">About Me</Link>
        /
        <Link to="/experience" className="transition-all transform outline-none focus:outline-none hover:text-gray-400 hover:scale-105 active:text-gray-200">Experience</Link>
        /
        <Link to="/projects" className="transition-all transform outline-none focus:outline-none hover:text-gray-400 hover:scale-105 active:text-gray-200">Projects</Link>
      </div>
    </div>
  )
}
