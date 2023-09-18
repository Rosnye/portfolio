import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Box,Container} from '@mui/material/';
import './About.css'

const Encabezado = () => {


    return(

        <Container fixed className='Contain'>


        {/* Botones Principales Sobre mi */}
                <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
                }}
            >
                <h2>Mi nombre es David y esto es mi portafolio</h2>
                <p>Mi nombre es david y soy desarrollador web con React</p>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
                </ButtonGroup>
            </Box>

            <img src="https://github.com/Rosnye.png" alt="Profile github" className='profile'/>

        </Container>

    );
}

export default Encabezado