import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './CategoryPage.css';

function CategoryPage() {
	return (
		<div className='categoryPage'>
			<Header />
			<h2 className='categoryTitle'>Category Name Goes Here</h2>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row class='row'>
					<Col sm={true} className='mb-3 col-lg-8 col-m2-12'>
						<Card className='categoryCard'>
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
						</Card>
					</Col>
				</Row>
				<Row class='row'>
					<Col sm={true} className='mb-3 col-lg-8 col-m2-12'>
						<Card className='categoryCard'>
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
						</Card>
					</Col>
				</Row>
				<Row class='row'>
					<Col sm={true} className='mb-3 col-lg-8 col-m2-12'>
						<Card className='categoryCard'>
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
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CategoryPage;
