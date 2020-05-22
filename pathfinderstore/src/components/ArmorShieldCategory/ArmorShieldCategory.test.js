import React from 'react';
import { shallow } from 'enzyme';
import ArmorShield from './ArmorShieldCategory';

describe('ArmorShield component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<ArmorShield />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
