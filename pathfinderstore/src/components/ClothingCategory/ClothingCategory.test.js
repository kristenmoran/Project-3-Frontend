import React from 'react';
import { shallow } from 'enzyme';
import Clothing from './ClothingCategory';

describe('Clothing component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Clothing />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
