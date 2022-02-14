import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    logoContainer: { 
        flexGrow: 1, 
        display: { xs: 'flex', md: 'none' } 
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
        pb: 1
    },
    tab: {
        mb: 0,
    }
}) as {[style: string]: SxProps<Theme>};