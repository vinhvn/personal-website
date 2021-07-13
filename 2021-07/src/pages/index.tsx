import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import Layout from '@/components/Layout';
import avatar from '@/assets/avatar.jpg';

const IndexPage: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Layout title="Vincent Nguyen">
      <style jsx global>
        {`
          body {
            background-color: ${darkMode ? '#111827' : 'white'};
          }
        `}
      </style>
      <div className="max-w-screen-md mx-auto p-4 sm:p-8">
        <div id="biography" className="mt-4 sm:mt-12">
          <div id="header">
            <Image
              src={avatar}
              alt="Avatar"
              width={96}
              height={96}
              placeholder="blur"
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold">
              <span className="block sm:inline">Hi, I&apos;m </span>
              <span className="block sm:inline">Vincent Nguyen.</span>
            </h1>
            <p>Body</p>
          </div>
          <div id="footer">Links</div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
