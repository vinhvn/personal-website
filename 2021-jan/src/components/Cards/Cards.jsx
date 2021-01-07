import React from 'react'
import { GitHub, Linkedin, MapPin, Mail, Briefcase, Phone } from 'react-feather'
import Card from '../Card'

export default function Cards() {
  return (
    <div className="flex flex-shrink-0 w-full h-cardContainer items-center justify-center dark:bg-gray-900">
      <Card
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-10">Academics 🎓</span>
            <div className="flex flex-col justify-between h-full text-md">
              <span>I'm currently a <span className="text-red-500 font-bold">3<sup>rd</sup></span> year undergraduate student attending <a href="https://carleton.ca" className="text-red-500 font-bold transition-colors hover:text-red-700">Carleton University</a> for a Bachelor of Computer Science.</span>
            </div>
          </div>
        }
      />

      <Card
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-10">Hello there!</span>
            <div className="flex flex-col justify-between h-full text-md">
              <span className="text-8xl pb-6">🎸</span>
              <span>I'm <span className="font-bold text-red-500">Vincent</span> (but I usually go by "Vinh") and <span className="italic">this</span> is my personal website.</span>
              <span>Thanks for visiting by the way! 😄</span>
              <span>I'm an aspiring developer, currently pursuing a B.C.S at <a href="https://carleton.ca" className="text-red-500 font-bold transition-colors hover:text-red-700">Carleton University</a>.</span>
              <span>If I'm not coding, I probably either jamming on the bass guitar, listening to tunes, or playing games.</span>
            </div>
          </div>
        }
      />

      <Card
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="pb-4 text-5xl font-bold font-serif">Vincent <span className="text-red-500">Vinh</span> Nguyen</span>
              <span className="text-xl font-semibold font-serif"><span className="text-red-500">Full Stack</span> Web Developer</span>
            </div>
            <div className="flex flex-col text-md h-52 justify-between">
              <span className="flex flex-row items-center transition-colors"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
              <span className="flex flex-row items-center transition-colors"><Phone className="mr-2" size={16} color="currentColor" />+1 (613) 852-5388</span>
              <a href="mailto:vinhh.nguyen@carleton.ca" className="flex flex-row items-center transition-colors hover:text-red-500"><Mail className="mr-2" size={16} color="currentColor" />vinhh.nguyen@carleton.ca</a>
              <a href="https://creativelayer.com" className="flex flex-row items-center transition-colors hover:text-red-500"><Briefcase className="mr-2" size={16} color="currentColor" />creativelayer.com</a>
              <a href="https://github.com/vinhvn" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />github.com/vinhvn</a>
              <a href="https://linkedin.com/in/vinhvn" className="flex flex-row items-center transition-colors hover:text-red-500"><Linkedin className="mr-2" size={16} color="currentColor" />linkedin.com/in/vinhvn</a>
            </div>
          </div>
        }
      />
    </div>
  )
}
