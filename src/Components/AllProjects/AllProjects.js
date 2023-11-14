import React from 'react';
import Grid from '@mui/material/Grid';
import Project from '../Project/Project';
import Slide from 'react-reveal/Slide';

const AllProjects = ({ projects }) => {
    return (
        <Grid container spacing={3}>
            {projects.map(project => (
                <Grid item md={6} xs={12} key={project.link}>
                    <Slide bottom>
                        <Project project={project} />
                    </Slide>
                </Grid>
            ))}

        </Grid>
    );
};

export default AllProjects;