import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
// import  imge from assets folder 
import homeHeroBg from '../../../assets/home-hero-bg.svg'
import homeHeroLest from '../../../assets/Hero-left-Image.svg'
import heroSignature from '../../../assets/signeture.svg'
const HeroSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Full viewport height
    backgroundImage: `url(${homeHeroBg})`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        textAlign: 'center',
    },
}));

const TextContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxWidth: 'full', // Takes 50% width on medium and larger screens
        paddingRight: theme.spacing(2), // Add some spacing on the right for text
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4), // Add spacing below text on small screens
    },
}));

const HeroText = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3.5rem',
    },
}));

const HeroSubText = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.25rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
}));

const HeroButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 3),
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
        padding: theme.spacing(1, 2),
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
    },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end', // Align image to the right on larger screens
    alignItems: 'center',
    width: '100%',
    height: '100%', // Take full height of the parent
    position: 'relative', // Make the container position relative
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center', // Center image on smaller screens
    },
}));

const HeroImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%', // Take full height of the container
    objectFit: 'cover', // Ensure the image covers the entire area without distortion
    borderRadius: '8px',
    marginLeft: '-50px', // Adjust this value as needed
    [theme.breakpoints.down('md')]: {
        maxWidth: '300px', // Optional: Define max width on medium screens if needed
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '300px', // Optional: Define max width on small screens if needed
    },
}));

const HeroBanner = () => {
    return (
        <HeroSection className=' mr-0'>
            <Container maxWidth={false}
                sx={{
                    paddingRight: 0, // Set right padding to 0
                    width: {
                        xs: '100%', // 100% width on extra-small screens
                        sm: '600px', // 600px width on small screens
                        md: '800px', // 800px width on medium screens
                        lg: '1260px', // 1200px width on large screens
                        xl: '1200px', // 1200px width on extra-large screens
                    },
                    padding: {
                        xs: '0 16px', // Default horizontal padding on extra-small screens
                        sm: '0 24px', // Default horizontal padding on small screens
                        md: '0 10px', // Default horizontal padding on medium screens
                        lg: '0 32px', // Default horizontal padding on large screens
                        xl: '0 0px', // Default horizontal padding on extra-large screens
                    },
                }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <TextContainer className=' '>
                            <HeroText variant="h2" component="h1">
                                Every order <br />
                                fulfilled, on time.
                            </HeroText>
                            <HeroSubText variant='h6' component="p">
                                
                                    Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
                                
                            </HeroSubText>
                            <div className='flex gap-3'>
                            <button className='btn-outline button-outline:hover py-3 px-6'>
                                Get Started
                            </button>
                            <img src={heroSignature} alt="" />
                            </div>
                        </TextContainer>
                    </Grid>
                    <Grid item xs={12} md={6} className='pr-0'>
                        <ImageContainer className=' w-full'>
                            <HeroImage src={homeHeroLest} alt="Hero left" />


                        </ImageContainer>
                    </Grid>
                </Grid>
            </Container>
        </HeroSection>
    );
};

export default HeroBanner;
