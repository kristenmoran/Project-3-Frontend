import React from 'react';
import './CRUD.css';

function CRUD() {
	return (
		<div className='testing'>
			<h1>Edit An Item</h1>
			<form action='/recipes' method='post' acceptCharset='utf-8'>
				<label className='title'>Name:</label>
				<input type='text' id='name' name='name' />

				<label className='url'>Recipe URL:</label>
				<input type='text' id='url' name='url' />

				<label className='ingredients'>Ingredients:</label>
				<input type='text' id='ingredients' name='ingredients' />

				<label className='instructions'>Instructions:</label>
				<input type='text' id='instructions' name='instructions' />

				<button type='submit'>Add Recipe</button>
			</form>
		</div>
	);
}

export default CRUD;
