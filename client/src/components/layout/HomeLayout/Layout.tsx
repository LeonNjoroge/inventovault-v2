import React from "react";
import {LayoutProps} from "@/interfaces";
import Footer from "@/components/layout/HomeLayout/Footer";
import Header from "@/components/layout/HomeLayout/Header";

const HomeLayout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header />
            <main className="min-h-screen pt-5">{children}</main>
            <Footer />
        </>
    );
}

export default HomeLayout;