import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    logoContainer: { 
        mr: 2, 
        display: { xs: 'none', md: 'flex' }
    },
}) as {[style: string]: SxProps<Theme>};