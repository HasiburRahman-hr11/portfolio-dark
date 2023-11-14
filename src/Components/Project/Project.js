import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Project = ({ project }) => {
    return (
        <Box component="div" className="project">
            <Box component="div" sx={{
                padding: {
                    md: '20px 20px',
                    xs: '10px 10px'
                },
                borderRadius: '5px',
                backgroundColor: '#191919',
                position: 'relative',
                overflow: 'hidden'
            }}>

                <img src={project.image} alt="" />

                <div className="project_content">
                    <div>
                        <Typography variant="h3" component="h3" sx={{
                            fontSize: {
                                md: '25px',
                                sm: '22px',
                                xs: '20px'
                            },
                            fontWeight: '500',
                            fontFamily: "'Oswald', sans-serif",
                            marginBottom: '15px',
                            color: '#ddd'
                        }}>
                            {project.title}
                        </Typography>
                        <Box component="div" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Link to={`/projects/${project._id}`} className="project_btn">Details</Link>
                            <a href={project.link} className="project_btn" target="_blank" rel="noreferrer">Demo</a>
                        </Box>
                    </div>
                </div>
                <div className="project_content_mobile">
                    <Typography variant="h3" component="h3" sx={{
                        fontSize: {
                            sm: '20px',
                            xs: '18px'
                        },
                        fontWeight: '500',
                        fontFamily: "'Oswald', sans-serif",
                        marginBottom: '10px',
                        color: '#fff'
                    }}>
                        {project.title}
                    </Typography>
                    <Box component="div" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Link to={`/projects/${project._id}`} className="project_btn">Details</Link>

                        <a href={project.link} className="project_btn" target="_blank" rel="noreferrer">Demo</a>

                    </Box>
                </div>
            </Box>
        </Box>
    );
};

export default Project;