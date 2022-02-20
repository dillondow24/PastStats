import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    teamContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    score: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50
    }
}) as {[style: string]: SxProps<Theme>};