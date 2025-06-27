import React from "react";
import {LayoutProps} from "@/interfaces";
import Footer from "@/components/layout/InventoryLayout/Footer";
import Header from "@/components/layout/InventoryLayout/Header";

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header />
            <main className="min-h-screen p-5">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;