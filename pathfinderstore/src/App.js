import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryPage from './components/CategoryPage/CategoryPage';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/items' exact={true} component={CategoryPage} />
			</Switch>
		</div>
	);
}

export default App;
