import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Package, BarChart, Archive, Settings } from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { href: "/inventory", label: "Inventory", icon: <Archive size={20} /> },
    { href: "/products", label: "Products", icon: <Package size={20} /> },
    { href: "/reports", label: "Reports", icon: <BarChart size={20} /> },
    { href: "/settings", label: "Settings", icon: <Settings size={20} /> },
];

const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className="w-64 bg-white h-screen shadow-md fixed left-0 top-0 z-50">
            <div className="p-6 text-xl font-bold text-blue-600">InventoVault</div>
            <nav className="mt-4 space-y-2">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <div
                            className={`flex items-center px-6 py-3 hover:bg-blue-50 cursor-pointer transition rounded-r-full ${
                                router.pathname === item.href
                                    ? "bg-blue-100 text-blue-700 font-semibold"
                                    : "text-gray-700"
                            }`}
                        >
                            <span className="mr-3">{item.icon}</span>
                            <span>{item.label}</span>
                        </div>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
