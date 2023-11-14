import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import CancelIcon from '@mui/icons-material/Cancel';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import Fade from 'react-reveal/Fade';

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [alert, setAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_JS_USER_ID)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setAlert(true);
                setAlertType('success');
                setAlertMessage(' Email received successfully. I will reply you very soon.')
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                setAlert(true);
                setAlertType('error');
                setAlertMessage(" Couldn't receive your email. Please try again later.");
                setLoading(false);
            });
    };

    return (
        <main>
            <Navigation />
            <div className="contact_page page_fixed">
                <Container fixed>
                    <Box component="div" className="custom_scrollbar page_fixed_wrapper">
                        <Grid container spacing={4}>
                            <Grid item md={6} xs={12}>
                                <Fade>
                                    <Typography variant="h2" component="h2" sx={{
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: {
                                            md: '35px',
                                            sm: '28px',
                                            xs: '20px'
                                        },
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        marginBottom: '20px'
                                    }}>Contact Me</Typography>
                                    <p style={{
                                        maxWidth: '400px',
                                        letterSpacing: '2px',
                                        color: '#777'
                                    }}>
                                        Interested in working together or have any question? Feel free to drop a line. I will get back to you as soon as possible.
                                    </p>

                                    <Box component="div" sx={{
                                        marginTop: '30px',
                                        color: '#666',
                                        letterSpacing: '2px'
                                    }}>
                                        <h4 style={{
                                            marginBottom: '5px'
                                        }}>Email Me : <a href="mailto:mdhasiburrahman47@gmail.com" target='_blank' rel='noreferrer' >mdhasiburrahman47@gmail.com</a></h4>

                                        <h4>Whatsapp Me : <a href="https://api.whatsapp.com/send?phone=8801303606467" target='_blank' rel='noreferrer'>+880 1303 606467</a></h4>
                                    </Box>

                                    <Typography variant="h3" component="h3" sx={{
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: {
                                            md: '30px',
                                            sm: '25px',
                                            xs: '18px'
                                        },
                                        fontWeight: '500',
                                        marginBottom: '20px',
                                        marginTop: '20px'
                                    }}>Social Links</Typography>

                                    <ul className="social_menu">

                                        <li>
                                            <a href="https://www.linkedin.com/in/hasiburrahman-hr11/" target="_blank" rel="noreferrer">
                                                <LinkedInIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/Hasib11k" target="_blank" rel="noreferrer">
                                                <TwitterIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/HasiburRahman.hr11/" target="_blank" rel="noreferrer">
                                                <FacebookIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/HasiburRahman-hr11" target="_blank" rel="noreferrer">
                                                <GitHubIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </Fade>

                            </Grid>
                            <Grid item md={6} xs={12} sx={{display:'none'}}>
                                <Fade>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="input_group">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="contact_input"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="contact_input"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="contact_input"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <textarea
                                                placeholder="Message"
                                                className="contact_input"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="contact_btn">
                                                {loading ? (
                                                    <CircularProgress sx={{
                                                        width: '28px !important',
                                                        height: '28px !important',
                                                        color: '#000'
                                                    }} />
                                                ) : 'Submit'}
                                            </button>
                                        </div>
                                    </form>
                                </Fade>

                                {alert && (
                                    <p
                                        className={`contact_notification ${alertType === 'error' ? 'error' : 'success'}`}>
                                        <>
                                            {alertType === 'success' ? (
                                                <span>Thank you &#128522;. </span>
                                            ) : (
                                                <span>Sorry &#128557;. </span>
                                            )}
                                        </>
                                        {alertMessage}
                                        <CancelIcon
                                            sx={{
                                                marginLeft: '10px',
                                                cursor: 'pointer',
                                                width: '30px',
                                                height: '30px'
                                            }}
                                            onClick={() => setAlert(false)} />
                                    </p>
                                )}

                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </main>
    );
};

export default Contact;