import About from 'components/about';
import Blog from 'components/blog';
import Contact from 'components/contact';
import Layout from 'components/layout';

export default function Home() {
  return (
    <Layout>
      <About />
      <Blog />
      <Contact />
    </Layout>
  );
}
