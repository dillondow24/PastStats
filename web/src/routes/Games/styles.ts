import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: { 
        backgroundColor: theme.palette.background.default,
    },
}) as {[style: string]: SxProps<Theme>};