export const GET_VIDEOS = `
  query GetVideos {
    videoCollection {
        items {
          url
          title
            category
            image {
                url
            }
        }
      }  
  }
`;
