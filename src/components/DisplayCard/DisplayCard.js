import "./DisplayCard.css";

function DisplayCard({ cards }) {
	return cards.map((card) => {
		return (
			<div className="card">
				<h2>Week {card.week}</h2>
				<h3>{card.day}</h3>
				<h4>Topics</h4>
				<ul>
					{card.topic.map((topic) => {
						return <li>{topic}</li>;
					})}
				</ul>
			</div>
		);
	});
}

export default DisplayCard;
