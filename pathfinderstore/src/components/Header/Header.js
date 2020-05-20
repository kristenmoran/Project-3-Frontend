import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends Component {
	render() {
		return (
			<header>
				<h1>Pathfinder Store!</h1>
				<DropdownButton id='dropdown-basic-button' title='Dropdown button'>
					<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
					<Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
					<Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
				</DropdownButton>
			</header>
		);
	}
}

export default Header;
