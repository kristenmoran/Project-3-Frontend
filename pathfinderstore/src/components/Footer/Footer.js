import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

function Footer() {
	return (
		<div>
			<Navbar fixed='bottom' className='footer'>
				<p>Powered By d20pfsrd.com</p>
			</Navbar>
		</div>
	);
}

export default Footer;
