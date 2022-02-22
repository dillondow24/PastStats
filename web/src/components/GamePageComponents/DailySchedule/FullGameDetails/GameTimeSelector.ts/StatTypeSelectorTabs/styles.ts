import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    tabs: {
        display: 'flex',
        flex: 1,
        mt: -2,
        mb: -1
    }
}) as {[style: string]: SxProps<Theme>};