import { useEffect, useState } from 'react';
import { Box, makeStyles, Typography, InputBase, Grid, Button } from "@material-ui/core"
import { MailOutlineRounded as IMailOutline, VpnKeyRounded as IVpnKey, GTranslateRounded as IGTranslate, Facebook as IFacebook, DraftsRounded as IDrafts, PhoneOutlined as IPhone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
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
        padding: '3px 3px 3px 10px',
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

export const Mobile = () => {
    let classes = style()
    const [inputs, setInputs] = useState({account: '', password: ''})

    const submitHandler = async () => {
        let rqx = await request('GET', `/auth/attempt/email`, '', inputs)
    }
    
    const gResponse = () => {
    }
    
    const fbResponse = () => {

    }

    const moResponse = () => {

    }

    return (
        <Box height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="#ffffff">
            <Box display="flex" alignItems="center" width="750px" height="450px" borderRadius={20}bgcolor="#e3e1f8">
                <Box width="45%" height="100%" className={classes.bg}></Box>
                <Box pl={6.5} pr={6.5} width="55%">
                    <Box mb={3}>
                        <Typography className="f-30"><strong>CART</strong>A<strong>CAR</strong></Typography>
                        <Typography className="f-14">Mobile Number Signin</Typography>
                    </Box>
                    <Box>
                        <Box className={classes.search} mb={2}>
                            <Box className={classes.searchIcon} color="gray"><IPhone /></Box>
                            <InputBase width="100%" placeholder="Mobile Number" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'Mobile Number' }} onChange={(e)=>setInputs({...inputs, account: e.event.target})} />
                        </Box>
                        <Box className={classes.search} mb={2}>
                            <Box className={classes.searchIcon} color="gray"><IVpnKey /></Box>
                            <InputBase type="password" width="100%" placeholder="Password" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'search' }} onChange={(e)=>setInputs({...inputs, password: e.event.target})} />
                        </Box>
                        <Button variant="contained" color="primary" fullWidth onClick={submitHandler}>SIGNIN</Button>
                        <Box mb={2} mt={2} className="separator">OR</Box>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Link to="/si/email">
                                    <Box display="flex" mb={0.5} justifyContent="center" bgcolor="#ffffff" p={1.5} borderRadius={10} className={classes.button} color="black">
                                        <IMailOutline style={{color: '#3ead8c'}} />
                                        {/* <Box ml={1} className="f-13"><strong>Mobile Number</strong></Box> */}
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <AuthG clientId="363837300258-mvhdo2rb05toh23n9ismjfglttjo99oj.apps.googleusercontent.com" render={props => (
                                    <Box display="flex" justifyContent="center" bgcolor="#ffffff" p={1.5} borderRadius={10} onClick={props.onClick} className={classes.button}>
                                        <IGTranslate style={{color: '#c23829'}} />
                                        {/* <Box ml={1} className="f-13"><strong>Google</strong></Box> */}
                                    </Box>
                                    )} buttonText="Login" onSuccess={gResponse} onFailure={gResponse} cookiePolicy={'single_host_origin'}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <AuthFB appId="1132127907263808" fields="name,email,picture" callback={fbResponse} render={props => (
                                    <Box display="flex" justifyContent="center" bgcolor="#ffffff" p={1.5} borderRadius={10} onClick={props.onClick} className={classes.button}>
                                        <IFacebook style={{color: '#549bc7'}} />
                                        {/* <Box ml={1} className="f-13"><strong>Facebook</strong></Box> */}
                                    </Box>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <AuthMO clientId={`05e56ff0-f31f-40f4-b327-8eff7efccdba`} authCallback={moResponse} graphScopes={['user.read', 'email']}>
                                    <Box display="flex" justifyContent="center" bgcolor="#ffffff" p={1.5} borderRadius={10} className={classes.button}>
                                        <IDrafts style={{color: 'grey'}} />
                                        {/* <Box ml={1} className="f-13"><strong>Outlook</strong></Box> */}
                                    </Box>
                                </AuthMO>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={2}>
                        <Typography className="f-12">Don't have an account? <Link to="/signup" style={{textDecoration: 'none', color: '#443191'}}>Signup</Link></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}