import { Grid, Box } from "@material-ui/core"
import { Link } from "react-router-dom"

export const List = ({ p }) => {
    return (
        <Grid item xs={4}>
            <Link to={`/product/update/${p.id}`}>
                <Box display="flex" alignItems="center" p={2} borderRadius={20} bgcolor="#ffffff" className="c-pointer" color="black">
                    <Box mr={2} className="personal-logo-sm personal-logo-flat-top" style={{backgroundImage: `url(${p.image_link})`, minWidth: '5rem'}}></Box>
                    <Box>
                        <Box className="f-20"><strong>{p.name}</strong></Box>
                        <Box>PHP{parseFloat(p.amount).toFixed(2)}</Box>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}