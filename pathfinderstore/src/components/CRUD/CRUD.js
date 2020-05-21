import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './CRUD.css';

function CRUD() {
	const url = `https://pathfinder-inventory.herokuapp.com/shop/items`;
	const [editItem, setEditItem] = useState([]);
	const [setString] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setEditItem(response);
			})
			.catch(console.error);
	}, [url]);

	function handleChange(event) {
		setString(event.target.value);
	}

	function createItem(item) {
		return fetch(url, {
			method: 'POST',
			body: JSON.stringify(item),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				return res;
			})
			.catch((err) => err);
	}

	return (
		<div className='testing'>
			<h1>Edit An Item</h1>
			<Form>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='ex. Bag of Holding' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Category</Form.Label>
					<Form.Control type='text' placeholder='ex. Adventuring' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Item Description</Form.Label>
					<Form.Control as='textarea' rows='3' />
				</Form.Group>
			</Form>
			<button type='submit'>Add Item</button>
			<button type='submit'>Update Item</button>
			<button type='submit'>Delete Item</button>
		</div>
	);
}
export default CRUD;
