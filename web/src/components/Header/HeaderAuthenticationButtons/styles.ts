import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: { 
        flexGrow: 0, 
    },
    menu: {
        p: 10,
    }
}) as {[style: string]: SxProps<Theme>};