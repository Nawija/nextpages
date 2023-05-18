import "../styles/global.css";
import Nav from "../components/Nav";

export default function MyApp({ Component, pageProps }) {
    return (
        <main className=" max-w-screen-xl mx-auto px-3">
            <Nav />
            <Component {...pageProps} />
        </main>
    );
}
