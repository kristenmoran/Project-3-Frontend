import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemPage.css';

function ItemPage({ match }) {
	const url = `https://pathfinder-inventory.herokuapp.com/shop/items`;
	const [item, setCurrentItem] = useState({});

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				let currentItem = response.find(({ id }) => id === match.params._id);
				setCurrentItem(currentItem);
			})
			.catch(console.error);
	}, [match.params._id, match.params.id, url]);

	if (!item) return null;

	return (
		<div className='itemPage'>
			<Container>
				<Header />
				<Row className='row justify-content-center'>
					<Col className='itemDescription col-md-6 justify-content-center'>
						<h3 className='itemTitle'>Item Description</h3>
						<p className='itemParagraph'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							viverra euismod odio, gravida pellentesque urna varius vitae. Sed
							dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris
							ultricies, justo eu convallis placerat, felis enim.
						</p>
						<h3 className='listTitle'>Item Details</h3>
						<ul className='itemList'>
							<li>Lorem Ipsum</li>
							<li>Dolor Sit Amet</li>
							<li>Consectetur</li>
							<li>Adipiscing Elit</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default ItemPage;
