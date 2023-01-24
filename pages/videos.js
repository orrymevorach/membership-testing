import { getVideos } from 'lib/api';
import VideoCategory from 'components/video-library/videoCategory';
import sortVideosIntoCategories from 'utils/sortVideosIntoCategories';
import Layout from 'components/layout';

export default function Videos({ videoData }) {
  const sortedCategories = sortVideosIntoCategories(videoData);
  return (
    <Layout>
      {sortedCategories.map(categoryData => (
        <VideoCategory key={categoryData.category} {...categoryData} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const videoData = await getVideos();
  return {
    props: {
      videoData: videoData.videos,
    },
  };
}
