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

export const Payment = ({ grandTotal, cart, inputs, setInputs, __callback }) => {
    let paypal = useRef()
    let classes = style()
    const [paymentViewed, setPaymentViewed] = useState(false)

    useEffect(() => {
        grandTotal > 0 && (
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
        
            }).render(paypal.current)
        )
    }, [grandTotal])

    return (
        <Box p={2} bgcolor="#ffffff" borderRadius={20}>
            <Box display="flex" justifyContent="space-between" mb={1}>
                <Box className="f-20"><strong>Checkout Info</strong></Box>
            </Box>
            <Box className="f-17"><strong>{inputs.fullname}</strong></Box>
            <Box mb={2}>{inputs.address}</Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-15"><strong>Grand Total</strong></Box>
                <Box className="f-15">PHP{grandTotal.toFixed(2)}</Box>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Box className="f-20"><strong></strong></Box>
            </Box>
            <Box ref={paypal}  />
        </Box>
    )
}