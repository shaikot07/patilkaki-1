import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../../Theme/ThemeToggle';


const navItem = [
    { route: "Home", pathname: "/" },
    { route: "Product", pathname: "/product" },
    { route: "Pricing", pathname: "/pricing" },
    { route: "industry", pathname: "/industry" },
    { route: "Customer Stories", pathname: "/customerstories" },
    { route: "About", pathname: "/about" },
    { route: "Blog", pathname: "/blog" },
];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#151218' }}>
            <Container
                maxWidth={false}
                sx={{
                    width: {
                        xs: '100%',  // 100% width on extra-small screens
                        sm: '600px', // 600px width on small screens
                        md: '800px', // 800px width on medium screens
                        lg: '1200px', // 1000px width on large screens
                        xl: '1200px'  // 1200px width on extra-large screens
                    }
                }}>
                <Toolbar disableGutters>
                    {/* Big Screen part  */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {navItem.map((item) => (
                                <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link to={item.pathname} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {item.route}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        component="img"
                        sx={{ height: 30, marginRight: 2 }}
                        alt="Logo"
                        src="https://i.ibb.co/FJDK671/logo.png"
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {navItem.map((item) => (
                            <Button
                                key={item.route}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link}
                                to={item.pathname}
                            >
                                {item.route}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md:'block' } }}>
                        {/* <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
                        <div className=''>
                        <ThemeToggle />
                        <Link className=" font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mr-4 ml-4 transition-colors hover:text-white">Log In</Link>
                        <Link className='button-primary button-primary:hover'>Talk To Us</Link>
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
