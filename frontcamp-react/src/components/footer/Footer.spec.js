import React from 'react'
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    const footer = shallow(<Footer />)

    it('render initial', () => {
        expect(footer.find('Grid')).toHaveLength(0);
        expect(footer.find('Container')).toHaveLength(0);
        expect(footer.find('Logo')).toHaveLength(1);
    });
});
