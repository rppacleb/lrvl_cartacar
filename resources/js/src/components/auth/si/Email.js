import { useEffect, useState } from 'react';
import { Box, makeStyles, Typography, InputBase, Grid, Button } from "@material-ui/core"
import { MailOutlineRounded as IMailOutline, VpnKeyRounded as IVpnKey, GTranslateRounded as IGTranslate, Facebook as IFacebook, DraftsRounded as IDrafts, PhoneOutlined as IPhone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import AuthFB from 'react-facebook-login/dist/facebook-login-render-props'
import AuthG from 'react-google-login';
import AuthMO from 'react-microsoft-login';
import { request } from '../../../core/request/API';

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

export const Email = () => {
    let classes = style()
    const [inputs, setInputs] = useState({account: '', password: ''})
    const [validation, setValidation] = useState({email: '', tp: ''})

    const submitHandler = async () => {
        setValidation({...validation, email: ''})
        if (inputs.account !== '' && inputs.password !== '') {
            let rqx = await request('GET', `/api/auth/attempt/email`, '', inputs)
            if (rqx.msg === '!user') {
                setValidation({...validation, email: 'Account Mismatched!'})
            }
        }
    }
    
    const gResponse = async (res) => {
        console.log('google');
        let rqx = await request('GET', `/api/auth/tp/attempt/email`, '', {account: res.profileObj.email})
        if (rqx.msg === 'user') {
            window.location.reload()
        }
    }
    
    const fbResponse = async (res) => {
        console.log(res);
        let rqx = await request('GET', `/api/auth/tp/attempt/email`, '', {account: res.email})
        if (rqx.msg === 'user') {
            window.location.reload()
        }
    }

    const moResponse = (err, data, msal) => {
        const __init = async () => {
            let rqx = await request('GET', `/api/auth/tp/attempt/email`, '', {account: data.account.idToken.email})
            console.log(rqx);
            if (rqx.msg === 'user') {
                // window.location.href = '/'
            }
        }
        data !== undefined && __init()
    }

    return (
        <Box height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="#ffffff">
            <Box display="flex" alignItems="center" width="750px" height="450px" borderRadius={20}bgcolor="#e3e1f8">
                <Box width="45%" height="100%" className={classes.bg}></Box>
                <Box pl={6.5} pr={6.5} width="55%">
                    <Box mb={3}>
                        <Typography className="f-30"><strong>CART</strong>A<strong>CAR</strong></Typography>
                        <Typography className="f-14">Email Signin</Typography>
                    </Box>
                    <Box>
                        <Box style={validation.email !== '' ? {border: '1px solid red'} : {}} className={classes.search} mb={2}>
                            <Box className={classes.searchIcon} color="gray"><IMailOutline /></Box>
                            <InputBase fullWidth placeholder="Email" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'Email' }} onChange={(e)=>setInputs({...inputs, account: e.target.value})} />
                        </Box>
                        <Box style={validation.email !== '' ? {border: '1px solid red'} : {}} className={classes.search}>
                            <Box className={classes.searchIcon} color="gray"><IVpnKey /></Box>
                            <InputBase type="password" fullWidth placeholder="Password" classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }} inputProps={{ 'aria-label': 'search' }} onChange={(e)=>setInputs({...inputs, password: e.target.value})} />
                        </Box>
                        <Box color="red" mb={2} mt={1}>{validation.email}</Box>
                        <Button variant="contained" color="primary" fullWidth onClick={submitHandler}>SIGNIN</Button>
                        <Box mb={2} mt={2} className="separator">OR</Box>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Link to="/si/mobile">
                                    <Box display="flex" mb={0.5} justifyContent="center" bgcolor="#ffffff" p={1.5} borderRadius={10} className={classes.button} color="black">
                                        <IPhone style={{color: '#000000'}} />
                                        {/* <Box ml={1} className="f-13"><strong>Mobile Number</strong></Box> */}
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <AuthG clientId="9179683700-vvlvtj7p7tcm49d9ngb5kcvee76h033r.apps.googleusercontent.com" render={props => (
                                    <Box display="flex" justifyContent="center" bgcolor="#ffffff" p={1.5} borderRadius={10} onClick={props.onClick} className={classes.button}>
                                        <IGTranslate style={{color: '#c23829'}} />
                                        {/* <Box ml={1} className="f-13"><strong>Google</strong></Box> */}
                                    </Box>
                                    )} buttonText="Login" onSuccess={gResponse} onFailure={gResponse} cookiePolicy={'single_host_origin'}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <AuthFB appId="495597934830897" fields="name,email,picture" callback={fbResponse} render={props => (
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
                        <Box color="red" mb={2} mt={1}>{validation.tp}</Box>
                    </Box>
                    <Box mt={2}>
                        <Typography className="f-12">Don't have an account? <Link to="/signup" style={{textDecoration: 'none', color: '#443191'}}>Signup</Link></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}