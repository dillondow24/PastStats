import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        px: 1
    },
}) as {[style: string]: SxProps<Theme>};