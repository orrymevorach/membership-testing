import Nav from 'components/nav';
import SEO from 'components/seo';
// import { Nav } from 'mevo-components';

export default function Layout({ children, logoSrc }) {
  const navData = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/#about',
    },
    {
      title: 'Blog',
      url: '/#blog',
    },
    {
      title: 'Contact',
      url: '/#contact',
    },
    {
      title: 'Videos',
      url: '/videos',
    },
  ];

  return (
    <>
      <SEO />

      <Nav
        navData={navData}
        logo={logoSrc}
        // LinkElement="a"
        // ImageElement="src"
        // logo="https://images.ctfassets.net/3xoculc7s1t8/6srknPy0G5DCsRAITXbTHq/7a0cf94a69a5fb723013867e569903b1/logo.jpeg"
      />
      <main style={{ margin: '50px 100px' }}>
        <h1>Pashion Pilates</h1>
        {children}
      </main>
    </>
  );
}
