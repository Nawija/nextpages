import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
  },
});

export async function fetchAPI(query, { variables } = {}) {
  const data = await client.request(query, variables);
  return data;
}