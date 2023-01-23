import About from 'components/about';
import Blog from 'components/blog';
import Contact from 'components/contact';
import Nav from 'components/nav';
import SEO from 'components/seo';

export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <h1>Pashion Pilates</h1>
        <Nav />
        <About />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
