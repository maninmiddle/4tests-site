const Header = () => {
	return (
		<div className='logo'>
			<div className='mainMenu'>
				<h1>4tests</h1>
			</div>
			<div className='nav'>
				<ul>
					<li>
						<a href={{}}>Главная</a>
					</li>
					<li>
						<a href={{}}>Тесты</a>
					</li>
					<li>
						<a href={{}}>Создать тест</a>
					</li>
					<li>
						<a href={{}}>О 4tests</a>
					</li>
				</ul>
			</div>
			<div className='authButtons'>
				<button>Войти</button>
				<button>Регистрация</button>
			</div>
		</div>
	)
}

export default Header
