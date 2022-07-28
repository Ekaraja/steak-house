import Slider from "../slider/Slider";
import "./hero.scss";

function Hero() {
	return (
		<header className="hero__container">
			<div className="hero__left">{<Slider />}</div>
			<div className="hero__right">
			</div>
		</header>
	);
}

export default Hero;
