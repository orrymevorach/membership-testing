import { getVideos } from 'lib/api';
import VideoCategory from 'components/video-library/videoCategory';
import sortVideosIntoCategories from 'utils/sortVideosIntoCategories';
import Layout from 'components/layout';
import { getImage } from 'lib/api';

export default function Videos({ videoData, logoSrc }) {
  const sortedCategories = sortVideosIntoCategories(videoData);
  return (
    <Layout logoSrc={logoSrc}>
      {sortedCategories.map(categoryData => (
        <VideoCategory key={categoryData.category} {...categoryData} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const videoData = await getVideos();
  const image = await getImage({ assetId: '6srknPy0G5DCsRAITXbTHq' });
  return {
    props: {
      videoData: videoData.videos,
      logoSrc: image,
    },
  };
}
