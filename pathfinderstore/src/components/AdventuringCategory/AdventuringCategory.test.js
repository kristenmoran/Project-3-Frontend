import React from 'react';
import { shallow } from 'enzyme';
import Adventuring from './AdventuringCategory';

describe('Adventuring component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Adventuring />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
