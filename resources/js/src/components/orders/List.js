import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect } from "react"
import { request } from "../../core/request/API"

export const List = ({ c, auth, __init }) => {
    const submitHandler = async (status) => {
        let form = new FormData()
        form.append('id', c.tid)
        form.append('status', status)
        let rqx = await request('POST', '/api/transaction/status/update', form)
        if (rqx.msg === 'success') {
            __init()
        }
    }

    return (
        <Box mb={3} display="flex" p={2} borderRadius={20} bgcolor="#ffffff" className="c-pointer">
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                <Box>
                    <Box className="f-20">
                        <strong>
                            {
                                c.status === 'for_delivery' ? (
                                    'Delivery on Process'
                                ) : c.status === 'out_for_delivery' ? (
                                    'Out for Delivery'
                                ) : (
                                    'Delivered'
                                )
                            }
                        </strong>
                    </Box>

                    <Box display="flex" alignItems="center" className="f-12">
                        <Box>Total: <strong>PHP{parseFloat(c.paid_amount).toFixed(2)}</strong></Box>
                    </Box>
                    <Box mt={2}>
                        <Box><strong>Buyer Info:</strong></Box>
                        <Box>{c.fullname}</Box>
                        <Box>{c.address}</Box>
                        <Box>{c.email !== null && c.email}</Box>
                        <Box>{c.mobile !== null && c.mobile}</Box>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center">
                    {
                        auth === 'aroot' && (
                            c.status === 'for_delivery' ? (
                                <Box p={1} bgcolor="primary.main" borderRadius={10} onClick={()=>submitHandler('out_for_delivery')}>
                                    Deliver now
                                </Box>
                            ) : c.status === 'out_for_delivery' ? (
                                <Box p={1} bgcolor="secondary.main" borderRadius={10} onClick={()=>submitHandler('delivered')}>
                                    Mark as Receive
                                </Box>
                            ) : (
                                <Box p={1} bgcolor="secondary.main" borderRadius={10}>
                                    Delivered
                                </Box>
                            )
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}