import Link from 'next/link';

type NavItem = {
  link: string;
  title: string;
};

export interface NavBarProps {
  pageTitle: NavItem;
  navItems: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ pageTitle, navItems }) => {
  return (
    <nav className="flex h-14 items-center justify-between bg-slate-500">
      <Link className="mx-5 text-lg" href={pageTitle.link}>
        {pageTitle.title}
      </Link>
      <div>
        {navItems.map(({ link, title }, i) => {
          return (
            <Link className="mx-5 text-lg" key={i} href={link}>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  pageTitle: {
    link: 'page-title',
    title: 'page-title',
  },
  navItems: [
    {
      link: 'nav1',
      title: 'nav1',
    },
    {
      link: 'nav1',
      title: 'nav1',
    },
    {
      link: 'nav1',
      title: 'nav1',
    },
    {
      link: 'nav1',
      title: 'nav1',
    },
  ],
};

export default NavBar;
