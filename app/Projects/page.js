export default function Projects() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-8 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      {/* Card 1 */}
      <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Project 1</h3>
          <p className="text-gray-600 mb-4">
            Description of your first project goes here. Add details about what
            makes it special.
          </p>
          <a
            href="https://github.com/yourusername/project1"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Project 2</h3>
          <p className="text-gray-600 mb-4">
            Description of your second project goes here. Add details about what
            makes it special.
          </p>
          <a
            href="https://github.com/yourusername/project2"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Project 3</h3>
          <p className="text-gray-600 mb-4">
            Description of your third project goes here. Add details about what
            makes it special.
          </p>
          <a
            href="https://github.com/yourusername/project3"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">Project 4</h3>
          <p className="text-gray-600 mb-4">
            Description of your fourth project goes here. Add details about what
            makes it special.
          </p>
          <a
            href="https://github.com/yourusername/project4"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
