import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemPage.css';

function WritingItemPage({ match }) {
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
	}, [match.params._id, url]);

	console.log(item);

	if (!item) return null;

	return (
		<div className='itemPage'>
			<Container>
				<Header />
				<Row className='row justify-content-center'>
					<Col className='itemDescription col-md-6 justify-content-center'>
						<h3 className='itemTitle'>{item.name}</h3>
						<p className='itemParagraph'>{item.description}</p>
						<h3 className='listTitle'>Item Details</h3>
						<ul className='itemList'>
							<li>Value: {item.value} gp</li>
							<li>Weight: {item.weight} lb</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default WritingItemPage;
