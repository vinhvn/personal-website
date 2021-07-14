import * as React from 'react';

type Props = {
  from: string;
  to: string;
  href: string;
  children?: React.ReactNode;
};

const LinkContainer: React.FunctionComponent<Props> = ({
  from,
  to,
  href,
  children,
}) => (
  <div
    className={`flex bg-white dark:bg-gray-900 border-2 border-black dark:border-gray-700 rounded-lg mb-6 bg-gradient-to-r transition-all transform duration-300 text-black dark:text-white hover:text-white hover:from-${from} hover:to-${to} hover:-translate-y-1`}
  >
    <a href={href} className="flex justify-center py-3 w-full relative">
      {children}
    </a>
  </div>
);

export default LinkContainer;
