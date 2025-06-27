import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {LayoutProps} from "@/interfaces";

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;