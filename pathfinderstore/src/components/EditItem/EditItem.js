import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './EditItem.css';

function EditItem({ match, history }) {
	const url = 'https://pathfinder-inventory.herokuapp.com/shop/items/';
	const [item, setItem] = useState({
		name: '',
		categoryOne: '',
		description: '',
	});

	useEffect(() => {
		fetch(`${url}/${match.params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setItem(response);
			})
			.catch(console.error);
	}, [match.params.id]);

	function handleChange(e) {
		setItem({ ...item, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`${url}/admin/${match.params.id}`, {
			method: 'PUT',
			body: JSON.stringify(item),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				history.push(`/${match.params.id}`);
			})
			.catch(console.error);
	}

	return (
		<div className='testing'>
			<h1>Edit An Item</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. Bag of Holding'
						name='name'
						value={item.name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Category</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. Adventuring'
						name='categoryOne'
						value={item.categoryOne}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Item Description</Form.Label>
					<Form.Control
						as='textarea'
						rows='3'
						name='description'
						value={item.description}
						onChange={handleChange}
					/>
				</Form.Group>
				<button type='submit'>Edit Item</button>
			</Form>
		</div>
	);
}
export default EditItem;
