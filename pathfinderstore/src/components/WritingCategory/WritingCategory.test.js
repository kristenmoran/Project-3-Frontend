import React from 'react';
import { shallow } from 'enzyme';
import Writing from './WritingCategory';

describe('Writing component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Writing />);
	});

	it('should have a header.', () => {
		expect(
			component.contains(<div className='searching'>Gathering Items</div>)
		).toBe(true);
	});
});
