import React from 'react';
import { shallow } from 'enzyme';
import FilmInfo from './FilmInfo';

describe('FilmInfo', () => {
    const props = {
        film: {
            poster_path: 'img',
            title: 'text',
            vote_average: 1,
            release_date: '2010-10',
            runtime: '110',
            overview: 'text'
        },
    }
    const filmInfo = shallow(<FilmInfo {...props} />);

    it('renders properly', () => {
        expect(filmInfo).toMatchSnapshot();
    });

    it('renders Grid', () => {
        expect(filmInfo.find('Grid')).toHaveLength(0);
    });
});