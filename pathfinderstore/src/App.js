import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdventuringCategory from './components/AdventuringCategory/AdventuringCategory';
import AlchemicalCategory from './components/AlchemicalCategory/AlchemicalCategory';
import ItemPage from './components/ItemPage/Item';

function App() {
	const url = 'https://pathfinder-inventory.herokuapp.com/shop/items/';
	const [categories, setItems] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setItems(response);
			})
			.catch(console.error);
	}, []);

	if (categories.length === 0) {
		return <div className='searching'>Gathering Items</div>;
	}
	console.log(categories);

	return (
		<div className='App'>
			<Switch>
				<Route
					path={`/items/adventuring`}
					exact={true}
					component={AdventuringCategory}
				/>
				<Route
					path={`/items/alchemical`}
					exact={true}
					component={AlchemicalCategory}
				/>
				<Route path={`/item`} exact={true} component={ItemPage} />
			</Switch>
		</div>
	);
}
export default App;
