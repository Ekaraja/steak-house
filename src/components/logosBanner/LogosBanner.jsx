import store1 from '../../assets/icons/pyszne.svg';
import store2 from '../../assets/icons/deligoo.svg';
import store3 from '../../assets/icons/glovo.svg';
import store4 from '../../assets/icons/ubereats.svg';
import store5 from '../../assets/icons/boldfood.svg';
import "./logosBanner.scss"

function LogosBanner() {
    return ( 
        <div className="stores">
        <ul className="stores__list">
          <ul className="stores__list__first">
            <li>
              <a href="#">
                <img src={store1} alt="Pyszne.pl logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={store2} alt="Deligoo logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={store3} alt="Glovo logo" />
              </a>
            </li>
          </ul>
          <ul className="stores__list__second">
            <li>
              <a href="#">
                <img src={store4} alt="UberEats logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={store5} alt="BoldFood logo" />
              </a>
            </li>
          </ul>
        </ul>
      </div>
     );
}

export default LogosBanner;