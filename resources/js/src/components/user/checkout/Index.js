import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useLocation, Link } from 'react-router-dom';

import { request } from "../../../core/request/API";
import { List } from "./List";
import { Payment } from "./Payment";

export const Checkout = () => {
    let q = new URLSearchParams(useLocation().search);
    const [cart, setCart] = useState('')
    const [grandTotal, setGrandTotal] = useState(0);
    const [inputs, setInputs] = useState({fullname: q.get('fullname'), address: q.get('address')})

    useEffect(() => {
        let __init = async () => {
            let rqx = await request('GET', `/api/cart/tocheckout`, '', {carts: q.get('cart')})

            setCart(rqx.cart)
            let gt = 0
            rqx.cart.map(r => {
                let subTotal = parseFloat(r.amount) * r.quantity
                gt = gt + subTotal
            })

            setGrandTotal(gt)
        }

        __init()
    }, [])

    const __callback = async (callback) => {
        if (callback.status === 'COMPLETED') {
            const form = new FormData();
            form.append('carts', JSON.stringify(cart))
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
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={5}>
                <Box className="f-20"><strong>My Cart Items</strong></Box>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    {
                        cart === '' ? (
                            <Box textAlign="center" className="f-20" mt={4}><strong>Please wait . . .</strong></Box>
                        ) : cart.length > 0 ? (
                            cart.map((c, k)=> (
                                <List key={k} c={c} k={k} />
                            ))
                        ) : (
                            <Box textAlign="center" className="f-20" mt={10}><strong>Please Cart a product first</strong></Box>
                        )
                    }
                </Grid>
                <Grid item xs={4}>
                    <Payment grandTotal={grandTotal} cart={cart} inputs={inputs} setInputs={setInputs} __callback={__callback} />
                </Grid>
            </Grid>
        </>
    )
}