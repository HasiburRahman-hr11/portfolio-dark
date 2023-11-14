import React from "react";
import "./About.css";
import Navigation from "../../Components/Navigation/Navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Fade from "react-reveal/Fade";
import cv from "../../assets/hasibur-rahman-cv.pdf";

import myImg from "../../assets/images/hasibur-rahman.jpg";

const mySkills = ['HTML5', 'CSS3', 'JavaScript', 'ReactJs', 'NodeJs','MongoDB', 'ExpressJs', 'TypeScript', 'NextJs', 'ReactNative', 'Redux', 'WordPress', 'Shopify', 'Webflow', 'Tailwind', 'Bootstrap', 'MaterialUI', 'GitHub', 'Firebase']

const About = () => {
  return (
    <main>
      <Navigation />
      <div className="about_page page_fixed">
        <Container fixed>
          <Box component="div" className="custom_scrollbar page_fixed_wrapper">
            <Grid
              container
              spacing={4}
              sx={{
                flexDirection: {
                  xs: "column-reverse",
                  md: "row",
                },
              }}
            >
              <Grid item md={8} xs={12}>
                <Fade>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: {
                        md: "35px",
                        sm: "30px",
                        xs: "25px",
                      },
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    About Me
                  </Typography>

                  <p
                    style={{
                      maxWidth: "500px",
                      letterSpacing: "2px",
                      color: "#ddd",
                      marginBottom: "20px",
                    }}
                  >
                    Hi! I am Hasibur Rahman, a full-stack web developer from
                    Dhaka, Bangladesh. I have been developing websites for over
                    2 years and now it's became a passion to me. I enjoy
                    creating beautiful and functional websites.
                    <br />I prefer to keep learning, continue challenging
                    myself, and do interesting things that matter.
                  </p>

                  <a href={cv} className="btn btn_secondary" download>
                    Download CV
                  </a>

                  <Box
                    component="div"
                    className="education_wrapper"
                    sx={{
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: {
                          md: "30px",
                          sm: "28px",
                          xs: "22px",
                        },
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      My Education
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item md={4} sm={6} xs={12}>
                        <div className="education_item">
                          <h3>
                            BBA <span>(Marketing)</span>
                          </h3>
                          <h4>Bachelor of Business Administration</h4>
                          <p className="education_year">Year: 2016 - 2022</p>
                          <p className="education_result">CGPA: 3.08</p>
                        </div>
                      </Grid>
                      <Grid item md={4} sm={6} xs={12}>
                        <div className="education_item">
                          <h3>
                            HSC <span>(Business Studies)</span>
                          </h3>
                          <h4>Higher Secondary School Certificate</h4>
                          <p className="education_year">Year: 2014 - 2016</p>
                          <p className="education_result">CGPA: 5.00</p>
                        </div>
                      </Grid>
                      <Grid item md={4} sm={6} xs={12}>
                        <div className="education_item">
                          <h3>
                            SSC <span>(Business Studies)</span>
                          </h3>
                          <h4>Secondary School Certificate</h4>
                          <p className="education_year">Year: 2009 - 2014</p>
                          <p className="education_result">CGPA: 5.00</p>
                        </div>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box
                    component="div"
                    className="skills_wrapper"
                    sx={{
                      marginTop: "40px",
                    }}
                  >
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: {
                          md: "30px",
                          sm: "28px",
                          xs: "22px",
                        },
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      My Skills
                    </Typography>

                    <ul className="skills">
                        {mySkills.map((skill , index)=>(
                            <li className="skill_item" key={index}>{skill}</li>
                        ))}
                    </ul>
                  </Box>
                </Fade>
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{
                  paddingRight: {
                    sm: "20px",
                    xs: "0",
                  },
                }}
              >
                <Fade>
                  <div className="about_img_wrapper">
                    <img src={myImg} alt="Hasibur Rahman" />
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </main>
  );
};

export default About;
