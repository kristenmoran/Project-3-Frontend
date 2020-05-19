import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					About this Project
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>I am not sure what exactly to put in here I'm just glad it works!</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function Homepage() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<div>
			<h1>Hi from the Homepage!</h1>
			<Button variant='primary' onClick={() => setModalShow(true)}>
				About!
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}

export default Homepage;
