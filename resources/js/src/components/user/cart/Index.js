import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { request } from "../../../core/request/API";
import { List } from "./List";
import { Payment } from "./Payment";

export const Cart = () => {
    const [cart, setCart] = useState('')
    const [grandTotal, setGrandTotal] = useState(0);
    useEffect(() => {
        let __init = async () => {
            let rqx1 = await request('GET', `/api/cart`, '', '')
            console.log(rqx1);
            let gt = 0
            rqx1.cart.map(r => {
                let subTotal = parseFloat(r.amount) * r.quantity
                gt = gt + subTotal
            })

            setGrandTotal(gt)

            setCart(rqx1.cart)
        }

        __init()
    }, [])

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
                                <List key={k} c={c} />
                            ))
                        ) : (
                            <Box textAlign="center" className="f-20" mt={10}><strong>Please Cart a product first</strong></Box>
                        )
                    }
                </Grid>
                <Grid item xs={4}>
                    <Payment grandTotal={grandTotal} cart={cart} />
                </Grid>
            </Grid>
        </>
    )
}