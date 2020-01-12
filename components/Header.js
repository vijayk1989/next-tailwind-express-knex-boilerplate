import Link from 'next/link';

const Header = () => (
  <div className="flex justify-between items-center">
    <div className="logo">My Site</div>
    <div className="navbar">
      <ul className="inline-flex list-none">
        <li className="px-4">
          <Link href="/">
            <a title="Home">Blog</a>
          </Link>
        </li>
        <li className="px-4">
          <Link href="/about">
            <a title="About page">Resume</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
