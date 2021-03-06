import React from 'react';
React.useLayoutEffect = React.useEffect 
import {
    makeStyles,
    Grid,
    Tabs,
    Tab,
} from '@material-ui/core';

const useStyles = makeStyles({
    grid: {
        display: 'flex',
        alignItems: 'center',
    },
    tabs: {
        marginLeft: '5px',
    },
    gridContent: {
        textTransform: 'uppercase',
        fontSize: '12px',
        marginRight: '10px',
    },
});

const Filter = (props) => {
    const {
        content,
        items,
        actionFilter,
    } = props;
    console.log(props);
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = ({target}) => {
        setValue(Number(target.dataset.activeNumber));
        actionFilter(target.dataset.name);
    }

    return (
        <Grid className={classes.grid}>
            <Grid className={classes.gridContent}>
                {content}
            </Grid>
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                aria-label="tabs"
            >
                {
                    items.map((item, index) => (
                        <Tab
                            key={Object.values(item)[0]}
                            label={Object.values(item)[0]}
                            data-name={Object.keys(item)[0]}
                            data-active-number={index}
                        />
                    ))
                }
            </Tabs>
        </Grid>
    );
};

export default Filter;
