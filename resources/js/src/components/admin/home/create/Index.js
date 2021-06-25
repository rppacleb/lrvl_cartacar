import { Box, Button, Grid, TextField, fade, makeStyles, InputBase, } from "@material-ui/core";
import { DriveEtaRounded as IDriveEta, AttachMoneyRounded as IAttachMoney, DescriptionRounded as IDescription } from "@material-ui/icons";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from 'sweetalert';

import { File } from './File'

import Logo from '../../../../assets/images/icon.png'
import { request } from "../../../../core/request/API";

const style = makeStyles((theme) => ({
	search: {
		position: 'relative',
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
        alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(2, 2, 2, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export const Create = () => {
    let classes = style()
    let history = useHistory()
    const [logo, setLogo] = useState({file: '', object: Logo, name: ''})
    const [inputs, setInputs] = useState({name: '', amount: '', description: ''})

    const submitHandler = () => {
        if ((logo.file !== '') && (inputs.name !== '') && (inputs.amount !== '') && (inputs.description !== '')) {
            const form = new FormData(); 
            form.append('logo', logo.file, logo.name); 
            form.append('name', inputs.name); 
            form.append('amount', inputs.amount); 
            form.append('description', inputs.description); 

            swal({
                title: 'Are you sure?',
                text: 'We are about to create a new product',
                icon: "warning",
                buttons: ['Nope', 'Yes please'],
                dangerMode: true,
            }).then((confirm) => {
                const __attempt = async () => {
                    swal({
                        title: "Please give us a moment!",
                        text: "This may take a seconds or minute depending on the size of the data and/or your network connection",
                        icon: "warning",
                        buttons: !1,
                        closeOnClickOutside: !1,
                        closeOnEsc: !1
                    })

                    let rqx = await request('POST', `/api/product/create`, form)
                    console.log(rqx);

                    if (rqx.msg === 'success') {
                        swal.close()
                        history.push('/')
                    }
                }

                if (confirm) {
                    __attempt()
                }
            });

        } else {
            swal({
                title: "All fields Required!",
                text: "This also includes that you have to upload a logo for this product.",
                icon: "warning",
                button: 'I understand',
            })
        }
    }

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={5} mb={3}>
                <Box mb={2} className="f-20"><strong>Create Product</strong></Box>
                <Link to="/product/create"><Button variant="contained" color="primary" style={{borderRadius: '12px'}} onClick={submitHandler}>Create Now</Button></Link>
            </Box>
            <Box display="flex">
                <Box style={{width: '13rem'}} mr={3}>
                    <File logo={logo} setLogo={setLogo} />
                </Box>
                <Box width="100%" borderRadius={20}>
                    <Box mb={2} className="f-15"><strong>Information</strong></Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box className={classes.search} bgcolor="secondary.light" borderRadius={15}>
                                <Box className={classes.searchIcon} color="gray"><IDriveEta /></Box>
                                <InputBase fullWidth placeholder="Name" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Name' }}
                                onInput={(e) => setInputs({...inputs, name: e.target.value })}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className={classes.search} bgcolor="secondary.light" borderRadius={15}>
                                <Box className={classes.searchIcon} color="gray"><IAttachMoney /></Box>
                                <InputBase type="number" fullWidth placeholder="Amount" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Amount' }}
                                onInput={(e) => setInputs({...inputs, amount: e.target.value})}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.search} bgcolor="secondary.light" borderRadius={15}>
                                <Box className={classes.searchIcon} color="gray"><IDescription /></Box>
                                <InputBase type="number" fullWidth placeholder="Description" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Description' }} rows={6} rowsMax={6} multiline
                                onInput={(e) => setInputs({...inputs, description: e.target.value})}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}