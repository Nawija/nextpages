import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pl">
                <Head>
                    <title>Seovileo</title>
                    <meta name="description" content="Opis Twojej strony" />
                    <meta
                        name="keywords"
                        content="słowo kluczowe 1, słowo kluczowe 2, słowo kluczowe 3"
                    />
                    <meta name="author" content="Imię i nazwisko autora" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="/assets/favicon.png"
                    />

                    <meta name="robots" content="index, follow" />
                    <meta
                        name="og:title"
                        content="Tytuł udostępniany na mediach społecznościowych"
                    />
                    <meta
                        name="og:description"
                        content="Opis udostępniany na mediach społecznościowych"
                    />
                    <meta
                        name="og:image"
                        content="https://www.twoja-strona.pl/obrazek.jpg"
                    />
                    <meta name="twitter:title" content="Tytuł dla Twittera" />
                    <meta
                        name="twitter:description"
                        content="Opis dla Twittera"
                    />
                    <meta
                        name="twitter:image"
                        content="https://www.twoja-strona.pl/obrazek.jpg"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
