import Order from './components/order/Order';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import menu from "./assets/icons/menu.svg"
import "./App.css"

function App() {
  return (
    <div id="App">
      <Navbar pageWrapId={"main"} outerContainerId={"nav"} customBurgerIcon={ <img src={menu} alt="menu"/> } />
      <main id="main">
        <Hero/>
        <Order/>
      </main>
    </div>
  );
}

export default App;
