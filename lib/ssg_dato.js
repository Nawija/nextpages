export async function getStaticProps() {
    const client = new GraphQLClient("https://graphql.datocms.com/", {
        headers: {
            authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
        },
    });
    const query =`
    query {
      allPoradniks {
        id
        title
      }
    }
  `;
    const data = await client.request(query);
    return {
        props: {
            posts: data.allPoradniks,
        },
    };
}