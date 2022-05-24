import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            alignContent: 'center',
        }}>
            <Grid container
                sx={{
                    width: '40vw',
                    height: '90vh',
                    margin: 'auto auto'
                }}>
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box>
                        <h1>Sign Up</h1>
                    </Box>
                    <FormControl
                        fullWidth={true}
                        required={true}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            height: '70%',
                        }}>

                        <Box mb={2} sx={{ width: '60%' }}>
                            <TextField id="name" label="Name" variant="outlined" fullWidth={true} size='medium' required={true} />
                        </Box>
                        <Box mb={2} sx={{ width: '60%' }}>
                            <TextField id="email" label="Email" variant="outlined" fullWidth={true} size='medium' required={true} />
                        </Box>
                        <Box mb={2} sx={{ width: '60%' }}>
                            <Button variant="contained" fullWidth={true} size='large'
                            onClick={()=>navigate('/login')}
                            >Sign Up</Button>
                        </Box>
                    </FormControl>
                </Grid>

            </Grid>
        </Box>
    )
}
