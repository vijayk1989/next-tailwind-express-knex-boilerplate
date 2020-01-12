import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'no title' }) => (
  <div className="main-div flex flex-col min-h-screen container xl:w-1/2 lg:w-1/2 md:w-full sm:w-full m-auto text-gray-700 bg-white">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer></Footer>
  </div>
);

export default Layout;
