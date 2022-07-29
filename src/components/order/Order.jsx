import "./order.scss";
import LogosBanner from "../logosBanner/LogosBanner";
import { orderData } from "../../utils/orderData";
import OrderCard from "../orderCard/OrderCard";

function Order() {
	return (
		<div className="order">
			<LogosBanner />

			<div className="order-body__container">
				{orderData.map((order) => {
					return <OrderCard key={order.id} order={order} />;
				})}
			</div>
		</div>
	);
}

export default Order;
