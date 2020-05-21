
import React, { useState , useEffect } from 'react';
import './CRUD.css';

function CRUD() {
    const url = `https://pathfinder-inventory.herokuapp.com/shop/items`;
    const [ editItem , setEditItem] = useState([]);
    useEffect(() => {
			fetch(url)
				.then((response) => response.json())
				.then((response) => {
					setItems(response);
				})
				.catch(console.error);
        }, [url]);
        function handleSubmit(event) {
            event.preventDefault();
            
        }
	return (
		<div className='testing'>
			<h1>Edit An Item</h1>
			<form action='/recipes' method='post' acceptCharset='utf-8'>
				<label className='title'>Name:</label>
				<input type='text' id='name' name='name' />

				<label className='url'>Description:</label>
				<input type='text' id='url' name='url' />

				<label className='ingredients'>Category:</label>
				<input type='text' id='ingredients' name='ingredients' />

				<button type='submit'>Add Item</button>
				<button type='submit'>Update Item</button>
				<button type='submit'>Delete Item</button>
			</form>
		</div>
	);
}

export default CRUD;
