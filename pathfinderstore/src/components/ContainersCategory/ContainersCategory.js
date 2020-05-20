import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './ContainersCategory.css';

function ContainerCategory() {
	const url = `https://pathfinder-inventory.herokuapp.com/shop/items/adventuring`;
	const [categories, setItems] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setItems(response);
			})
			.catch(console.error);
	}, [url]);

	if (categories.length === 0) {
		return <div className='searching'>Gathering Items</div>;
	}
	console.log(categories);

	return (
		<div className='categoryPageContainer'>
			<Header />
			<h2 className='categoryTitle'>Container Items</h2>
			<h3 className='titleDescription'>Select an item Adventurer!</h3>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row>
					{categories &&
						categories.map((category) => (
							<Col
								sm={true}
								key={category.id}
								className='col-lg-4 col-sm-12 col-md-6'>
								<Card
									style={{ width: '18rem' }}
									key={category.id}
									className='categoryCard'>
									<div className='card-body'>
										<h5 className='card-title'>{category.name}</h5>
										<Link
											to={`/containers/${category.id}`}
											className='subcategory item btn stretched-link'>
											{category.categoryTwo}
										</Link>
									</div>
								</Card>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}

export default ContainerCategory;
