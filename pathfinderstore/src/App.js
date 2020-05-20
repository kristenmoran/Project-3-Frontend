import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdventuringCategory from './components/AdventuringCategory/AdventuringCategory';
import AlchemicalCategory from './components/AlchemicalCategory/AlchemicalCategory';
import FoodDrinkCategory from './components/FoodDrinkCategory/FoodDrinkCategory';
import ArmorShieldCategory from './components/ArmorShieldCategory/ArmorShieldCategory';
import ClothingCategory from './components/ClothingCategory/ClothingCategory';
import ContainersCategory from './components/ContainersCategory/ContainersCategory';
import WeaponsCategory from './components/WeaponsCategory/WeaponsCategory';
import WritingCategory from './components/WritingCategory/WritingCategory';
import ItemPage from './components/ItemPages/ItemPage';

function App() {
	const url = `https://pathfinder-inventory.herokuapp.com/shop/items`;
	const [categories, setItems] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setItems(response);
			})
			.catch(console.error);
	}, [url]);

	if (categories.length === 0) {
		return <div className='searching'>Gathering Items</div>;
	}

	return (
		<div className='App'>
			<Switch>
				<Route
					path={`/adventuring`}
					exact={true}
					component={AdventuringCategory}
				/>
				<Route
					path={`/alchemical`}
					exact={true}
					component={AlchemicalCategory}
				/>
				<Route
					path={`/food_drink`}
					exact={true}
					component={FoodDrinkCategory}
				/>
				<Route
					path={`/armor_shield`}
					exact={true}
					component={ArmorShieldCategory}
				/>
				<Route path={`/weapons`} exact={true} component={WeaponsCategory} />
				<Route path={`/clothing`} exact={true} component={ClothingCategory} />
				<Route
					path={`/containers`}
					exact={true}
					component={ContainersCategory}
				/>
				<Route path={`/writing`} exact={true} component={WritingCategory} />
				<Route
					path={'/:id'}
					exact={true}
					render={(props) => (
						<ItemPage match={props.match} categories={categories} />
					)}
				/>
			</Switch>
		</div>
	);
}
export default App;
