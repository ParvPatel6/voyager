"use client";
import React from "react";

const Page = () => {
  // Add useEffect for client-side operations
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render content until mounted on client
  if (!mounted) {
    return null;
  }

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Parv Patel</span> currently
            studying <br className="hidden lg:block" />
            at{" "}
            <span className="font-semibold underline decoration-primary">
              SAIT Polytechnic
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Enthusiastic and hardworking student{" "}
            <br className="hidden lg:block" />
            looking for a Co-op opportunity in{" "}
          </p>
        </div>

        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="/images/IMG_2997.jpg"
            alt="Parv Patel"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Why Choose me ?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I am a passionate and hardworking student who is always looking
              for new opportunities to learn and grow. I have a strong
              foundation in web development and am always looking to expand my
              skillset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Always Up-to-Date
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Regularly updated to keep up with the latest web development
                trends
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                great team player
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I am a great team player and always willing to help out my
                teammates
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20  4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Always challenging myself
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I am always looking for new challenges to help me grow as a
                developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
