// import { slide } from "react-burger-menu";



function Slide(props) {
	return (
		<article className="slider__frame">
			<div className="slider__content">
				{props.title}
				{props.description}
				<a href="#">
					<button type="button" className="btn">
						Zamów online
					</button>
				</a>
			</div>
		</article>
	);
}

export default Slide;
