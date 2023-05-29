import "../styles/global.css";
import Nav from "../components/Nav";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main className=" max-w-screen-xl mx-auto px-3">
                <Nav />

                <Component {...pageProps} />
            </main>
        </>
    );
}
