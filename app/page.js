// pages/index.js

import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Voyager</title>
        <meta name="description" content="Discover the world with Voyager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Voyager</h1>
        </header>

        <main className="text-center py-20 px-6">
          <h2 className="text-5xl font-extrabold mb-6">
            Explore the World with Voyager
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Plan your adventures, discover breathtaking destinations, and share
            your journey with others. Start exploring today.
          </p>
          <Link href="/blogs">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Get Started
            </button>
          </Link>
        </main>

        <section id="features" className="py-20 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">Interactive Maps</h4>
                <p>Navigate the world with our easy-to-use interactive maps.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">
                  Personalized Itineraries
                </h4>
                <p>Create and customize your travel plans effortlessly.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">Community Sharing</h4>
                <p>Share your adventures and connect with fellow travelers.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-400 py-6 text-center">
          <p>&copy; 2024 Voyager. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
