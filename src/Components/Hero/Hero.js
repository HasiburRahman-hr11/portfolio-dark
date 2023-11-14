import React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './Hero.css';
import Zoom from 'react-reveal/Zoom';

import cv from '../../assets/hasibur-rahman-cv.pdf';


const Hero = () => {
    return (
        <Container fixed>
            <Zoom>
                <Box
                    component="div"
                    className="hero_content"
                    sx={{
                        textTransform: 'uppercase'
                    }}>
                    <Typography
                        variant="h4"
                        component="h4"
                        className="hero_subtitle"
                        sx={{
                            fontSize: {
                                xs: '16px',
                                sm: '18px',
                                md: '20px'
                            },
                            fontWeight: 'normal',
                            fontFamily: "'Oswald', sans-serif",
                            letterSpacing: '5px',
                            color: '#ddd'
                        }}>
                        I am Hasibur Rahman
                    </Typography>
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: {
                                xs: '40px',
                                sm: '70px',
                                md: '80px'
                            },
                            fontWeight: 'bold',
                            fontFamily: "'Oswald', sans-serif"
                        }}>
                        Web Developer
                    </Typography>

                    <Box component="div" sx={{
                        mt: '30px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: {
                            xs: 'center',
                            md: 'flex-start'
                        }
                    }}>
                        <Link to="/projects" className="btn btn_primary" style={{
                            marginRight: '10px'
                        }}>Projects</Link>
                        <a href={cv} className="btn btn_secondary" download>Download CV</a>
                    </Box>
                </Box>
            </Zoom>
        </Container>
    );
};

export default Hero;