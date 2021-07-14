import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCoffee,
  faLink,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFigma,
  faGithub,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '@/components/Layout';
import avatar from '@/assets/avatar.jpg';

const IndexPage: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Layout title="Vincent Nguyen" dark={darkMode}>
      <style jsx global>
        {`
          body {
            background-color: ${darkMode ? '#111827' : 'white'};
          }
        `}
      </style>
      <nav className="sticky top-0 z-10 px-4 py-3 bg-white dark:bg-gray-900 shadow dark:shadow-none dark:border-b dark:border-gray-700">
        <div className="flex flex-row justify-center items-center space-x-2">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            🌙 Toggle Dark Mode
          </span>
          <Toggle
            defaultChecked={darkMode}
            icons={false}
            onChange={handleToggleDarkMode}
          />
        </div>
      </nav>
      <div
        id="biography"
        className="max-w-screen-md mx-auto p-4 sm:p-8 mt-4 sm:mt-12 lg:mt-24 mb-8 sm:mb-16 xl:fixed xl:top-0 xl:left-0 xl:mx-0 xl:pt-12 xl:ml-24 xl:w-2/5 xl:max-w-none xl:flex xl:flex-col xl:justify-between xl:h-5/6"
      >
        <div id="header" className="mb-8">
          <h1 className="text-4xl xl:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100 space-y-2">
            <span className="block">Hi! 👋</span>
            <span className="block">I&apos;m Vincent.</span>
          </h1>
          <div
            id="body"
            className="space-y-2 text-sm sm:text-base xl:text-lg text-gray-800 dark:text-gray-100"
          >
            <p>
              I bring a passion for robust engineering 🚀, creative design 🎨,
              and <i>beautiful</i> digital experiences!
            </p>
            <p>
              I am a senior at Carleton University where I am pursuing a
              Bachelor&apos;s of Computer Science. Currently, I am completing an
              internship as a Software Developer at Kinaxis. I&apos;ve been
              writing code for 5+ years, most notably working on the web side of
              things. In my free time, I enjoy comic books, music, and video
              games.
            </p>
            <p>
              Feel free to{' '}
              <a
                href="mailto:vincentn337@gmail.com"
                className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-400"
              >
                reach out
              </a>{' '}
              and let&apos;s have a chat!
            </p>
          </div>
        </div>

        <div id="links" className="flex justify-between items-center">
          <Image
            src={avatar}
            alt="Avatar"
            width={64}
            height={64}
            placeholder="blur"
            className="rounded-full"
          />
          <div className="flex justify-between items-center w-full max-w-xs ml-4">
            <a
              href="https://www.github.com/vinhvn"
              title="GitHub"
              className="text-gray-900 dark:text-gray-100 transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vinhvn"
              title="LinkedIn"
              className="text-gray-900 dark:text-gray-100 transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1UjTZzVhJoTKityUbo9Qd7Kx0Ezt6UDkt/view?usp=sharing"
              title="Resume"
              className="text-gray-900 dark:text-gray-100 transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={faScroll}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a
              href="mailto:vincentn337@gmail.com"
              title="Email"
              className="text-gray-900 dark:text-gray-100 transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faAt} className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="/links"
              title="Links"
              className="text-gray-900 dark:text-gray-100 transform duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={faLink}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        id="content"
        className="max-w-screen-md mx-auto p-4 sm:p-8 xl:py-24 xl:ml-1/2 xl:w-5/12 xl:max-w-none"
      >
        <div id="experience" className="mb-8">
          <h2 className="text-3xl text-gray-900 dark:text-gray-100 font-bold mb-4">
            Experience
          </h2>
          <div className="space-y-4">
            <div className="border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                MAY 2021 - PRESENT
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                Kinaxis
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">
                Software Developer Intern
              </p>
            </div>

            <div className="border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                JUL 2020 - APR 2021
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                Creative Layer
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">
                Software Developer Intern
              </p>
            </div>

            <div className="border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                SEP 2019 - APR 2020
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                Carleton University
              </h3>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">
                Computer Science Teaching Assistant
              </p>
            </div>
          </div>
        </div>

        <div id="projects" className="mb-8">
          <h2 className="text-3xl text-gray-900 dark:text-gray-100 font-bold mb-4">
            Projects
          </h2>
          <div className="space-y-4">
            <a
              href="https://www.github.com/vinhvn/serve-u"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                JUN 2021
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                🍽️ ServeU
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                ServeU is a personal and private asset repository that allows
                users to upload and share files with friends and colleagues.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Demo available on GitHub.
              </p>
            </a>

            <a
              href="https://www.github.com/vinhvn/randimals"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                MAY 2021
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                🐻 Randimals
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Randimals is a TypeScript-friendly, unique and adorable URL-safe
                ID generator for your projects.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Demo available on GitHub.
              </p>
            </a>

            <a
              href="https://www.github.com/naek2k/online-video-poker"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                APR 2021
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                🃏 Online Video Poker
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Online Video Poker is a web-based version of Video Poker with a
                modern and reimagined interface.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Demo available on GitHub.
              </p>
            </a>

            <a
              href="https://www.github.com/comp3004teamnumber1/sundial"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                DEC 2020
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                ☀️ Sundial
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Sundial is a weather and event planner combo mobile app that
                offers weather-based insights on users&apos; scheduled events.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Available on Google Play.
              </p>
            </a>

            <a
              href="https://www.github.com/vinhvn/online-bookstore"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                APR 2020
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                📚 Booklyn Nine-Nine
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Bookyln Nine-Nine is an online bookstore where users can browse
                and shop for books while managers can add and manage inventory
                of books.
              </p>
            </a>

            <a
              href="https://www.github.com/vinhvn/heroes-monsters-and-dragons"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                APR 2020
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                🐲 Heroes, Monsters, and Dragons
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Heroes, Monsters, and Dragons is an adventure simulator where
                heroes are placed in an arena and face off against the Dragon in
                order to secure the emerald.
              </p>
            </a>

            <a
              href="https://www.github.com/vinhvn/devcloud"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                SEP 2019
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                ☁️ devCloud
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                devCloud is a clone of Devpost, implemented using React, Redux,
                and Firebase to learn about user management, React, and Redux.
              </p>
            </a>

            <a
              href="https://www.github.com/vinhvn/abyss-runner"
              className="block border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                JUN 2018
              </span>
              <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
                🏃 Abyss Runner
              </h3>
              <p className="text-sm text-gray-900 dark:text-gray-200">
                Abyss Runner is an arcade rendition of a dungeon crawler game,
                written in Processing.
              </p>
            </a>
          </div>
        </div>

        <div id="education" className="mb-8">
          <h2 className="text-3xl text-gray-900 dark:text-gray-100 font-bold mb-4">
            Education
          </h2>
          <div className="border-2 border-gray-900 dark:border-gray-700 border-solid rounded-lg p-6 space-y-2 transform duration-300 hover:scale-110">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
              SEP 2018 - APR 2023
            </span>
            <h3 className="text-2xl text-indigo-600 dark:text-indigo-500 font-bold">
              Carleton University
            </h3>
            <p className="text-gray-900 dark:text-gray-100 font-semibold">
              Honours Computer Science, Software Engineering
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
