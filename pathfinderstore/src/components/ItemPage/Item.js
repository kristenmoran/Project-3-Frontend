import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';

function Item() {
	return (
		<div>
			<Header />
			<div class='row'>
				<div class='col-md-8'></div>
				<div class='col-md-4'>
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
				</div>
			</div>
		</div>
	);
}

export default Item;
