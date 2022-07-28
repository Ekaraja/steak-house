import Order from './components/order/Order';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Order/>
    </div>
  );
}

export default App;
