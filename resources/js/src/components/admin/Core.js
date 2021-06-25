import { useState, useEffect } from "react"
import { Container, Box, makeStyles, fade } from "@material-ui/core"


import { WebRoute } from "../../core/Router/AdminRoute"
import { Navbar } from "../layouts/Navbar"
import { Products } from "../home/Index"

export const Core = () => {
    const [auth, setAuth] = useState(JSON.parse(document.getElementById('aroot').getAttribute('auth')))
    const [name, setName] = useState('')
    useEffect(() => {
        let n = auth.email.split('@');
        console.log(n);
        setName(n[0])
    }, [])
    return (
        <>
            <Navbar />
            <Box mt={10}>
                <Container>
                    <WebRoute />
                </Container>
            </Box>
        </>
    )
}