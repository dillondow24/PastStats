import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    label: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}) as {[style: string]: SxProps<Theme>};