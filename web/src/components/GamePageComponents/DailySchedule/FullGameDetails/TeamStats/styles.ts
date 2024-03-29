import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        mx: 3,
        my: 1
    }
}) as {[style: string]: SxProps<Theme>};