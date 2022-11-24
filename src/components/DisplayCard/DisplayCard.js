import "./DisplayCard.css";

function DisplayCard({ cards }) {
	if (cards !== "") {
		return cards.map((card) => {
			return (
				<div className="card">
				<div className="cardTitles"> 
					<h2>Week {card.week}</h2>
					<h2>{card.day}</h2></div>
					<img
						src={card.image}
						alt="logo here"
						//height="50px"
						className="image"
					/>
					<h4>Topics</h4>
					<ul className="ul">
						{card.topic !== undefined ? (
							card.topic.map((topic) => {
								return <li>{topic}</li>;
							})
						) : (
							<></>
						)}
					</ul>
					<h4>References</h4>
					<ul className="ul">
						{card.ref.map((reference) => {
							return <li className = "liRef"><a href={reference} target="_blank">{reference}</a></li>;

						})}
					</ul>
				</div>
			);
		});
	} else return <div></div>;
}

export default DisplayCard;
