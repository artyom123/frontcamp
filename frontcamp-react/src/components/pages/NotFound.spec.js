import React from 'react'
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
    const notFound = shallow(<NotFound />);

    it('render initial', () => {
        expect(notFound).toMatchSnapshot();
    });
});