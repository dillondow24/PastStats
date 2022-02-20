import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    tabs: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 2
    }
}) as {[style: string]: SxProps<Theme>};