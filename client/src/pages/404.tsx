import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center min-h-screen  px-6">
            <div className="max-w-xl text-center">
                <h1 className="text-5xl font-extrabold text-blue-600">Oops! Broken Link</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-600">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
