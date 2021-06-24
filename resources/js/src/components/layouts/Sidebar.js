import { useState, useRef } from 'react';
import clsx from 'clsx';
import { InputBase, Badge, Box, Drawer, AppBar, Toolbar, List, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { HomeRounded as IHome, LocalMallRounded as ILocalMall, LoyaltyRounded as ILoyalty, ViewCarouselRounded as IViewCarousel, BusinessRounded as IBusiness, AccountTreeRounded as IAccountTree, Menu as IMenu, ChevronRight as IChevronRight, Search as ISearch, Notifications as INotifications, AccountCircle as IAccountCircle, MoreVert as IMoreVert } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			// marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		// padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
    appBar: {
        top: '48px',
        // zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
            top: '48px',
            width: drawerWidth,
            border: '1px solid white',
            transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        top: '48px',
        border: '1px solid white',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(1),
            width: theme.spacing(8.5) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // padding: theme.spacing(0, 1),
    },
    ListItemText: {
        '& span, & svg': {
            fontSize: '13.5px'
        },
    },
    active: {
        backgroundColor: '#ffb347',
        '&:hover': {
            backgroundColor: '#ffb347',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}));

export function Sidebar() {
    const classes = useStyles();
    const inputEl = useRef(0);
    let location = useLocation()
    location = location.pathname.split('/')
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <AppBar position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })} style={{backgroundColor: 'white'}} elevation={5}>
                <Toolbar variant="dense">
                    <Box mr={open?0:9}></Box>
                    <Box className={classes.search}>
                        <Box className={classes.searchIcon}><ISearch /></Box>
                        <InputBase placeholder="I'm Looking for . . . . ." classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }} inputProps={{ 'aria-label': 'search' }} />
                    </Box>
                    <Box className={classes.grow} />
                    <Box className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary"><INotifications /></Badge>
                        </IconButton>
                        <IconButton edge="end" ref={inputEl} aria-label="account of current user" aria-controls={'menuId'} aria-haspopup="true" color="inherit">
                            <IAccountCircle />
                        </IconButton>
                    </Box>
                    <Box className={classes.sectionMobile}>
                        <IconButton aria-label="show more" aria-controls={'mobileMenuId'} aria-haspopup="true" color="inherit" ><IMoreVert /></IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu}
            {renderMenu} */}
            <Drawer variant="permanent" className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })} classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
                <Box className={classes.toolbar}>
                    {open ? <Box ml={2.1} className="f-18"><strong>Menu</strong></Box> : ''}
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={handleDrawerToggle}>
                            {open ? <IMenu /> : <IChevronRight /> }
                        </IconButton>
                        <Box ml={1}><Divider orientation="vertical" style={{height:'20px', width: '2px'}} /></Box>
                    </Box>
                </Box>
                <List>
                    <Link to="/" className={classes.link}>
                        <ListItem button className={location[1]===''?classes.active:''}>
                                <ListItemIcon><IHome /></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/products/my" className={classes.link}>
                        <ListItem button className={location[1]==='products'?classes.active:''}>
                                <ListItemIcon><ILocalMall /></ListItemIcon>
                                <ListItemText className={classes.ListItemText} primary="My Products" />
                        </ListItem>
                    </Link>
                    <ListItem button className={location==='/'?classes.active:''}>
                        <ListItemIcon><ILoyalty /></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary="Promos" />
                    </ListItem>
                    <ListItem button className={location==='/'?classes.active:''}>
                        <ListItemIcon><IViewCarousel /></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary="Templates" />
                    </ListItem>
                    <ListItem button className={location==='/'?classes.active:''}>
                        <ListItemIcon><IBusiness /></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary="Business Development" />
                    </ListItem>
                    <ListItem button className={location==='/'?classes.active:''}>
                        <ListItemIcon><IAccountTree /></ListItemIcon>
                        <ListItemText className={classes.ListItemText} primary="Integrations" />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}
