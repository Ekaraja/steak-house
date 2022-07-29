import './order.scss';
import appStore from '../../assets/icons/app_store.svg';
import huawei from '../../assets/icons/huawei.svg';
import playStore from '../../assets/icons/play_store.svg';
import LogosBanner from '../logosBanner/LogosBanner';

function Order() {
  return (
    <div className="order">
      <LogosBanner/>
      <div className="order-body__container">
        <article className="card --card-offer">
          <div className="card__body">
            <h3>Zestaw dla 3 osób</h3>
            <p>
              Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od
              {' '}
              <span style={{ fontWeight: '600' }} className="highlight-black">
                39 zł
              </span>
            </p>
            <a href="#"><button type="button" className="btn">Zamów online</button></a>
          </div>
        </article>

        <article className="order card --card-uber">
          <div className="card__body">
            <h3>UberEats </h3>
            <p>
              Zamawiaj w aplikacji
              {' '}
              <span style={{ fontWeight: '600' }} className="highlight-red">
                10% taniej.
              </span>
              {' '}
              Pobierz aplikację UberEats już dziś.
            </p>
            <div className="card__icon">
              <a href="#"><img src={playStore} alt="playStore-icon" /></a>
              <a href="#"><img src={appStore} alt="appStore-icon" /></a>
              <a href="#"><img src={huawei} alt="huawei-icon" /></a>
            </div>
            <a href="#"><button type="button" className="btn">Zamów online</button></a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Order;
