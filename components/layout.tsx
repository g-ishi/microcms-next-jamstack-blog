import NavBar, { NavBarProps } from './layouts/NavBar';
import Footer from './layouts/Footer';
import { ReactNode } from 'react';

const NAV: NavBarProps = {
  pageTitle: {
    title: 'Perfect Company',
    link: '/',
  },
  navItems: [
    {
      title: 'Blogs',
      link: '/blogs',
    },
    {
      title: 'Solutions',
      link: '/solutions',
    },
    {
      title: 'Cases',
      link: '/cases',
    },
  ],
};

const FOOTER = {
  companyName: 'Perfect Company',
  companyDescription:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  email: 'xxxxx@perfect.company.com',
  phoneNumber: 'xx-xxxx-xxxx-xxxx',
};

interface Layout {
  children: ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <NavBar {...NAV} />
      <main className="my-5 mx-5 min-h-3/4 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-44">
        {children}
      </main>
      <Footer {...FOOTER} />
    </>
  );
};

export default Layout;
