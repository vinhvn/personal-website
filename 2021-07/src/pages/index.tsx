import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="absolute inset-0 w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold tracking-wide">👋 Hello Next.js</h1>
        <div className="pt-8 text-xl space-x-4">
          <span>Learn</span>
          <a
            className="text-red-500 hover:text-red-700"
            href="https://reactjs.org/docs/getting-started.html"
          >
            React
          </a>
          <a className="text-yellow-500 hover:text-yellow-700" href="https://nextjs.org/docs">
            Next.js
          </a>
          <a className="text-green-500 hover:text-green-700" href="https://tailwindcss.com/docs">
            Tailwind
          </a>
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
          >
            TypeScript
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
