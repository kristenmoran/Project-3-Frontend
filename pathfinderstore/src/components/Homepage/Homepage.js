import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function MyModal(props) {
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

// const responsive = {
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 3,
// 		slidesToSlide: 3, // optional, default to 1.
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 2,
// 		slidesToSlide: 2, // optional, default to 1.
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// };

function Homepage() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<Container className='container-fluid d-flex justify-content-center'>
			<div className='homepage'>
				<Button
					className='modal-button'
					variant='primary'
					onClick={() => setModalShow(true)}>
					About this App
				</Button>
				<MyModal show={modalShow} onHide={() => setModalShow(false)} />
				<Carousel
					additionalTransfrom={0}
					arrows
					autoPlaySpeed={3000}
					centerMode={true}
					className='carousel'
					containerClass='container'
					dotListClass=''
					draggable
					focusOnSelect={false}
					infinite={false}
					itemClass=''
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					responsive={{
						desktop: {
							breakpoint: {
								max: 3000,
								min: 1024,
							},
							items: 3,
							partialVisibilityGutter: 40,
						},
						mobile: {
							breakpoint: {
								max: 464,
								min: 0,
							},
							items: 1,
							partialVisibilityGutter: 30,
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 464,
							},
							items: 2,
							partialVisibilityGutter: 30,
						},
					}}
					showDots={false}
					sliderClass=''
					slidesToSlide={1}
					swipeable>
					<Card>
						<Link to='/adventuring' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/tent.png' />
							<Card.Title>Adventuring Gear</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/food_drink' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/turkeyleg.png' />
							<Card.Title>Food and Drink</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/armor_shield' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/breastplatearmor.jpg' />
							<Card.Title>Armor and Shield</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/weapons' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/pixartsword.png' />
							<Card.Title>Weapons</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/alchemical' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/potion.png' />
							<Card.Title>Alchemical Items</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/clothing' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/pixartsword.png' />
							<Card.Title>Clothing</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/containers' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/pouch.png' />
							<Card.Title>Containers</Card.Title>
						</Link>
					</Card>
					<Card>
						<Link to='/writing' className='item btn stretched-link'>
							<Card.Img variant='top' src='../../images/book.png' />
							<Card.Title>Books, Paper and Writing Supplies</Card.Title>
						</Link>
					</Card>
				</Carousel>
			</div>
		</Container>
	);
}

export default Homepage;
