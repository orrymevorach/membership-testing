import SEO from 'components/seo';
import { getVideos } from 'lib/api';
import VideoCategory from 'components/video-library/videoCategory';
import sortVideosIntoCategories from 'utils/sortVideosIntoCategories';

export default function Videos({ videoData }) {
  const sortedCategories = sortVideosIntoCategories(videoData);
  return (
    <>
      <SEO />
      <main>
        <h1>Pashion Pilates</h1>
        {sortedCategories.map(categoryData => (
          <VideoCategory key={categoryData.category} {...categoryData} />
        ))}
      </main>
    </>
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
