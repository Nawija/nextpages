import { fetchAPI } from "../lib/ssr_Dato";
import Image from "next/image";

export default function Home({ posts }) {
    return (
        <main className="flex-center flex-col">
            <h1 className="orange_gradient text-4xl mb-12">
                Lista postów z DataCMS:
            </h1>
            <ul>
                {posts.map((post) => (
                    <div key={post.id}>
                        <p>{post.title}</p>
                        <Image
                            src={post.img.url}
                            width={500}
                            height={500}
                            alt={post.title}
                        />
                    </div>
                ))}
            </ul>
        </main>
    );
}

export async function getServerSideProps() {
    const data = await fetchAPI(`
    query {
      allPoradniks {
        id
        title
        img {
            url
          }
      }
    }
  `);
    return {
        props: {
            posts: data.allPoradniks,
        },
    };
}
