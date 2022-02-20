import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    section: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 2,
        p: 1
    }
}) as {[style: string]: SxProps<Theme>};