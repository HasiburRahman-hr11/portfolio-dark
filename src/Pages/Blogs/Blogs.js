import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Blogs = () => {
    return (
        <main>
            <Navigation />
            <div className="blogs_page page_fixed">
                <Container fixed>
                    <Box component="div" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        minHeight: '100vh'
                    }}>
                        <Typography variant="h5" component="h5" sx={{
                            fontSize: {
                                md: '30px',
                                sm: '25px',
                                xs: '20px'
                            },
                            fontWeight: 'normal',
                            fontFamily: "'Oswald', sans-serif",
                        }}>
                            Blogs are coming SooooN
                        </Typography>
                    </Box>
                </Container>
            </div>

        </main>
    );
};

export default Blogs;