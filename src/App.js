import './App.css';
import Navbar from './components/Navbar';
import Hero  from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section>
        <Card />
      </section>
      
    </div>
  );
}

export default App;
