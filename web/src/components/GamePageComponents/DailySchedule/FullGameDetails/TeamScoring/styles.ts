import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        pr: 1
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
    },
    teamLogo: {
        // display: {xs: 'none', sm: 'flex'}
        mr: 1
    },
    tableCell: {
        p: 0
    },
}) as {[style: string]: SxProps<Theme>};