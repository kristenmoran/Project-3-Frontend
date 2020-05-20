import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className='header-container'>
					<Link className='header-home' to='/'>
						<h1>Pathfinder Store</h1>
					</Link>
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
				</nav>
			</header>
		);
	}
}

export default Header;
