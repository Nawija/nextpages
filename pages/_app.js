import { fetchAPI } from "../lib/ssrDato";
import "../styles/global.css";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
    return (
        <main className=" max-w-screen-xl mx-auto">
            <Nav />
            <Component {...pageProps} />
        </main>
    );
}

export async function getServerSideProps() {
    const data = await fetchAPI(`
    query {
      allPoradniks {
        id
        title
      }
    }
  `);

    return {
        props: {
            posts: data.allPoradniks,
        },
    };
}
