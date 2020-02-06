import React from 'react'
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
    const mockFetchGetNews = jest.fn();
    const props = {
        films: mockFetchGetNews,
    };
    const main = shallow(<Main {...props} />);

    it('renders properly', () => {
        expect(main).toMatchSnapshot();
    });
})
