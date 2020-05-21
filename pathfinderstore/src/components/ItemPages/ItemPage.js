import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './ItemPage.css';

function ItemPage({ match, location, history }) {
	const url = 'https://pathfinder-inventory.herokuapp.com/shop/items/';
	const [item, setItem] = useState({});

	useEffect(() => {
		fetch(`${url}/${match.params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setItem(response);
			})
			.catch(console.error);
	}, [match.params.id]);

	function handleDelete(e) {
		fetch(`${url}/admin/${match.params.id}`, {
			method: 'DELETE',
		})
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	}

	if (!item) return null;

	return (
		<div className='itemPage'>
			<Header />
			<Container>
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
			<div className='crud-buttons'>
				<Link className='edit-button' to={`/edit/${match.params.id}`}>
					Edit
				</Link>
				<button className='delete-button' onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}
export default ItemPage;
