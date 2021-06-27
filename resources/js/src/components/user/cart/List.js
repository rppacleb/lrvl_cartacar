import { Box, Switch, Button } from "@material-ui/core"
import { ChevronLeftRounded as IChevronLeft, ChevronRightRounded as IChevronRight } from "@material-ui/icons"
import { useEffect } from "react"

export const List = ({ c, k, qtyHandler, selectHandler }) => {
    return (
        <Box mb={3} display="flex" p={2} borderRadius={20} bgcolor="#ffffff">
            <Box mr={2} className="personal-logo-sm personal-logo-flat-top" style={{backgroundImage: `url(${c.image_link})`, minWidth: '5rem'}}></Box>
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                <Box>
                    <Box className="f-20"><strong>{c.name}</strong></Box>
                    <Box>PHP{parseFloat(c.amount).toFixed(2)}</Box>

                    <Box display="flex" alignItems="center" className="f-12">
                        <Button onClick={(e) => qtyHandler(c, 'minus')}><IChevronLeft/></Button> 
                        <Box><strong>{c.quantity}</strong></Box> 
                        <Button onClick={(e) => qtyHandler(c, 'add')}><IChevronRight/></Button> 
                    </Box>
                </Box>
                <Box>
                    <Switch checked={c.checked} color="primary" name="feature_all" inputProps={{ 'aria-label': 'primary checkbox' }} value="all" onClick={()=>selectHandler(c, k)} /> Select
                </Box>
            </Box>
        </Box>
    )
}