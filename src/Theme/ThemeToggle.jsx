import { useContext } from 'react';
import { useTheme } from '@emotion/react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../UI/Home/Home';

// import { ColorModeContext } from '../App';

const ThemeToggle = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    );
};

export default ThemeToggle;