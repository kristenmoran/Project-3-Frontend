import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import './Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<Navbar fixed='bottom' bg='light'>
				<p>Powered By d20pfsrd.com</p>
			</Navbar>
		</div>
	);
}

export default Footer;
