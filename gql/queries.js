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

export const GET_IMAGE = `
  query GetImage($id: String!) {
    asset(id: $id) {
      url
    }
  }
`;
