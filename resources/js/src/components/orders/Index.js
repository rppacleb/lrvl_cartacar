import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { request } from "../../core/request/API";
import { List } from "./List";

export const Orders = () => {
    const [transactions, setTransactions] = useState('')
    const [auth, setAuth] = useState('')

    let __init = async () => {
        let rqx1 = await request('GET', `/api/transactions`, '', '')
        console.log(rqx1);
        setTransactions(rqx1)
    }

    useEffect(() => {
        if (document.getElementById('aroot')) {
            setAuth('aroot')
        } else if (document.getElementById('uroot')) {
            setAuth('uroot')
        }

        __init()
    }, [])

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={5}>
                <Box className="f-20"><strong>My Orders</strong></Box>
            </Box>
            {
                transactions === '' ? (
                    <Box textAlign="center" className="f-20" mt={4}><strong>Please wait . . .</strong></Box>
                ) : transactions.length > 0 ? (
                    transactions.map((c, k)=> (
                        <List key={k} c={c} auth={auth} __init={__init} />
                    ))
                ) : (
                    <Box textAlign="center" className="f-20" mt={10}><strong>No Orders found</strong></Box>
                )
            }
        </>
    )
}