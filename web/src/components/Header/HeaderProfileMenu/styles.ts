import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: { 
        flexGrow: 0, 
    },
    menu: {
        mt: '45px'
    }
}) as {[style: string]: SxProps<Theme>};