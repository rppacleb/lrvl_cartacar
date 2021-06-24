import { useState, useEffect  } from "react"
import { Container, Box } from "@material-ui/core"


import { Navbar } from "../layouts/Navbar"
import { Products } from "./Products/Index"

export const Core = () => {
    const [auth, setAuth] = useState(JSON.parse(document.getElementById('uroot').getAttribute('auth')))
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
                    <Products name={name} />
                </Container>
            </Box>
        </>
    )
}