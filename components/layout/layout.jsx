import Nav from 'components/nav';
import SEO from 'components/seo';

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Nav />
      <main>
        <h1>Pashion Pilates</h1>
        {children}
      </main>
    </>
  );
}
