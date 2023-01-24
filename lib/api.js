import { GET_VIDEOS } from 'gql/queries';

export async function fetchGraphQL({
  query,
  isPreview = false,
  variables = {},
}) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          isPreview
            ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },

      body: JSON.stringify({ query, variables }),
    }
  ).then(response => response.json());
}

export const getVideos = async () => {
  const videosResponse = await fetchGraphQL({ query: GET_VIDEOS });
  return {
    videos: videosResponse.data.videoCollection.items,
  };
};

export function filterNullFields(data) {
  return data?.filter(field => !!field);
}
