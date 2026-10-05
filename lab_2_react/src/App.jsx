import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './App.css'; // <-- переконайся, що цей імпорт є!

function App() {
  return (
    <div className="cv-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;