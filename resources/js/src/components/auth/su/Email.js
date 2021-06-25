import { useEffect, useState } from 'react';
import { Box, makeStyles, Typography, InputBase, Grid, Button } from "@material-ui/core"
import { MailOutlineRounded as IMailOutline, VpnKeyRounded as IVpnKey, GTranslateRounded as IGTranslate, Facebook as IFacebook, DraftsRounded as IDrafts, PhoneOutlined as IPhone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
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
    const [pace, setPace] = useState(1);
    const [disable, setDisable] = useState(false)
    const [verification, setVerification] = useState('')
    const [inputs, setInputs] = useState({account: '', verification: '', password: ''})
    const [validation, setValidation] = useState({email: '', verification: '', password: ''})

    const submitHandler = async () => {
        setDisable(true)
        if (pace === 1) {
            if (inputs.account !== '') {
                let rqx = await request('GET', `/api/auth/su/attempt/email`, '', {...inputs, pace: pace})
                console.log(rqx);
                if (rqx.msg === 'success') {
                    setVerification(rqx.code)
                    setPace(2)
                    setDisable(false)
                } else {
                    setValidation({...validation, email: 'Account already exist.'})
                }
            }
        } else if (pace == 2) {
            if (inputs.verification === verification) {
                setTimeout(() => {
                    setPace(3)
                    setDisable(false)
                }, 800);
            } else {
                setValidation({...validation, verification: 'Verification code mismatched.'})
            }
        } else if (pace == 3) {
            if (inputs.password !== '') {
                let rqx = await request('GET', `/api/auth/su/attempt/email`, '', {...inputs, pace: pace})
                console.log(rqx);
                if (rqx.msg === 'success') {
                    window.location.href = '/'
                } else {
                    setValidation({...validation, email: 'Account already exist.'})
                }
            } else {
                setValidation({...validation, email: 'Password is required.'})
            }
        }
    }

    return (
        <Box height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="#ffffff">
            <Box display="flex" alignItems="center" width="750px" height="450px" borderRadius={20}bgcolor="#e3e1f8">
                <Box width="45%" height="100%" className={classes.bg}></Box>
                <Box pl={6.5} pr={6.5} width="55%">
                    <Box mb={3}>
                        <Typography className="f-30"><strong>CART</strong>A<strong>CAR</strong></Typography>
                        <Typography className="f-14">Email Signup</Typography>
                    </Box>
                    <Box>
                        <Box display={pace===1?'block':'none'}>
                            <Box style={validation.email !== '' ? {border: '1px solid red'} : {}} className={classes.search} mb={2}>
                                <Box className={classes.searchIcon} color="gray"><IMailOutline /></Box>
                                <InputBase fullWidth placeholder="Email" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Email' }} onChange={(e)=>setInputs({...inputs, account: e.target.value})} />
                            </Box>
                            <Box color="red" mb={2}>{validation.email}</Box>
                            <Button disabled={disable} variant="contained" color="primary" fullWidth onClick={submitHandler}>SIGNUP</Button>
                        </Box>
                        <Box display={pace===2?'block':'none'}>
                            <Box style={validation.verification !== '' ? {border: '1px solid red'} : {}} className={classes.search}>
                                <Box className={classes.searchIcon} color="gray"><IMailOutline /></Box>
                                <InputBase fullWidth placeholder="Verification Code" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Verification Code' }} onChange={(e)=>setInputs({...inputs, verification: e.target.value})} value={inputs.verification} />
                            </Box>
                            <Box color="red" mb={2}>{validation.verification}</Box>
                            <Button disabled={disable} variant="contained" color="primary" fullWidth onClick={submitHandler}>Verify</Button>
                        </Box>
                        <Box display={pace===3?'block':'none'}>
                            <Box style={validation.password !== '' ? {border: '1px solid red'} : {}} className={classes.search}>
                                <Box className={classes.searchIcon} color="gray"><IVpnKey /></Box>
                                <InputBase fullWidth placeholder="Password" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Password' }} onChange={(e)=>setInputs({...inputs, password: e.target.value})} />
                            </Box>
                            <Box color="red" mb={2}>{validation.password}</Box>
                            <Button disabled={disable} variant="contained" color="primary" fullWidth onClick={submitHandler}>SIGNUP NOW</Button>
                        </Box>
                    </Box>
                    <Box mt={2}>
                        <Typography className="f-12">Already have an account? <Link to="/" style={{textDecoration: 'none', color: '#443191'}}>Signin</Link></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}