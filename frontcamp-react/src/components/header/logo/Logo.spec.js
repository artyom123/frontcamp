import React from 'react'
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
    const logo = shallow(<Logo />)

    it('render initial', () => {
        expect(logo).toMatchSnapshot();
    });
});
