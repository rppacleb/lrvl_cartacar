import { Box, makeStyles, Typography, InputBase, Grid, Button } from "@material-ui/core"
import { MailOutlineRounded as IMailOutline, VpnKeyRounded as IVpnKey, GTranslateRounded as IGTranslate, Facebook as IFacebook, DraftsRounded as IDrafts } from '@material-ui/icons';
import * as Icon from 'react-feather';
import AuthFB from 'react-facebook-login/dist/facebook-login-render-props'
import AuthG from 'react-google-login';
import AuthMO from 'react-microsoft-login';

import gif1 from '../../../../../images/gif1.gif'

const style = makeStyles(theme => ({
    bg: {
		backgroundPosition: 'center',
		[theme.breakpoints.up('sm')]: {
			backgroundImage: `url(${gif1})`,
		},
		backgroundSize: '130%',
		backgroundRepeat: 'no-repeat',
		overflow: 'hidden'
	},
    search: {
		position: 'relative',
		borderRadius: '10px',
        padding: '5px 5px 5px 10px',
        backgroundColor: '#f8f8fd',
		marginLeft: 0,
		width: '100%',
	},
	searchIcon: {
		paddingBottom: theme.spacing(1.2),
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
			width: '100%',
		}
	},
    button: {
        cursor: 'pointer',
    }
}))

export const SI = () => {
    let classes = style()
    
    const gResponse = () => {

    }
    
    const fbResponse = () => {

    }

    const moResponse = () => {

    }

    return (
        <Box height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="#ffffff">
            <Box display="flex" width="50%" height="50%" bgcolor="green" borderRadius={20}bgcolor="#e3e1f8">
                <Box width="50%" height="100%" className={classes.bg}></Box>
                <Box p={8} width="50%">
                    <Box mb={3}>
                        <Typography className="f-30"><strong>CART</strong> A<strong>CAR</strong></Typography>
                        <Typography className="f-14">Start using POFSIS with your existing account from . . .</Typography>
                    </Box>
                    <Box>
                        <Box className={classes.search} mb={2}>
                            <Box className={classes.searchIcon} color="gray"><IMailOutline /></Box>
                            <InputBase width="100%" placeholder="Email" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'search' }}   />
                        </Box>
                        <Box className={classes.search} mb={2}>
                            <Box className={classes.searchIcon} color="gray"><IVpnKey /></Box>
                            <InputBase width="100%" placeholder="Password" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'search' }}   />
                        </Box>
                        <Button variant="contained" color="primary" fullWidth>SIGNIN</Button>
                        <Box mb={2} mt={2} className="separator">OR</Box>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <AuthG clientId="363837300258-mvhdo2rb05toh23n9ismjfglttjo99oj.apps.googleusercontent.com" render={props => (
                                    <Box display="flex" alignItems="center" bgcolor="#ffffff" p={1} borderRadius={10} mb={2} onClick={props.onClick} className={classes.button}>
                                        <IGTranslate style={{color: '#3ead8c'}} />
                                        <Box ml={1} className="f-11"><strong>Google</strong></Box>
                                    </Box>
                                    )} buttonText="Login" onSuccess={gResponse} onFailure={gResponse} cookiePolicy={'single_host_origin'}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <AuthFB appId="1132127907263808" fields="name,email,picture" callback={fbResponse} render={props => (
                                    <Box display="flex" alignItems="center" bgcolor="#ffffff" p={1} borderRadius={10} onClick={props.onClick} className={classes.button}>
                                        <IFacebook style={{color: '#549bc7'}} />
                                        <Box ml={1} className="f-11"><strong>fb</strong></Box>
                                    </Box>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <AuthMO clientId={`05e56ff0-f31f-40f4-b327-8eff7efccdba`} authCallback={moResponse} graphScopes={['user.read', 'email']}>
                                    <Box display="flex" alignItems="center" bgcolor="#ffffff" p={1} borderRadius={10} className={classes.button}>
                                        <IDrafts style={{color: 'grey'}} />
                                        <Box ml={1} className="f-11"><strong>Outlook</strong></Box>
                                    </Box>
                                </AuthMO>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}