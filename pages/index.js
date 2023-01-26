import About from 'components/about';
import Blog from 'components/blog';
import Contact from 'components/contact';
import Layout from 'components/layout';
import { getImage } from 'lib/api';

export default function Home({ logoSrc }) {
  return (
    <Layout logoSrc={logoSrc}>
      <About />
      <Blog />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const image = await getImage({ assetId: '6srknPy0G5DCsRAITXbTHq' });

  console.log('image', image);

  return {
    props: {
      logoSrc: image,
    },
  };
}
