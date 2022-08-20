import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <About />
        <ProjectList />
        <Footer />
    </div>
  );
}

export default App;
