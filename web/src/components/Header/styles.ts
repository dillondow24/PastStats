import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        pl: 2,
        pr: 2,
        pt: 1,
        pb: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoContainer: { 
        mr: 2, 
        display: { xs: 'none', md: 'flex' }
    },
    tabsContainer: {
        flex: 1,
        // mb: -2
    },
    profileContainer: {
    }
}) as {[style: string]: SxProps<Theme>};