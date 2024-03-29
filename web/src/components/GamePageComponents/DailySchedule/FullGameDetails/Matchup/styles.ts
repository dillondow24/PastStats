import { SxProps, Theme } from "@mui/material";
import { red } from "@mui/material/colors";

export const useStyles = (theme: Theme) => ({
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}) as {[style: string]: SxProps<Theme>};