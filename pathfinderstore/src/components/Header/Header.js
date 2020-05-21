import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/pathfinderlogo.png';

class Header extends Component {
	render() {
		return (
			<header>
				<Navbar className='header-container'>
					<Navbar.Brand>
						<Link to='/'>
							<img className='header-logo' src={Logo} alt='' />
						</Link>
					</Navbar.Brand>
					<h1>Pathfinder Store</h1>
					<DropdownButton id='dropdown-basic-button' title='Categories'>
						<Dropdown.Item>
							<Link to='/adventuring'>Adventuring Gear</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/food_drink'>Food and Drink</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/armor_shield'>Armor and Shield</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/weapons'>Weapons</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/alchemical'>Alchemical Items</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/clothing'>Clothing</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/containers'>Containers</Link>
						</Dropdown.Item>
						<Dropdown.Item>
							<Link to='/writing'>Books, Paper and Writing Supplies</Link>
						</Dropdown.Item>
					</DropdownButton>
				</Navbar>
			</header>
		);
	}
}

export default Header;
