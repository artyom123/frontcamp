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
        MuiAppBar: {
            root: {
                boxShadow: 'none',
                borderBottom: '1px solid #E6E6E6',
            },
            colorPrimary: {
                backgroundColor: stylesConstants.primaryWhite,
            },
        },
        MuiLink: {
            root: {
                textDecoration: 'none',
            },
        },
        MuiButton: {
            root: {
                fontFamily: 'Open Sans Bold',
                letterSpacing: '1.5px',
                borderRadius: '4px',
                backgroundColor: stylesConstants.primaryRed,
            },
        },
        MuiAvatar: {
            colorDefault: {
                color: stylesConstants.secondaryGray,
                backgroundColor: stylesConstants.secondaryLightGray,
                fontFamily: 'Open Sans Bold',
                letterSpacing: '-1px',
                fontSize: '0.875rem',
                marginRight: '8px',
                marginLeft: '8px',
            },
        },
        MuiMenu: {
            paper: {
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
            },
        },
        MuiSvgIcon: {
            fontSizeSmall: {
                fontSize: '20px',
            },
            fontSizeLarge: {
                fontSize: '34px',
            },
        },
        MuiIconButton: {
            root: {
                color: stylesConstants.secondaryGray,
                padding: '9px',
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: stylesConstants.secondaryBlack,
                },
                '&$disabled': {
                    color: stylesConstants.secondaryLightGray,
                },
            },
        },
        MuiCheckbox: {
            root: {
                color: stylesConstants.secondaryGray,
                padding: '9px',
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: stylesConstants.secondaryBlack,
                },
                '&$checked': {
                    color: stylesConstants.primaryRed,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: stylesConstants.primaryRed,
                    },
                },
            },
        },
        MuiFormControlLabel: {
            label: {
                fontFamily: 'Open Sans Light',
                fontSize: '18px',
                color: stylesConstants.secondaryDarkGray,
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: stylesConstants.secondaryBlack,
                },
            },
        },
        MuiTouchRipple: {
            root: {
                zIndex: 2,
            },
        },
        MuiInputBase: {
            input: {
                '&::placeholder': {
                    fontSize: '14px !important',
                },
            },
        },
    },
});

export default THEME;
