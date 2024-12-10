export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="space-y-4 mb-8">
        <p className="text-lg">Hi, I&apos;m [Parv]</p>
        <p className="text-lg">
          I&apos;m a [Your Profession] based in [Your Location]
        </p>
        <p className="text-lg">I specialize in [Your Skills/Expertise]</p>
        <p className="text-lg">[Add more personal/professional details]</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p className="text-lg">[Your work experience details]</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-lg">[Your education details]</p>
      </div>

      <div className="flex space-x-6">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-600 hover:text-blue-800 transition-colors"
        >
          <i className="fab fa-linkedin fa-fw"></i>
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
        >
          <i className="fab fa-github fa-fw"></i>
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-400 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-twitter fa-fw"></i>
        </a>
        <a
          href="https://www.instagram.com/parv_206/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-pink-600 hover:text-pink-800 transition-colors"
        >
          <i className="fab fa-instagram fa-fw"></i>
        </a>
      </div>
    </div>
  );
}
