import { Grid, Box, Typography, makeStyles, Divider } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Facebook as IFacebook, Twitter as ITwitter, Instagram as IInstagram, LinkedIn as ILinkedIn } from '@material-ui/icons';

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

export const Products = ({ name }) => {
    let classes = styles();
    return (
        <>
            <Box display="flex" height="305px" alignItems="center" justifyContent="space-between" borderRadius={15} className={classes.bg1} mb={3}>
                <Box m={10} color="secondary.light">
                    <Typography className="f-30">Howdy, <strong>{name.toUpperCase()}</strong></Typography>
                    <Typography className="f-15">It's <strong>Add to Cart</strong> time.</Typography>
                </Box>
            </Box>

        </>
    )
}