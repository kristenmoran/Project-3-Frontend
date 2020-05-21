import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../Header/Header';
import './SearchResults.css';

function SearchResults() {
	let baseUrl = 'https://pathfinder-inventory.herokuapp.com/shop/items/search/';
	const [searchString, setSearchString] = useState('');
	const [categories, setItems] = useState([]);

	function getSearchData(searchString) {
		let newUrl = `${baseUrl}${searchString}`;

		fetch(newUrl)
			.then((response) => response.json())
			.then((response) => {
				setItems(response);
			})
			.catch(console.error);
	}

	// handle event change functions
	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getSearchData(searchString);
	}

	if (categories.length === 0) {
		return (
			<div className='categoryPageContainer'>
				<Header />
				<SearchForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					searchString={searchString}
				/>
			</div>
		);
	}

	return (
		<div>
			<div className='categoryPageContainer'>
				<Header />
				<SearchForm
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					searchString={searchString}
				/>
				<h2 className='categoryTitle'>Search Results</h2>
				<h3 className='titleDescription'>Select an item Adventurer!</h3>
				<Container className='container-fluid d-flex justify-content-center'>
					<Row>
						{categories &&
							categories.map((category) => (
								<Col
									sm={true}
									key={category._id}
									className='text-center col-lg-4 col-sm-12 col-md-6'>
									<Card
										style={{ width: '18rem' }}
										key={category._id}
										className='categoryCard'>
										<div className='card-body'>
											<h5 className='card-title'>{category.name}</h5>
											<Link
												to={`/${category._id}`}
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
		</div>
	);
}

export default SearchResults;
