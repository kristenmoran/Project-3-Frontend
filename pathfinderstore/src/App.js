import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/' exact={true} component={Homepage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
