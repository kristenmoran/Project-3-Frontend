import React from 'react';
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
import ItemPage from './components/ItemPage/Item';

function App() {
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
				<Route path={`/item`} exact={true} component={ItemPage} />
			</Switch>
		</div>
	);
}
export default App;
