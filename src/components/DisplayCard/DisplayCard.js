import "./DisplayCard.css";

function DisplayCard({ cards, setCards }) {
	async function handleClick(id, index) {
		console.log(id);
		const send = await fetch(`http://localhost:3500/api/cards/${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
		const confirmation = await send.json();
		console.log(confirmation);
		if (confirmation.success === true) {
			const newCards = [...cards.slice(0, index), ...cards.slice(index + 1)];
			setCards(newCards);
		}
	}

	if (cards !== "") {
		return cards.map((card, index) => {
			return (
				<div className="card">
					<div className="cardTitles">
						<h2>Week {card.week}</h2>
						<h2>{card.day}</h2>
					</div>
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
							return (
								<li className="liRef">
									<a href={reference} target="_blank">
										{reference}
									</a>
								</li>
							);
						})}
					</ul>
					<button
						onClick={() => {
							handleClick(card.card_id, index);
						}}
					>
						Delete
					</button>
				</div>
			);
		});
	} else return <div></div>;
}

export default DisplayCard;
