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
                <section id="features" className="mt-20 px-6 sm:px-12 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Why Choose InventoVault?
                    </h2>
                    <p className="text-gray-600 mb-10">
                        Built to help retailers and small businesses manage inventory with ease and precision.
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
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust Indicators */}
                <section className="mt-24 text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 border-2 border-white"></div>
                                ))}
                            </div>
                            <span className="ml-2">500+ happy customers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="ml-1">4.9/5 rating</span>
                        </div>
                    </div>
                </section>



                {/* CTA Section */}
                <section className="mt-32 px-6 sm:px-12 max-w-5xl mx-auto text-center">
                    <div className="relative bg-white border border-blue-100 shadow-2xl rounded-3xl p-8 md:p-16 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%22%23005FCC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=20 cy=20 r=4/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
                                Join the InventoVault Community
                            </h3>
                            <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-8">
                                Get the latest inventory tips, product updates, and business growth strategies — straight to your inbox.
                            </p>

                            <form className="flex flex-col sm:flex-row justify-center gap-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-sm text-gray-400 mt-4">
                                No spam. Just valuable insights and updates.
                            </p>
                        </div>
                    </div>
                </section>


            </main>



            {/*<main className="pt-24 pb-16 bg-gradient-to-br from-white to-blue-50 min-h-screen">*/}
            {/*    /!* Hero Section *!/*/}
            {/*    <section className="text-center px-6 sm:px-12 max-w-4xl mx-auto">*/}
            {/*        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-6">*/}
            {/*            Smarter Inventory for{" "}*/}
            {/*            <span className="text-blue-600">Growing Businesses</span>*/}
            {/*        </h1>*/}
            {/*        <p className="text-lg text-gray-600 mb-8">*/}
            {/*            InventoVault helps you manage stock levels, track sales, and make*/}
            {/*            informed decisions — all in one place.*/}
            {/*        </p>*/}
            {/*        <div className="flex justify-center gap-4">*/}
            {/*            <a*/}
            {/*                href="/dashboard"*/}
            {/*                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition font-medium"*/}
            {/*            >*/}
            {/*                Get Started*/}
            {/*            </a>*/}
            {/*            <a*/}
            {/*                href="#features"*/}
            {/*                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg transition font-medium"*/}
            {/*            >*/}
            {/*                Learn More*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </section>*/}

            {/*    /!* Features Preview *!/*/}
            {/*    <section*/}
            {/*        id="features"*/}
            {/*        className="mt-20 px-6 sm:px-12 max-w-6xl mx-auto text-center"*/}
            {/*    >*/}
            {/*        <h2 className="text-3xl font-bold text-gray-800 mb-4">*/}
            {/*            Why Choose InventoVault?*/}
            {/*        </h2>*/}
            {/*        <p className="text-gray-600 mb-10">*/}
            {/*            Built to help retailers and small businesses manage inventory with*/}
            {/*            ease and precision.*/}
            {/*        </p>*/}

            {/*        <div className="grid gap-8 md:grid-cols-3 mt-10">*/}
            {/*            {[*/}
            {/*                {*/}
            {/*                    title: "Real-Time Tracking",*/}
            {/*                    desc: "Monitor stock levels, sales, and purchases instantly from your dashboard.",*/}
            {/*                    icon: "📊",*/}
            {/*                },*/}
            {/*                {*/}
            {/*                    title: "Easy Reporting",*/}
            {/*                    desc: "Generate monthly insights for stock movement, sales trends, and performance.",*/}
            {/*                    icon: "📈",*/}
            {/*                },*/}
            {/*                {*/}
            {/*                    title: "Multi-Store Ready",*/}
            {/*                    desc: "Manage inventory across branches, suppliers, and product variants with ease.",*/}
            {/*                    icon: "🏬",*/}
            {/*                },*/}
            {/*            ].map((card, idx) => (*/}
            {/*                <div*/}
            {/*                    key={idx}*/}
            {/*                    className="bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 rounded-2xl border border-gray-100 p-8 text-left"*/}
            {/*                >*/}
            {/*                    <div className="text-4xl mb-4">{card.icon}</div>*/}
            {/*                    <h3 className="text-xl font-semibold text-blue-700 mb-2">*/}
            {/*                        {card.title}*/}
            {/*                    </h3>*/}
            {/*                    <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </section>*/}
            {/*</main>*/}

        </>
    );
}
