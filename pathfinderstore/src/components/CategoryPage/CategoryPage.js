import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';

function CategoryPage() {
	return (
		<div>
			<Header />
			<h2>Category Name Goes Here</h2>
			<Container className='container-fluid d-flex justify-content-center'>
				<div class='row'>
					<div class='col-sm-6'>
						<div class='card'>
							<div class='card-body'>
								<h5 class='card-title'>Item Name</h5>
								<p class='card-text'>
									With supporting text below as a natural lead-in to additional
									content.
								</p>
								<Link to={`/item`} className='item btn stretched-link'>
									Item
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default CategoryPage;
