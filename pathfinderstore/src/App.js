import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Homepage/Homepage';

function App() {
	return (
		<div className='App'>
			<Header />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
