import { SxProps, Theme } from "@mui/material";

export const useStyles = (theme: Theme) => ({
    googleButton:{
        backgroundColor: '#4285F4bb',
        color: '#fff',
        mt: 2,
        mb: 2,
        '&:hover':{
            backgroundColor: '#4285F4',
        }
    }
}) as {[style: string]: SxProps<Theme>};