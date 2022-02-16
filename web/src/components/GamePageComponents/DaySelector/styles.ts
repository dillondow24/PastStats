import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        boxShadow: 2,
        py: 1,
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        display: {xs: 'none', sm: 'flex'},
    }
}) as {[style: string]: SxProps<Theme>};