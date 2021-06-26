import { useState, useRef } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, IconButton, Typography, Badge, MenuItem, Menu, Container, Grid } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import CACIcon from '../../../../../public/images/gif1.gif';
import {ExitToAppRounded as IExitToApp} from '@material-ui/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { request } from '../../core/request/API';

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
		display: 'block',
		},
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
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
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
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'flex',
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));


export const Navbar = () => {
	let history = useHistory()
	let location = useLocation()
    location = location.pathname.split('/')
	const classes = useStyles();
	const inputEl = useRef(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


	const signoutHandler = () => {
		let __init = async () => {
            let rqx = await request('GET', `/api/auth/signout`, '', '')
			window.location.href = '/'
        }

        __init()
	}

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(inputEl.current);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu

			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
					<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<AppBar position="fixed" color="secondary">
			<Container>
				<Box display="flex" justifyContent="space-between" alignItems="center" p={1} width="100%">
					<Box display="flex" alignItems="center">
						<Box mr={1}><img src={CACIcon} alt="POFSIS LOGO"  width="50"/></Box>
						<Typography className={classes.title} variant="h6" noWrap><strong>CART</strong>A<strong>CAR</strong></Typography>
					</Box>
					{/* <div className={classes.grow} /> */}
					<Box display="flex" alignItems="center">
						<Box className={classes.sectionDesktop}>
							<Link to="/">
								<Box p={1} borderRadius={10} bgcolor={location[1]===''?'#ffffff':''} mr={4} className="c-pointer">
									<Typography className={classes.title}><strong>Home</strong></Typography>
								</Box>
							</Link>
							<Link to="/orders">
								<Box p={1} borderRadius={10} bgcolor={location[1]==='orders'?'#ffffff':''} mr={4} className="c-pointer" color="black">
									<Typography className={classes.title}><strong>Orders</strong></Typography>
								</Box>
							</Link>
						</Box>
						<IExitToApp className="c-pointer" onClick={signoutHandler} />
					</Box>
					{/* <Box className={classes.sectionMobile}>
						<IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit" >
						<MoreIcon />
						</IconButton>
					</Box> */}
				</Box>
			</Container>
		</AppBar>
	);
}
