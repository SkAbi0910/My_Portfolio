function App(){
  return(
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#skillst" className="hover:text-indigo-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#experience" className="hover:text-indigo-600">Experience</a></li>
            <li><a href="#blog" className="hover:text-indigo-600">Blog</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="flex flex-col items-center py-20 bg-gradient-to-b from-indigo-400 to-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Abinaya</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">MERN Stack Developer | Problem Solver | Lifelong Learner</p>
        <a href="#projects" className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">View My Work</a>
      </section>

      <section id="about" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-700">I am a passionate MERN stack developer who loves building scalable, user-friendly web applications.</p>
      </section>

      <section id="skills" className="bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-white rounded-xl shadow text-center">React</div>
          <div className="p-4 bg-white rounded-xl shadow text-center">Node.js</div>
          <div className="p-4 bg-white rounded-xl shadow text-center">Express</div>
          <div className="p-4 bg-white rounded-xl shadow text-center">MongoDB</div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-6">Projects</h3>
        <p className="text-gray-700">Projects will be dynamically loaded here.</p>
      </section>

      <footer className="bg-indigo-600 text-white py-6 text-center mt-10">
        {new Date().getFullYear()} Abinaya | MERN Developer
      </footer>
    </div>
  )
}
export default App;