import React, { useEffect, useState } from 'react';
import './Projects.css';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AllProjects from '../../Components/AllProjects/AllProjects';
import { projects } from '../../projectsData';
import Loading from '../../Components/Loading/Loading';

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = () => {
            setAllProjects(projects);
            setLoading(false)
        }
        fetchProjects();
    }, []);

    if (loading) {
        return <Loading loading={loading} />
    }
    return (
        <>
            <Navigation />
            <div className="projects_page page_fixed">

                <Container fixed>
                    <Box component="div" className="custom_scrollbar page_fixed_wrapper">
                        <Box component="div" sx={{
                            textAlign: 'center',
                            marginBottom: {
                                md: '50px',
                                xs: '30px'
                            }
                        }}>
                            <Typography variant="h5" component="h5" sx={{
                                fontSize: {
                                    md: '22px',
                                    sm: '20px',
                                    xs: '18px'
                                },
                                fontWeight: 'normal',
                                fontFamily: "'Oswald', sans-serif",
                            }}>
                                Bunch of My Creations
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: {
                                    md: '45px',
                                    sm: '35px',
                                    xs: '28px'
                                },
                                fontWeight: 'bold',
                                textTransform: 'uppercase'
                            }}>My Projects</Typography>
                        </Box>

                        <AllProjects projects={allProjects} />
                    </Box>
                </Container>

            </div>

        </>
    );
};

export default Projects;