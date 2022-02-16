import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        m: 5,
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    dividerContainer: {
        width: '100%',
        mt: 1
    },
    tabs: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2
    }
}) as {[style: string]: SxProps<Theme>};