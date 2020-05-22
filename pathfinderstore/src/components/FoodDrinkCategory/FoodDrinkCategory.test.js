import React from 'react';
import { shallow } from 'enzyme';
import FoodDrink from './FoodDrinkCategory';

describe('FoodDrink component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<FoodDrink />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
