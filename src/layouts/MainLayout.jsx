// import { Open_Sans } from 'next/font/google'

import PropTypes from "prop-types";

// const openSans = Open_Sans({
// 	variable: '--font-openSans',
// 	subsets: ['latin'],
// })

export default function MainLayout({ children}) {
  return (
    <div className={`flex min-h-screen w-screen bg-bg text-black`}>
      <main className="flex grow flex-col">{children}</main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
