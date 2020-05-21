import React, { Component } from 'react';
import './Header.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/pathfinderlogo.png';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className='header-container'>
					<Navbar.Brand>
						<Link to='/'>
							<img className='header-logo' src={Logo} alt='' />
						</Link>
					</Navbar.Brand>
      <h1>Pathfinder Store</h1>
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
				</Navbar>
			</header>
		);
	}
}

export default Header;
