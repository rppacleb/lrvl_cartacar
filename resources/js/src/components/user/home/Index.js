import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { List } from "./List"
import { request } from "../../../core/request/API";
import Hero from '../../../assets/images/universe1.gif';

let styles = makeStyles(theme => ({
    bg1: {
        backgroundPosition: 'right', 
        backgroundSize: '100%',
        backgroundColor: '#fbfbfb',
        backgroundImage: `url(${Hero})`,
        backgroundRepeat: 'no-repeat',
    }
}))

export const Home = () => {
    let classes = styles()
    const [products, setProducts] = useState('')
    const [totalCart, setTotalCart] = useState('0')
    const [auth] = useState(JSON.parse(document.getElementById('uroot').getAttribute('auth')))
    const [name, setName] = useState('')

    useEffect(() => {
        let n = auth.email.split('@');
        setName(n[0])

        let __init = async () => {
            let rqx1 = await request('GET', `/api/product/read/all`, '', '')
            setProducts(rqx1)
            let rqx2 = await request('GET', `/api/cart/count`, '', '')
            setTotalCart(rqx2.count)

        }

        __init()
    }, [])

    const atcHandler = async (e) => {
        // console.log(e);
        const form = new FormData();
        for (let i in e) {
            form.append(i, e[i])
        }

        let rqx = await request('POST', `/api/cart/create`, form)
        setTotalCart(rqx.count)
    }

    return (
        <>
            <Box display="flex" height="305px" alignItems="center" justifyContent="space-between" borderRadius={15} className={classes.bg1} mb={3}>
                <Box m={10} color="secondary.light">
                    <Typography className="f-30">Howdy, <strong>{name.toUpperCase()}</strong></Typography>
                    <Typography className="f-15">It's <strong>Add to Cart</strong> time.</Typography>
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={5}>
                <Box className="f-20"><strong>All Products</strong></Box>
                <Link to="/cart"><Button variant="contained" color="primary">My Cart Items : {totalCart}</Button></Link>
            </Box>
            {
                products === '' ? (
                    <Box textAlign="center" className="f-20" mt={10}><strong>Please wait . . .</strong></Box>
                ) : products.length > 0 ? (
                    <Grid container spacing={3}>
                        {
                            products.map((p, k) => (
                                <List key={k} p={p} atcHandler={atcHandler} />
                            ))
                        }
                    </Grid>
                ) : (
                    <Box textAlign="center" className="f-20" mt={5}><strong>No Products found</strong></Box>
                )
            }
        </>
    )
}