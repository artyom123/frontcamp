import React from 'react';
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
        fontSize: '10px',
    },
});

const Filter = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    console.log(props);

    const handleChange = ({target}) => {
        setValue(Number(target.dataset.activeNumber));
        props.setActive(target.dataset.name);
    }

    return (
        <Grid className={classes.grid}>
            <Grid className={classes.gridContent}>
                {props.content}
            </Grid>
            <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                aria-label="tabs"
            >
                {
                    props.items.map((item, index) => (
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
