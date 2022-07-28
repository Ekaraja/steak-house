import React from "react";
import "./order.scss";
import appStore from "./../../assets/icons/app_store.svg";
import huawei from "./../../assets/icons/huawei.svg";
import playStore from "./../../assets/icons/play_store.svg";
import store1 from "./../../assets/icons/pyszne.svg";
import store2 from "./../../assets/icons/deligoo.svg";
import store3 from "./../../assets/icons/glovo.svg";
import store4 from "./../../assets/icons//ubereats.svg";
import store5 from "./../../assets/icons//boldfood.svg";

const Order = () => {
	return (
		<div className="order">
			<div className="stores">
				<ul className="stores__list">
					<ul className="stores__list__first">
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
					</ul>
					<ul className="stores__list__second">
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
				</ul>
			</div>

			<div className="order-body__container">
				<article className="card --card-offer">
					<div className="card__body">
						<h3>Zestaw dla 3 osób</h3>
						<p>
							Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od{" "}
							<span style={{ fontWeight: "600" }} className="highlight-black">
								39 zł
							</span>
						</p>
						<button className="btn">Zamów online</button>
					</div>
				</article>

				<article className="order card --card-uber">
					<div className="card__body">
						<h3>UberEats </h3>
						<p>
							Zamawiaj w aplikacji{" "}
							<span style={{ fontWeight: "600" }} className="highlight-red">
								10% taniej.
							</span>{" "}
							Pobierz aplikację UberEats już dziś.
						</p>
						<div className="card__icon">
							<img src={playStore} alt="playStore-icon" />
							<img src={appStore} alt="appStore-icon" />
							<img src={huawei} alt="huawei-icon" />
						</div>
						<button className="btn">Zamów online</button>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Order;
