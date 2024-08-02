import { Container, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// img 
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#151218] pt-10 md:pt-32'>

            <Container className=' '>
                <div style={{
                        flex: 1,
                        backgroundImage: 'linear-gradient(142deg, var(--salmon), var(--medium-purple))',
                        borderRadius: '25px'
                    }} className='p-5 md:p-20 h-[400px] text-center md-10 md:mb-44'>
                    <h2 className='text-2xl md:text-6xl font-bold text-white'>You can grow faster than you think!</h2>
                    <p className='w-[80%] mx-auto mt-16'>Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
                    <button className='py-2 px-6 bg-black text-white rounded-3xl mt-8 hover:bg-white hover:text-black'>Get started with Crest</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-evenly'>
                    <div className=" mt-6 md:mt-0">
                        <img src={logo} alt="" />
                        <h2 className='text-1xl text-white mt-10'>
                            Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
                        </h2>
                    </div>
                    <div className='text-white w-[100px] mx-auto '>
                        <h2 className='text-2xl'>Explore</h2>
                        <ul>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>Customer Stories</li>
                            <li>Career</li>
                            <li>Career</li>

                        </ul>
                    </div>
                    <div className='text-white w-[100px] mx-auto '>
                        <h2 className='text-2xl'>Learn</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Pricing</li>
                            <li>Blog</li>

                        </ul>
                    </div>
                    <div className='text-white w-[200px] mx-auto '>
                        <h2 className='text-2xl'>Contact Crest</h2>
                        <h2 className=' mb-6 mt-4'>sales@getcrest.ai</h2>
                        <h2 className='mb-6 mt-4'>Registered Office: <br />
                            1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</h2>
                        <p>Corporate Office: <br />
                            291, All Time Space, 4th Floor,
                            15th A Cross, Sector - 6,
                            HSR Layout, Bengaluru,
                            India. 560102</p>
                        <IconButton aria-label="delete">
                            <TwitterIcon className='text-[#E9E9E9]' />
                        </IconButton>
                        <IconButton aria-label="delete" disabled color="primary">
                            <FacebookOutlinedIcon className='text-[#E9E9E9]' />
                        </IconButton>
                        <IconButton color="secondary" aria-label="add an alarm">
                            <InstagramIcon className='text-[#E9E9E9]' />
                        </IconButton>
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <LinkedInIcon className='text-[#E9E9E9]' />
                        </IconButton>
                    </div>
                </div>
                <h2 className='mt-10 text-white'>
                    Copyright 2024 Crest Terms of Service    Privacy Policy <br />
                    Conifer Innovations Private Limited <br />
                    CIN: U72900KA2022PTC163144
                    CDN: U72900KA2022PTC163
                </h2>
            </Container>
        </div>
    );
};

export default Footer;