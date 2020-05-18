import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function CategoryPage() {
	return (
		<div>
			<Header />
			<div class='row'>
				<div class='col-sm-6'>
					<div class='card'>
						<div class='card-body'>
							<h5 class='card-title'>Special title treatment</h5>
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
		</div>
	);
}

export default CategoryPage;
