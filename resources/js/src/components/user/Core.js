import { useState, useEffect  } from "react"
import { Container, Box } from "@material-ui/core"


import { Navbar } from "../layouts/Navbar"
import { Products } from "./home/Index"
import { WebRoute } from "../../core/Router/UserRoute"

export const Core = () => {
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