import React from "react";
import {LayoutProps} from "@/interfaces";
import Sidebar from "@/components/layout/InventoryLayout/Sidebar";

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <div className="flex">
                <Sidebar />
                <main className="ml-64 w-full min-h-screen bg-gray-50">
                    <div className="p-6">{children}</div>
                </main>
            </div>
        </>

    );
}

export default Layout;