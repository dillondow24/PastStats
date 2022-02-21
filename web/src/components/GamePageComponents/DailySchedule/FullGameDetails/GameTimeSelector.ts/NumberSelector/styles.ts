import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.default, 
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '5px',
        mx: 0.5,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main + '44',
        }
    },
    timeContainer: {
        display: 'flex',
        justifyContent: 'center',
        px: 2
    },
    sliderContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    container:{
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: 2,
    },
    iconContainer: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main + '44',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    },
}) as {[style: string]: SxProps<Theme>};