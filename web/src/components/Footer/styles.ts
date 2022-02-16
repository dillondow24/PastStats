import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        py: 3,
        px: 2,
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
    logoContainer: { 
        mr: 2, 
    },
    container: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
    }
}) as {[style: string]: SxProps<Theme>};