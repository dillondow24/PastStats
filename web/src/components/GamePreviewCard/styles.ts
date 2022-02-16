import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        width: '25vw',
        minWidth: '200px',
        borderRadius: 2,
        backgroundColor: theme.palette.background.default,
        py: 1,
        m: 1,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.main + '44',
        },
        border: `1px solid ${theme.palette.background.paper}`
    },
    teamContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        px: 1
    },
}) as {[style: string]: SxProps<Theme>};