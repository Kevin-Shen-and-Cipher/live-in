import Footer from "./footer"
import Header from "./header"
import Head from 'next/head'

type Props = {
    children: JSX.Element,
};

const Layout = ({ children }: Props) => {
    const title = process.env.NEXT_PUBLIC_APP_NAME as string;
    const description = process.env.NEXT_PUBLIC_APP_DESCRIPTION as string;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-100">
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout