import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}) as {[style: string]: SxProps<Theme>};