import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
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