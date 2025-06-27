import Head from "next/head";


export default function Home() {
    return (
        <>
            <Head>
                <title>InventoVault – Smart Inventory Management</title>
                <meta
                    name="description"
                    content="Track, manage, and optimize your inventory effortlessly."
                />
            </Head>


            <main className="pt-24 pb-16 bg-gradient-to-br from-white to-blue-50 min-h-screen">
                {/* Hero Section */}
                <section className="text-center px-6 sm:px-12 max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        Smarter Inventory for{" "}
                        <span className="text-blue-600">Growing Businesses</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        InventoVault helps you manage stock levels, track sales, and make
                        informed decisions — all in one place.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="/dashboard"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition font-medium"
                        >
                            Get Started
                        </a>
                        <a
                            href="#features"
                            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition font-medium"
                        >
                            Learn More
                        </a>
                    </div>
                </section>

                {/* Features Preview */}
                <section
                    id="features"
                    className="mt-20 px-6 sm:px-12 max-w-6xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Why Choose InventoVault?
                    </h2>
                    <p className="text-gray-600 mb-10">
                        Built to help retailers and small businesses manage inventory with
                        ease and precision.
                    </p>

                    <div className="grid gap-8 md:grid-cols-3 mt-10">
                        {[
                            {
                                title: "Real-Time Tracking",
                                desc: "Monitor stock levels, sales, and purchases instantly from your dashboard.",
                                icon: "📊",
                            },
                            {
                                title: "Easy Reporting",
                                desc: "Generate monthly insights for stock movement, sales trends, and performance.",
                                icon: "📈",
                            },
                            {
                                title: "Multi-Store Ready",
                                desc: "Manage inventory across branches, suppliers, and product variants with ease.",
                                icon: "🏬",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 rounded-2xl border border-gray-100 p-8 text-left"
                            >
                                <div className="text-4xl mb-4">{card.icon}</div>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                </section>
            </main>

        </>
    );
}
