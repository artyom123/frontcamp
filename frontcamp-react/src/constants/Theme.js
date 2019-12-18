import { createMuiTheme } from '@material-ui/core/styles';
import stylesConstants from '../styles/constants.module.scss';
import { RESOLUTIONS } from './GridConstants';

const THEME = createMuiTheme({
    breakpoints: {
        values: {
            xs: RESOLUTIONS.XS,
            sm: RESOLUTIONS.SM,
            md: RESOLUTIONS.MD,
            lg: RESOLUTIONS.LG,
            xl: RESOLUTIONS.XL,
        },
    },
    typography: {
        useNextVariants: true,
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: stylesConstants.primaryRed,
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                color: stylesConstants.primaryWhite,
                '&:hover': {
                    backgroundColor: stylesConstants.primaryRedLight,
                },
            },
        },
        MuiTypography: {
            root: {
                color: stylesConstants.primaryWhite,
            },
        },
        MuiGrid: {
            root: {
                color: stylesConstants.primaryWhite,
            },
        },
        MuiInputBase: {
            root: {
                paddingLeft: '10px',
                paddingRight: '10px',
                width: '100%',
                backgroundColor: stylesConstants.secondaryLightGray,
            },
        },
        MuiTab: {
            wrapper: {
                width: 'auto',
                pointerEvents: 'none',
                color: stylesConstants.primaryWhite,
            },
            indicator: {
                backgroundColor: stylesConstants.primaryWhite,
            },
            fixed: {
                borderRadius: '5px',
            },
        },
    },
});

export default THEME;
