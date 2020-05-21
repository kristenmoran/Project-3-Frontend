import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import './Homepage.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Book from '../../images/P3Book.png';
import Tent from '../../images/P3Tent.png';
import Sword from '../../images/P3Sword.png';
import Armor from '../../images/P3Armor.png';
import Potion from '../../images/P3Potion.png';
import Clothing from '../../images/P3Tunic.png';
import Pouch from '../../images/P3Pouch.png';
import Food from '../../images/P3Turkey.png';
import Search from '../../images/P3Search.png';

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
					<Card className='carousel-cards'>
						<Link to='/search' className='item btn stretched-link'>
							<Card.Img variant='top' src={Search} />
							<Card.Title>Search</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/adventuring' className='item btn stretched-link'>
							<Card.Img variant='top' src={Tent} />
							<Card.Title>Adventuring Gear</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/food_drink' className='item btn stretched-link'>
							<Card.Img variant='top' src={Food} />
							<Card.Title>Food and Drink</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/armor_shield' className='item btn stretched-link'>
							<Card.Img variant='top' src={Armor} />
							<Card.Title>Armor and Shield</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/weapons' className='item btn stretched-link'>
							<Card.Img variant='top' src={Sword} />
							<Card.Title>Weapons</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/alchemical' className='item btn stretched-link'>
							<Card.Img variant='top' src={Potion} />
							<Card.Title>Alchemical Items</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/clothing' className='item btn stretched-link'>
							<Card.Img variant='top' src={Clothing} />
							<Card.Title>Clothing</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/containers' className='item btn stretched-link'>
							<Card.Img variant='top' src={Pouch} />
							<Card.Title>Containers</Card.Title>
						</Link>
					</Card>
					<Card className='carousel-cards'>
						<Link to='/writing' className='item btn stretched-link'>
							<Card.Img variant='top' src={Book} />
							<Card.Title>Books, Paper and Writing Supplies</Card.Title>
						</Link>
					</Card>
				</Carousel>
			</div>
		</Container>
	);
}

export default Homepage;
