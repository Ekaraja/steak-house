import React from "react";
import "./contact.css";
import image1 from "./../../assets/images/image1.png";
import appStore from "./../../assets/icons/app_store.svg";
import huawei from "./../../assets/icons/huawei.svg";
import playStore from "./../../assets/icons/play_store.svg";
// import image2 from "./../../assets/images/image2.png"
import image3 from "./../../assets/images/image3.png";

import store1 from "./../../assets/icons/pyszne.svg";
import store2 from "./../../assets/icons/deligoo.svg";
import store3 from "./../../assets/icons/glovo.svg";
import store4 from "./../../assets/icons//ubereats.svg";
import store5 from "./../../assets/icons//boldfood.svg";

const Contact = () => {
  return (
    <div className="contacts">
      <header className="contacts-header__container">
        <div className="contacts-header__left">
          <h1>
            <span className="highlight-black">Rabat 10%</span>
             {" "}na pierwsze zamówienie!
          </h1>
          <p>
            Do 20 stycznia złóż zamówienie na stronie i skorzystaj z <span style={{fontFamily: "var(--ff-main)", fontWeight: "var(--fw-semiBold)"}}>promocji
            -10%</span>. Spiesz się, czas trwania promocji do końca lutego.
          </p>
          <button className="btn">Zamów online</button>
        </div>
        <div className="contacts-header__right">
          <img src={image1} alt="steak-img" />
        </div>
      </header>

      <div className="stores">
        <ul className="stores__list">
          <li>
            <a href="./">
              <img src={store1} alt="Pyszne.pl logo" />
            </a>
          </li>
          <li>
            <a href="./">
              <img src={store2} alt="Deligoo logo" />
            </a>
          </li>
          <li>
            <a href="./">
              <img src={store3} alt="Glovo logo" />
            </a>
          </li>
          <li>
            <a href="./">
              <img src={store4} alt="UberEats logo" />
            </a>
          </li>
          <li>
            <a href="./">
              <img src={store5} alt="BoldFood logo" />
            </a>
          </li>
        </ul>
      </div>

      <div className="contacts-body__container">
        <article className="card">
          <div className="card__body">
            <h3>Zestaw dla 3 osób</h3>
            <p>
              Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od {" "}
              <span style={{fontWeight: "600"}} className="highlight-black">39 zł</span>
            </p>
            <button className="btn">Zamów online</button>
          </div>
        </article>

        <article className="contact card">
          <div className="card__body">
            <h3>UberEats </h3>
            <p>
              Zamawiaj w aplikacji{" "}
              <span style={{fontWeight: "600"}} className="highlight-red">10% taniej.</span>{" "}
              Pobierz aplikację UberEats już dziś.
            </p>
            <div className="card__icon">
              <img src={playStore} alt="playStore-icon" />
              <img src={appStore} alt="appStore-icon" />
              <img src={huawei} alt="huawei-icon" />
            </div>
            <button className="btn">Zamów online</button>
          </div>
          <img src={image3} alt="uber Eat mobile app" />
        </article>
      </div>
    </div>
  );
};

export default Contact;
