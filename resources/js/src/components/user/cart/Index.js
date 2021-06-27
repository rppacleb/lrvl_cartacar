import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { request } from "../../../core/request/API";
import { List } from "./List";
import { Payment } from "./Payment";

export const Cart = () => {
    const [cart, setCart] = useState('')
    const [grandTotal, setGrandTotal] = useState(0);
    const [inputs, setInputs] = useState({fullname: '', address: ''})

    useEffect(() => {
        let __init = async () => {
            let rqx = await request('GET', `/api/cart`, '', '')
            
            setCart(rqx.cart.map(c => {
                return {...c, checked: false}
            }))
            // computeGT(rqx)
            setGrandTotal(0)
        }

        __init()
    }, [])

    useEffect(() => {
        let gt = 0
        let ccart = [...cart]
        ccart.map(r => {
            if (r.checked) {
                let subTotal = parseFloat(r.amount) * r.quantity
                gt = gt + subTotal
            }
        })

        setGrandTotal(gt)
    }, [cart])

    const qtyHandler = async (c, action) => {
        let cid = c.id
        let form = new FormData()
        form.append('cid', cid)
        form.append('action', action)
        let rqx = await request('POST', `/api/cart/qty/update`, form)
        if (rqx.msg == 'success') {
            if (action === 'add') {
                setCart(cart.map(cc => cid === cc.id ? {...cc, quantity: parseInt(cc.quantity) + 1} : cc))
            } else {
                if (c.quantity === 1) {
                    setCart(cart.filter(cc => cid !== cc.id))
                } else {
                    setCart(cart.map(cc => cid === cc.id ? {...cc, quantity: parseInt(cc.quantity) - 1} : cc))
                }
            }
        }
    }


    const selectHandler = (c, k) => {
        let ccart = [...cart]
        ccart[k]['checked'] = !ccart[k]['checked']
        setCart(ccart)
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
                                <List key={k} c={c} k={k} selectHandler={selectHandler} qtyHandler={qtyHandler} />
                            ))
                        ) : (
                            <Box textAlign="center" className="f-20" mt={10}><strong>Please Cart a product first</strong></Box>
                        )
                    }
                </Grid>
                <Grid item xs={4}>
                    <Payment grandTotal={grandTotal} cart={cart} inputs={inputs} setInputs={setInputs} />
                </Grid>
            </Grid>
        </>
    )
}