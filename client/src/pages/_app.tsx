import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/InventoryLayout/Layout";
import HomeLayout from "@/components/layout/HomeLayout/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";


export default function App({ Component, pageProps, router }: AppProps) {
    const isLanding = router.pathname === "/";

    return (
        <ApolloProvider client={client}>
            {isLanding ? (
                <HomeLayout>
                    <Component {...pageProps} />
                </HomeLayout>
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </ApolloProvider>
    );
}
