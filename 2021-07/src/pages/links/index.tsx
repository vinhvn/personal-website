import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCoffee,
  faHome,
  faScroll,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFigma,
  faGithub,
  faLinkedin,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '@/components/Layout';
import LinkContainer from '@/components/links/LinkContainer';
import avatar from '@/assets/avatar.jpg';

const IndexPage: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Layout title="@vinhvn | links">
      <style jsx global>
        {`
          body {
            background-color: ${darkMode ? '#111827' : 'white'};
          }
        `}
      </style>
      <div
        className={`max-w-screen-md mx-auto flex flex-col min-h-screen w-full h-full justify-between p-4 ${
          darkMode ? 'dark' : ''
        }`}
      >
        <div id="content" className="pb-24">
          <div id="header" className="mt-6 sm:mt-12 mb-8 mx-auto w-24">
            <Image
              src={avatar}
              alt="Avatar"
              width={96}
              height={96}
              placeholder="blur"
              className="rounded-full"
            />
            <div className="text-center font-bold tracking-wider py-2 transition-colors duration-300 text-black dark:text-white">
              @vinhvn
            </div>
          </div>

          <LinkContainer
            from="hover:from-black"
            to="hover:to-gray-800"
            href="/"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faHome} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">Personal Website</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-yellow-900"
            to="hover:to-yellow-700"
            href="https://www.github.com/vinhvn"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faGithub} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">GitHub</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-red-700"
            to="hover:to-red-500"
            href="https://www.linkedin.com/in/vinhvn"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">LinkedIn</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-yellow-700"
            to="hover:to-yellow-500"
            href="/r.pdf"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faScroll} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">Resume</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-yellow-500"
            to="hover:to-yellow-300"
            href="mailto:vincentn337@gmail.com"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faAt} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">Email Me</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-green-600"
            to="hover:to-green-400"
            href="https://open.spotify.com/user/tjplab770o3f0ig61a2n3il5x?si=a72d54673cb74aea"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSpotify} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">Spotify</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-blue-600"
            to="hover:to-blue-400"
            href="https://www.figma.com/@vinhvn"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faFigma} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">Figma</span>
          </LinkContainer>

          <LinkContainer
            from="hover:from-indigo-500"
            to="hover:to-purple-500"
            href="https://www.paypal.me/vinhhvn"
          >
            <div className="absolute left-0 ml-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faCoffee} className="text-3xl w-8 h-8" />
            </div>
            <span className="font-semibold">Buy Me A Coffee</span>
          </LinkContainer>
        </div>

        <div id="footer" className="">
          <button
            type="button"
            onClick={handleToggleDarkMode}
            className={`flex w-full justify-center items-center transition-all ${
              darkMode ? 'bg-red-500' : 'bg-green-500'
            } rounded-lg shadow mb-4 transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <span className="text-white text-sm font-semibold py-2">
              {darkMode ? 'DISABLE' : 'ENABLE'} DARK MODE
            </span>
          </button>
          <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 rounded-lg shadow transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <a href="/" className="flex justify-center w-full py-2">
              <span className="text-black dark:text-white text-sm font-semibold">
                BUILT WITH ❤️ BY VINCENT NGUYEN
              </span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
