import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
							<Link to='/adventuring' className='dropdown-item'>Adventuring Gear</Link>
							<Link className='dropdown-item' to='/food_drink'>Food and Drink</Link>
					
							<Link className='dropdown-item' to='/armor_shield'>Armor and Shield</Link>
					
							<Link className='dropdown-item' to='/weapons'>Weapons</Link>
					
							<Link className='dropdown-item' to='/alchemical'>Alchemical Items</Link>
					
							<Link className='dropdown-item' to='/clothing'>Clothing</Link>
					
							<Link className='dropdown-item' to='/containers'>Containers</Link>
					
							<Link className='dropdown-item' to='/writing'>Books, Paper and Writing Supplies</Link>
					</DropdownButton>
				</nav>
			</header>
		);
	}
}

export default Header;
