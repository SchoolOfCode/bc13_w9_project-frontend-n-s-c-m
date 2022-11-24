import "./DisplayCard.css";

function DisplayCard({ cards }) {
	if (cards !== "") {
		return cards.map((card) => {
			return (
				<div className="card">
					<h2>Week {card.week}</h2>
					<h3>{card.day}</h3>
					<img src={card.image} alt="logo here" height="50px" className="image"/>
					<h4>Topics</h4>
					<ul className="ul">
						{card.topic.map((topic) => {
							return <li>{topic}</li>;
						})}
					</ul>
					<h4>References</h4>
					<ul className="ul">
						{card.ref.map((reference) => {
							return <li>{reference}</li>;
						})}
					</ul>
				</div>
			);
		});
	} else return <div></div>;
}

export default DisplayCard;
