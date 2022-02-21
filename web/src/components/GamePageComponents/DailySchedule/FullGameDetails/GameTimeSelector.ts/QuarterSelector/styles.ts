import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
}) as {[style: string]: SxProps<Theme>};