import React from 'react';
import {
    makeStyles,
    Tabs,
    Tab,
    Paper,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import stylesConstants from '../../../styles/constants.module.scss';

const useStyles = makeStyles({
    paper: {
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: stylesConstants.primaryWhite,
        backgroundColor: 'transparent',
    },
    tabs: {
        marginLeft: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '5px',
        minHeight: '32px',
    },
    indicatorTabs: {
        backgroundColor: stylesConstants.primaryWhite,
    },
    rootTab: {
        minHeight: '32px',
        minWidth: '95px',
        color: stylesConstants.primaryWhite,
        '&.Mui-selected': {
            color: stylesConstants.primaryWhite,
            backgroundColor: stylesConstants.primaryRed,
        },
    },
});

const propTypes = {
    tabsInfo: PropTypes.string,
    tabsList: PropTypes.oneOfType([PropTypes.array]), 
};
const defaultProps = {
    tabsInfo: '',
    tabsList: [],
};

const Filter = ({tabsInfo, tabsList}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper
            className={classes.paper}
            square
        >
            {tabsInfo}
            <Tabs
                className={classes.tabs}
                classes={{
                    indicator: classes.indicatorTabs
                }}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="tabs"
            >
                {
                    tabsList.map((name) => (
                        <Tab
                            key={name}
                            classes={{
                                root: classes.rootTab
                            }}
                            label={name}
                        />
                    ))
                }
            </Tabs>
        </Paper>
    );
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;

export default Filter;
