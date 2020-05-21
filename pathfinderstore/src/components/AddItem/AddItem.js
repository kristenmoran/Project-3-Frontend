import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './AddItem.css';

function AddItem({ match, history }) {
	const url = 'https://pathfinder-inventory.herokuapp.com/shop/items/';
	const [item, setItem] = useState({
		name: '',
		categoryOne: '',
		description: '',
		value: '',
		weight: '',
	});

	function handleChange(e) {
		setItem({ ...item, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`${url}admin/new`, {
            method: 'POST',
            body: JSON.stringify(item),
			headers: {
                'Content-Type': 'application/json',          
			},
        })
            .then((response) => response.json())
			.then((response) => {
				console.log(response);
				history.push(`/${response._id}`);
			})
			.catch(console.error);
	}

	return (
		<div className='testing'>
			<h1 className='addTitle'>Add An Item</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. Bag of Holding'
						name='name'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Item Description</Form.Label>
					<Form.Control
						as='textarea'
						rows='3'
						name='description'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Item Value</Form.Label>
					<Form.Control
						as='textarea'
						rows='3'
						name='value'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Item Weight</Form.Label>
					<Form.Control
						as='textarea'
						rows='3'
						name='weight'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Category</Form.Label>
					<Form.Control
						type='text'
						name='categoryOne'
						onChange={handleChange}
					/>
				</Form.Group>
				<ul className='categoryList categoryListTitle'>
					Category Options
					<li className='listItem'>Adventuring Gear</li>
					<li className='listItem'>Weapons</li>
					<li className='listItem'>Food and Drink</li>
					<li className='listItem'>Armor and Shield</li>
					<li className='listItem'>Alchemical Items</li>
					<li className='listItem'>Clothing</li>
					<li className='listItem'>Containers</li>
					<li className='listItem'>Books, Paper, and Writing Supplies</li>
				</ul>
				<button type='submit'>Add Item</button>
			</Form>
		</div>
	);
}
export default AddItem;
