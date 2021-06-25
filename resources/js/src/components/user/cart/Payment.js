import { useEffect, useRef } from "react";
import { Box, Button, Grid, makeStyles, Typography, fade, InputBase } from "@material-ui/core"
import { PersonRounded as IPerson, AttachMoneyRounded as IAttachMoney, DescriptionRounded as IDescription } from "@material-ui/icons";
import { useState } from "react";
import { request } from "../../../core/request/API";

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

export const Payment = ({ grandTotal }) => {
    let paypal = useRef()
    let classes = style()
    const [paymentViewed, setPaymentViewed] = useState(false)
    const [inputs, setInputs] = useState({fullname: '', address: ''})
    useEffect(() => {
        if (!paymentViewed) {
            if (inputs.fullname !== '' && inputs.address !== '') {
                setPaymentViewed(true)
                window.paypal.Buttons({
                    style: {
                        size: 'large',
                        color: 'blue',
                        shape: 'rect',
                        label: 'checkout',
                        tagline: false
                    },
            
                    createOrder: function(data, actions) {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: grandTotal
                                }
                            }]
                        });
                    },
                    
                    onApprove: function(data, actions) {
                        return actions.order.capture().then(function(callback) {
                            __callback(callback)
                        });
                    }
            
                }).render(paypal.current);
            }
        }
    }, [inputs])

    const __callback = async (callback) => {
        if (callback.status === 'COMPLETED') {
            const form = new FormData();
            form.append('fullname', inputs.fullname)
            form.append('address', inputs.address)
            form.append('paid_amount', callback.purchase_units[0].amount.value)
            form.append('reference_number', callback.id)

            swal({
                title: "Please give us a moment!",
                text: "This may take a seconds or minute depending on the size of the data and/or your network connection",
                icon: "warning",
                buttons: !1,
                closeOnClickOutside: !1,
                closeOnEsc: !1
            })

            let rqx = await request('POST', `/api/cart/checkout`, form)
            console.log(rqx);
            if (rqx.msg == 'success') {
                swal({
                    title: "Success!",
                    text: "Account Configured successfully, We are now processing the delivery",
                    icon: "success",
                    buttons: !1,
                    closeOnClickOutside: !1,
                    closeOnEsc: !1
                })

                setTimeout(() => {
                    window.location.href = '/orders'
                }, 1000);
            }
        }
    }

    return (
        <Box p={2} bgcolor="#ffffff" borderRadius={20}>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-20"><strong>Checkout Info</strong></Box>
            </Box>
            <Box mb={2} className={classes.search} bgcolor="primary.light" borderRadius={15}>
                <Box className={classes.searchIcon} color="gray"><IPerson /></Box>
                <InputBase fullWidth placeholder="Full Name" classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }} inputProps={{ 'aria-label': 'Full Name' }}
                onInput={(e) => setInputs({...inputs, fullname: e.target.value })}
                />
            </Box>
            <Box mb={3} className={classes.search} bgcolor="primary.light" borderRadius={15}>
                <Box className={classes.searchIcon} color="gray"><IPerson /></Box>
                <InputBase fullWidth placeholder="Complete Address" classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }} inputProps={{ 'aria-label': 'Complete Address' }} rows={1} multiline
                onInput={(e) => setInputs({...inputs, address: e.target.value })}
                />
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-15"><strong>Grand Total</strong></Box>
                <Box className="f-15">PHP{grandTotal.toFixed(2)}</Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-20"><strong>Mode of Payment</strong></Box>
            </Box>
            {
                inputs.fullname !== '' && inputs.address !== '' ? (
                    <Box ref={paypal} />
                ) : (
                    <Box textAlign="center">Please fill-up the name and address first</Box>
                )
            }
        </Box>
    )
}