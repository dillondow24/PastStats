import { useTheme } from '@mui/material';
import { useStyles } from './styles';

interface Props {
  gameId: string;
}

export default function FullGameDetails({gameId}: Props) {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
      <div>
        gameId
      </div>
    );
}
