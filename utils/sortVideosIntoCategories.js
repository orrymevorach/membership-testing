const createCategories = videos => {
  let categories = [];
  for (let i = 0; i < videos.length; i++) {
    if (!categories.includes(videos[i].category)) {
      categories.push(videos[i].category);
    }
  }
  return categories.map(category => {
    return {
      category,
      items: [],
    };
  });
};

const sortVideos = ({ videoData = [], categories = [] }) => {
  return categories.map(categoryData => {
    const { category, items } = categoryData;
    for (let i = 0; i < videoData.length; i++) {
      if (category === videoData[i].category) {
        items.push(videoData[i]);
      }
    }
    return categoryData;
  });
};

export default function sortVideosIntoCategories(videoData) {
  const categories = createCategories(videoData);
  const sortedVideos = sortVideos({ categories, videoData });
  return sortedVideos;
}
