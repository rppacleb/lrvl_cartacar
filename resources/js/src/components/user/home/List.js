import { Grid, Box, Card, CardActionArea, CardMedia, CardContent, makeStyles, Typography  } from "@material-ui/core"
import { ShoppingCartRounded as IShoppingCart } from "@material-ui/icons"
import { Rating } from "@material-ui/lab"
import { Link } from "react-router-dom"

let styles = makeStyles((theme)=> ({
    tcard: {
        boxShadow: '0px 3px 10px -2px grey',
        borderRadius: '10px',
    },
    tcardBGTop: {
        boxShadow: 'none',
        borderRadius: '10px 10px 0px 0px',
    }
}))

export const List = ({ p, atcHandler }) => {
    let classes = styles()
    return (
        <Grid item xl={2} lg={2} sm={3} xs={6}>
            <Card className={classes.tcard}>
                <CardActionArea>
                    <CardMedia component="img" alt="tool logo" height="110" image={p.image_link} title="tool logo" className={classes.tcardBGTop} />
                    <CardContent>
                        <Box display="flex" flexDirection="column" m={-0.4}>
                            <Box mb={3}>
                                <Typography className="f-15"><strong>{p.name}</strong></Typography>
                                <Typography className="f-11">PHP{parseFloat(p.amount).toFixed(2)}</Typography>
                            </Box>
                            <Grid container  alignItems="center">
                                <Grid item xs={12}>
                                    <Box p={1} color="#ffffff" justifyContent="center" display="flex" alignItems="center" width="100%" bgcolor="primary.main" borderRadius={10} onClick={()=>atcHandler(p)}>
                                        <IShoppingCart className="f-20" />
                                        <Box>Add to Cart</Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}