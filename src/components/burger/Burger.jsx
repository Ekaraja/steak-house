import { slide as Menu } from 'react-burger-menu';
import './burger.scss';

function Burger(props) {
    return ( 
        <Menu {...props}>
        <a className="menu-item" href="#">
          Steaks
        </a>

        <a className="menu-item" href="#">
          Burgers
        </a>

        <a className="menu-item" href="#">
          French fries
        </a>

        <a className="menu-item" href="#">
          Drinks
        </a>

        <a className="menu-item" href="#">
          Gdzie dowozimy?
        </a>

        <a className="menu-item" href="#">
          Kontakt
        </a>
      </Menu>
     );
}

export default Burger;