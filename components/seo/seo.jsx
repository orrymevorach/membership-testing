import Head from 'next/head';
import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    var script = document.createElement('script');
    script.src = 'https://cdn.memberspace.com/scripts/widgets.js';
    var element = document.getElementsByTagName('script')[0];
    element.parentNode.insertBefore(script, element);
  }, []);
  return (
    <Head>
      <title>Welcome to Pashion Pilates</title>
      <meta
        name="description"
        content="Pashion Pilates is a pilates subscription website, with instructors Sheila and Pari Hosseini"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="https://images.ctfassets.net/3xoculc7s1t8/6srknPy0G5DCsRAITXbTHq/7a0cf94a69a5fb723013867e569903b1/logo.jpeg"
      />
    </Head>
  );
}
