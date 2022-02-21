import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    timeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
}) as {[style: string]: SxProps<Theme>};