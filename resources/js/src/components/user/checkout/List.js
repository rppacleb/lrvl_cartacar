import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import { useEffect } from "react"

export const List = ({ c }) => {
    return (
        <Box mb={3} display="flex" p={2} borderRadius={20} bgcolor="#ffffff" className="c-pointer">
            <Box mr={2} className="personal-logo-sm personal-logo-flat-top" style={{backgroundImage: `url(${c.image_link})`, minWidth: '5rem'}}></Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
                <Box>
                    <Box className="f-20"><strong>{c.name}</strong></Box>
                    <Box>PHP{parseFloat(c.amount).toFixed(2)}</Box>

                    <Box display="flex" alignItems="center" className="f-12">
                        <Box>Total: <strong>PHP</strong></Box>
                        <strong>{(parseFloat(c.amount) * c.quantity).toFixed(2)}</strong>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center">
                   <Box mr={1}> QTY : </Box><strong>{c.quantity}</strong>
                </Box>
            </Box>
        </Box>
    )
}