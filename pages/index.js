import { GraphQLClient } from 'graphql-request';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Lista postów z DataCMS:</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const client = new GraphQLClient('https://graphql.datocms.com/',{
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });
  const query = `
    query {
      allPoradniks {
        id
        title
      }
    }
  `;
  const data = await client.request(query);
  
  console.log(data);
  return {
    props: {
      posts: data.allPoradniks,
    },
  };
}
