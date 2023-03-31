import tests from '../data/tests'
import Card from './Card'
const Cards = () => {
	return (
		<div className='cards'>
			{tests.map(test => {
				return <Card key={test.id} {...test} />
			})}
		</div>
	)
}
export default Cards
