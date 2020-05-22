import React from 'react';
import { shallow } from 'enzyme';
import Containers from './ContainersCategory';

describe('Containers component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Containers />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
