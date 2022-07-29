function OrderCard({ order }) {
	return (
		<article className={`card ${order.className}`}>
			<div className="card__body">
				<h3>{order.title}</h3>
				{order.description}

				{order.icon && (
					<div className="card__icon">
						<a href="#">
							<img src={order.icon1} alt="playStore-icon" />
						</a>
						<a href="#">
							<img src={order.icon2} alt="appStore-icon" />
						</a>
						<a href="#">
							<img src={order.icon3} alt="huawei-icon" />
						</a>
					</div>
				)}

				<a href="#">
					<button type="button" className="btn">
						Zamów online
					</button>
				</a>
			</div>
		</article>
	);
}

export default OrderCard;
