import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './CRUD.css';

function CRUD() {
	const url = `https://pathfinder-inventory.herokuapp.com/shop/items`;
	const [editItem, setEditItem] = useState([]);
	const [createItem, setCreateItem] = useState([]);
	const [deleteItem, setDeleteItem] = useState([]);
	const [name, setName] = useState([]);
	const [category, setCategory] = useState([]);
	const [description, setDescription] = useState([]);

	useEffect(() => {
		axios.get(url).then((response) => {
			//gets the initial data
			setCreateItem(response.data);
		});
	}, [url]);

	// axios.put(`${url}/admin/:id`, {
	//     name,
	//     category,
	//     description
	// }).then((response) => {
	//     // console.log(response)
	//     setCreateItem(response.data)
	// })

	// function updateButton(item) {
	// 	console.log('clicked');
    // }
    
    // axios.post(`${url}`, {
    //     name,
    //     category,
    //     description
    // }).then((response) => {
    //     setCreateItem(response.data)
    // })

    // axios.delete(`${url}`).then((response) => {
    //     setCreateItem(response.data)
    // })

	return (
		<div className='testing'>
			<h1>Edit An Item</h1>
			<Form>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. Bag of Holding'
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Label>Category</Form.Label>
					<Form.Control
						type='text'
						placeholder='ex. Adventuring'
						onChange={(e) => setCategory(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Item Description</Form.Label>
					<Form.Control
						as='textarea'
						rows='3'
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<button type='submit' onClick={setCreateItem}>
				Add Item
			</button>
			<button type='submit'>Update Item</button>
			<button type='submit'>Delete Item</button>
		</div>
	);
}
export default CRUD;
