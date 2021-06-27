import { useState, useEffect, useRef } from "react";
import { Box, Button, Grid, makeStyles, Typography, fade, InputBase } from "@material-ui/core"
import { PersonRounded as IPerson, AttachMoneyRounded as IAttachMoney, DescriptionRounded as IDescription } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';

const style = makeStyles((theme) => ({
	search: {
		position: 'relative',
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
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
		padding: theme.spacing(2, 2, 2, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
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
}));

export const Payment = ({ grandTotal, cart, inputs, setInputs }) => {
    let history = useHistory()
    let classes = style()
    const [paymentViewed, setPaymentViewed] = useState(false)

    useEffect(() => {
        if (inputs.fullname !== '' && inputs.address !== '' && grandTotal > 0) {
            setPaymentViewed(true)
        }
    }, [inputs, grandTotal])

    const checkout = () => {
        console.log(inputs, cart);
        let ccart = cart.filter(c=>c.checked)
        history.push(`/cart/checkout?fullname=${encodeURI(inputs.fullname)}&address=${encodeURI(inputs.address)}&cart=${JSON.stringify(ccart)}`)
    }

    return (
        <Box p={2} bgcolor="#ffffff" borderRadius={20}>
            <Box display="flex" justifyContent="space-between" mb={1}>
                <Box className="f-20"><strong>Checkout Info</strong></Box>
            </Box>
            <Box mb={2} className={classes.search} bgcolor="primary.light" borderRadius={15}>
                <Box className={classes.searchIcon} color="gray"><IPerson /></Box>
                <InputBase fullWidth placeholder="Full Name" classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }} inputProps={{ 'aria-label': 'Full Name' }}
                onInput={(e) => setInputs({...inputs, fullname: e.target.value})}
                />
            </Box>
            <Box mb={3} className={classes.search} bgcolor="primary.light" borderRadius={15}>
                <Box className={classes.searchIcon} color="gray"><IPerson /></Box>
                <InputBase fullWidth placeholder="Complete Address" classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }} inputProps={{ 'aria-label': 'Complete Address' }} rows={1} multiline
                onInput={(e) => setInputs({...inputs, address: e.target.value})}
                />
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-15"><strong>Grand Total</strong></Box>
                <Box className="f-15">PHP{grandTotal.toFixed(2)}</Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-20"><strong></strong></Box>
            </Box>
            <Box className="c-pointer" p={1} bgcolor="primary.main" color="#ffffff" borderRadius={10} display={paymentViewed ? 'block': 'none'} textAlign="center" onClick={checkout}> Proceed to checkout </Box>
            <Box display={paymentViewed ? 'none': 'block'} textAlign="center"> Please complete all requirement before we proceed</Box>
        </Box>
    )
}