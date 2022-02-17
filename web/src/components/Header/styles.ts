import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        px: 2,
        py: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: theme.palette.background.paper,
    },
    logoContainer: { 
        mr: 2, 
        display: { xs: 'none', md: 'flex' },
        width: 165,
    },
    tabsContainer: {
        flex: 1,
    },
    profileContainer: {
        width: 165,
        display: 'flex',
        justifyContent: 'flex-end',
    }
}) as {[style: string]: SxProps<Theme>};