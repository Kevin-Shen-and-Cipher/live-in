import Footer from "./footer"
import Header from "./header"
import Head from 'next/head'

type Props = {
    children: JSX.Element,
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>{process.env.title}</title>
                <meta name="description" content={process.env.description} />
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