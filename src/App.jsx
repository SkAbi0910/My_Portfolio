import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App(){
  return(
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
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
      <p className="text-gray-700">
  I am a dedicated MERN stack developer with a strong passion for creating scalable, efficient, and user-friendly web applications. I enjoy transforming ideas into full-fledged digital solutions, with expertise in building modern frontends, robust backends, and seamless database integrations. Always eager to learn and grow, I thrive on solving real-world problems through clean code, optimized performance, and innovative design.
</p>

      </section>

      <section id="skills" className="bg-gray-100 py-16 px-6">
  <h3 className="text-3xl font-bold mb-6 text-center">Skills</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {/* Frontend */}
    <div className="p-4 bg-white rounded-xl shadow text-center">React</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">JavaScript (ES6+)</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">HTML5 & CSS3</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Tailwind CSS</div>

    {/* Backend */}
    <div className="p-4 bg-white rounded-xl shadow text-center">Node.js</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Express.js</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Laravel (PHP)</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">RESTful APIs</div>

    {/* Database */}
    <div className="p-4 bg-white rounded-xl shadow text-center">MongoDB</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">MySQL</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Java</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Database Design</div>

    {/* Tools & Others */}
    <div className="p-4 bg-white rounded-xl shadow text-center">Git & GitHub</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">JWT Authentication</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Cloud Deployment (AWS, Firebase)</div>
    <div className="p-4 bg-white rounded-xl shadow text-center">Problem Solving (DSA, HackerRank)</div>
  </div>
</section>


      <Projects/>
      <Blog/>
      <Contact/>

      <footer className="bg-indigo-600 text-white py-6 text-center mt-10">
        {new Date().getFullYear()} Abinaya | MERN Developer
      </footer>
    </div>
  )
}
export default App;