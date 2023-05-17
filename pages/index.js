import { fetchAPI } from "../lib/ssrDato";

export default function Home({ posts }) {
    return (
        <main className="flex-center flex-col py-24">
            <h1 className="orange_gradient text-4xl mb-12">Lista postów z DataCMS:</h1>
            <ul>
                {posts.map((post) => (
                    <p key={post.id}>{post.title}</p>
                ))}
            </ul>
        </main>
    );
}

export async function getServerSideProps() {
    // const client = new GraphQLClient("https://graphql.datocms.com/", {
    //     headers: {
    //         authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    //     },
    // });
    const data = await fetchAPI(`
    query {
      allPoradniks {
        id
        title
      }
    }
  `);
    // const data = await client.request(query);
    return {
        props: {
            posts: data.allPoradniks,
        },
    };
}
