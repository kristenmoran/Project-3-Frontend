import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import TestAG from './components/JTestComponents/TestAG';
import TestFD from './components/JTestComponents/TestFD';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route path='/' exact={true} component={Homepage} />
				<Route path='/adventuring' component={TestAG} />
				<Route path='/food_drink' component={TestFD} />
				<Route path='/armor_shield' component={TestAG} />
				<Route path='/weapons' component={TestFD} />
				<Route path='/alchemical' component={TestAG} />
				<Route path='/clothing' component={TestFD} />
				<Route path='/containers' component={TestAG} />
				<Route path='/writing' component={TestFD} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
