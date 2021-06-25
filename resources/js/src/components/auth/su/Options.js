import { Box, makeStyles, Typography, InputBase, Grid, Button } from "@material-ui/core"
import { MailOutlineRounded as IMailOutline, VpnKeyRounded as IVpnKey, GTranslateRounded as IGTranslate, Facebook as IFacebook, DraftsRounded as IDrafts, PhoneOutlined as IPhone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import AuthFB from 'react-facebook-login/dist/facebook-login-render-props'
import AuthG from 'react-google-login';
import AuthMO from 'react-microsoft-login';

import { request } from "../../../core/request/API";

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

export const Options = () => {
    let classes = style()
    
    const gResponse = async (res) => {
        console.log(res);
        let rqx = await request('GET', `/api/auth/su/tp/attempt/email`, '', {account: res.profileObj.email})
        if (rqx.msg === 'user') {
            window.location.href = '/'
        }
    }
    
    const fbResponse = async (res) => {
        console.log('facebook');
        let rqx = await request('GET', `/api/auth/su/tp/attempt/email`, '', {account: res.email})
        console.log(rqx);
        if (rqx.msg === 'user') {
            window.location.href = '/'
        }
    }

    // const moResponse = () => {

    // }

    return (
        <Box height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="#ffffff">
            <Box display="flex" alignItems="center" width="750px" height="450px" borderRadius={20}bgcolor="#e3e1f8">
                <Box width="45%" height="100%" className={classes.bg}></Box>
                <Box p={6.5} width="55%">
                    <Box mb={3}>
                        <Typography className="f-25"><strong>CART</strong>A<strong>CAR</strong></Typography>
                        <Typography className="f-12">Signup to Cartacar using . . .</Typography>
                    </Box>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Link to="/su/email">
                                <Box display="flex" mb={0.5} alignItems="center" bgcolor="#ffffff" p={1.3} borderRadius={10} className={classes.button} color="black">
                                    <IMailOutline style={{color: '#3ead8c'}} />
                                    <Box ml={1} className="f-12"><strong>Email</strong></Box>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <Link to="/su/mobile">
                                <Box display="flex" mb={0.5} alignItems="center" bgcolor="#ffffff" p={1.3} borderRadius={10} className={classes.button} color="black">
                                    <IPhone style={{color: '#000000'}} />
                                    <Box ml={1} className="f-12"><strong>Mobile Number</strong></Box>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12}>
                            <AuthG clientId="9179683700-vvlvtj7p7tcm49d9ngb5kcvee76h033r.apps.googleusercontent.com" render={props => (
                                <Box display="flex" mb={0.5} alignItems="center" bgcolor="#ffffff" p={1.3} borderRadius={10} onClick={props.onClick} className={classes.button}>
                                    <IGTranslate style={{color: '#c23829'}} />
                                    <Box ml={1} className="f-12"><strong>Google</strong></Box>
                                </Box>
                                )} buttonText="Login" onSuccess={gResponse} onFailure={gResponse} cookiePolicy={'single_host_origin'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AuthFB appId="495597934830897" fields="name,email,picture" callback={fbResponse} render={props => (
                                <Box display="flex" mb={0.5} alignItems="center" bgcolor="#ffffff" p={1.3} borderRadius={10} onClick={props.onClick} className={classes.button}>
                                    <IFacebook style={{color: '#549bc7'}} />
                                    <Box ml={1} className="f-12"><strong>Facebook</strong></Box>
                                </Box>
                                )}
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <AuthMO clientId={`05e56ff0-f31f-40f4-b327-8eff7efccdba`} authCallback={moResponse} graphScopes={['user.read', 'email']}>
                                <Box display="flex" mb={0.5} alignItems="center" bgcolor="#ffffff" p={1.3} borderRadius={10} className={classes.button}>
                                    <IDrafts style={{color: 'grey'}} />
                                    <Box ml={1} className="f-12"><strong>Outlook</strong></Box>
                                </Box>
                            </AuthMO>
                        </Grid> */}
                    </Grid>
                    <Box mt={2}>
                        <Typography className="f-12">Already have an account? <Link to="/" style={{textDecoration: 'none', color: '#443191'}}>Signin</Link></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}