import React from 'react';
import { shallow } from 'enzyme';
import Alchemical from './AlchemicalCategory';

describe('Alchemical component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Alchemical />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
