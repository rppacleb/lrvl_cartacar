import { Box, Button, Input } from '@material-ui/core'

export const File = ({ logo, setLogo }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box mb={2} className="personal-logo-xl personal-logo-flat-top" style={{backgroundImage: `url(${logo.object})`, minWidth: '13rem'}}></Box>
            <Button variant="contained" color="primary" component="label" style={{borderRadius: '10px'}} fullWidth>
                Change Logo
                <input 
                    type="file" 
                    hidden 
                    onChange={(e)=>setLogo({file: e.target.files[0], object: URL.createObjectURL(e.target.files[0]), name: e.target.files[0].name})} 
                    accept="image/*" 
                />
            </Button>
        </Box>
    )
}