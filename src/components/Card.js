const Card = props => {
	const { name, timer, type, hasPassword } = props
	return (
		<div className='card'>
			<h1>{name}</h1>
			<h2>Время: {timer}</h2>
			<h3>Тип: {type}</h3>
		</div>
	)
}

export default Card
