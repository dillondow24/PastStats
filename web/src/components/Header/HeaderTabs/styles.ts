import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    logoContainer: { 
        flexGrow: 1, 
        display: { xs: 'flex', md: 'none' },
    },
    menu: {
        display: { xs: 'block', md: 'none' },
    },
    mobileViewRoot: { 
        flexGrow: 1, 
        display: { xs: 'flex', md: 'none' } 
    },
    webViewRoot: { 
        flexGrow: 1, 
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center'
    },
    mobileViewRootContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    tabButton: {
        mx: 1,
        px: 1
    }
}) as {[style: string]: SxProps<Theme>};