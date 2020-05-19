import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Item() {
	return (
		<div>
			<Header />
			<Row className='row justify-content-center'>
				<Col className='col-md-6 justify-content-center'>
					<h3 class='my-3'>Item Description</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
						euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
						adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
						justo eu convallis placerat, felis enim.
					</p>
					<h3 class='my-3'>Item Details</h3>
					<ul>
						<li>Lorem Ipsum</li>
						<li>Dolor Sit Amet</li>
						<li>Consectetur</li>
						<li>Adipiscing Elit</li>
					</ul>
				</Col>
			</Row>
		</div>
	);
}
export default Item;
