import Order from './components/order/Order';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import './App.css';

function App() {
  return (
    <div id="App">
      <Navbar/>
      <main id="main">
        <Hero />
        <Order />
      </main>
    </div>
  );
}

export default App;
