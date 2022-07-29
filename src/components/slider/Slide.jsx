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

/*

<article className="slider__frame">
          <div className="slider__content">
            <h1>
              <span className="highlight-black">Rabat 10%</span>
              {' '}
              na pierwsze
              zamówienie!
            </h1>
            <p>
              Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
              <span className="--bold"> promocji -10%</span>
              . Spiesz się, czas
              trwania promocji do końca lutego.
            </p>
            <a href="#"><button type="button" className="btn">Zamów online</button></a>
          </div>
        </article>

*/
