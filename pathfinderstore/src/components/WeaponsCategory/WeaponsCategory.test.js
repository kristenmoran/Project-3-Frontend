import React from 'react';
import { shallow } from 'enzyme';
import Weapons from './WeaponsCategory';

describe('Weapons component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Weapons />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
