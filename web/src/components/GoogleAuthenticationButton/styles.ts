import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    googleButton:{
        backgroundColor: '#4285F4',
        color: '#fff',
        mt: 2,
        mb: 2,
    }
}) as {[style: string]: SxProps<Theme>};