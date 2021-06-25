import { Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Button } from '@material-ui/core';
import { Search as ISearch, ShoppingCartRounded as IShoppingCart } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/icon.png'

let styles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,
        maxWidth: 300,
    },
    tcard: {
        boxShadow: '0px 3px 10px -2px grey',
        borderRadius: '10px',
    },
    tcardBGTop: {
        boxShadow: 'none',
        borderRadius: '10px 10px 0px 0px',
    },
    navigation: {
        minWidth: '70px',
        textAlign: 'center',
        borderRadius: '10px',
        // borderRadius: '10px 10px 0px 0px',
    }
}))

export const List = () => {
    let classes = styles();
    return (
        <>
            <Box mb={2} className="f-20"><strong>All Products</strong></Box>
            <Grid container spacing={3}>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>Teambond</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.6</strong><Rating name="read-only" value={4.6} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>Philtaxes</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.2</strong><Rating name="read-only" value={4.2} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>Payroll</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>5.0</strong><Rating name="read-only" value={5.0} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>Rooms</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.0</strong><Rating name="read-only" value={4.0} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>MinMeet</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.0</strong><Rating name="read-only" value={4.0} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>Shop</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.0</strong><Rating name="read-only" value={4.0} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>TimeBox</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.0</strong><Rating name="read-only" value={4.0} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xl={2} lg={2} sm={3} xs={6}>
                    <Link to={`/tool/preview/werwopeirwer`} style={{textDecoration: 'none'}}>
                        <Card className={classes.tcard}>
                            <CardActionArea>
                                <CardMedia component="img" alt="tool logo" height="110" image={Logo} title="tool logo" className={classes.tcardBGTop} />
                                <CardContent>
                                    <Box display="flex" flexDirection="column" m={-0.4}>
                                        <Box mb={3}>
                                            <Typography className="f-15"><strong>Audit</strong></Typography>
                                            <Typography className="f-11">Used by 30 Companies</Typography>
                                        </Box>
                                        <Grid container justify="space-between" alignItems="center">
                                            <Grid><Box color="primary.main" borderRadius={10}><IShoppingCart className="f-20" /></Box></Grid>
                                            <Grid item><Box display="flex" alignItems="center"><strong>4.0</strong><Rating name="read-only" value={4.0} precision={0.1} size="small" readOnly/></Box></Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}