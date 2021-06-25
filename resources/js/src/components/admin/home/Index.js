import { Box, Button, Grid } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { List } from "./List"
import { request } from "../../../core/request/API";

export const Home = () => {
    const [products, setProducts] = useState('')

    useEffect(() => {
        let __init = async () => {
            let rqx = await request('GET', `/api/product/read/all`, '', '')
            console.log(rqx);
            setProducts(rqx)
        }

        __init()
    }, [])

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={5}>
                <Box className="f-20"><strong>All Products</strong></Box>
                <Link to="/product/create"><Button variant="contained" color="primary">Create</Button></Link>
            </Box>
            {
                products === '' ? (
                    <Box textAlign="center" className="f-20" mt={10}><strong>Please wait . . .</strong></Box>
                ) : products.length > 0 ? (
                    <Grid container spacing={3}>
                        {
                            products.map((p, k) => (
                                <List key={k} p={p} />
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