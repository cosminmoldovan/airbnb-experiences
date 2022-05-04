import './App.css';
import Navbar from './components/Navbar';
import Hero  from './components/Hero';
import Card from './components/Card';
import img1 from './images/card-img1.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section>
        <Card
          img={img1}
          rating="5.0"
          reviewCount={6}
          location="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
         />
      </section>
      
    </div>
  );
}

export default App;
