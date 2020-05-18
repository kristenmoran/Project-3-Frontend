import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CategoryPage() {
	return (
		<div>
			<Header />
			<h2>Category Name Goes Here</h2>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row class='row'>
					<Col class='col-sm-12'>
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
					</Col>
				</Row>
				<Row class='row'>
					<Col class='col-sm-12'>
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
					</Col>
				</Row>
				<Row class='row'>
					<Col class='col-sm-12'>
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
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CategoryPage;
