
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Container, Grid } from '@mui/material';
// image import 
import author1 from '../../../assets/reviweA1.webp'
import author2 from '../../../assets/reviewA2.jpg'
import reviewlogo from '../../../assets/reviewlogo.svg'
import reviewp1 from '../../../assets/reviewP1.webp'
import reviewp2 from '../../../assets/reviewp2.webp'

const ReviewsSection = () => {

    return (
        <>
            <Container className='mt-20 '>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <Grid container spacing={8}>
                            <Grid item xs={7} className='mt-10'>
                                <h2>
                                    D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that is the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.
                                </h2>
                                <div className='grid grid-cols-1 md:grid-cols-2  items-center justify-around'>
                                    <div className='flex gap-3 items-center'>
                                        <img className='w-[60px] h-[60px] rounded-[50%]' src={author1} alt="review author" />
                                        <div>
                                            <h2 className='text-2xl font-bold'>Diksha Pande</h2>
                                            <h2 className='text-1xl font-bold'>Co-founder, Samosa Party</h2>
                                        </div>
                                    </div>
                                    <img className='w-[100px]' src={reviewlogo} alt="" />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-10'>
                                    <div className='bg-[#F1E9FC] w-[250px] text-center rounded-2xl p-6'>
                                        <h2 className='text-4xl font-semibold text-gradient'>upto 95%</h2>
                                        <h2>Demand Fulfilment</h2>
                                    </div>
                                    <div className='bg-[#F1E9FC] w-[250px] text-center rounded-2xl p-6'>
                                    <h2 className='text-4xl font-semibold text-gradient'>&lt; 3%</h2>
                                        <h2>Daily Stock-out</h2>
                                    </div>
                                    
                                </div>
                            </Grid>
                            <Grid item xs={5} className=''>
                                <div className=' md:w-[300px] h-[400px]  '>
                                <img  className="object-cover custom-object-position  h-[350px] border-2 rounded-lg border-purple-400" src={reviewp1} alt="" />
                                </div>
                            </Grid>

                        </Grid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid container spacing={8}>
                            <Grid item xs={7} className='mt-10'>
                                <h2>
                                As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.
                                While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.
                                </h2>
                                <div className='grid grid-cols-1 md:grid-cols-2  items-center justify-around'>
                                    <div className='flex gap-3 items-center'>
                                        <img className='w-[60px] h-[60px] rounded-[50%]' src={author2} alt="review author" />
                                        <div>
                                            <h2 className='text-2xl font-bold'>Kirti Goel</h2>
                                            <h2 className='text-1xl font-bold'>Co-founder, P-TAL</h2>
                                        </div>
                                    </div>
                                    <img className='w-[100px]' src={reviewlogo} alt="" />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-10'>
                                    <div className='bg-[#F1E9FC] w-[250px] text-center rounded-2xl p-6'>
                                        <h2 className='text-4xl font-semibold text-gradient'>upto 95%</h2>
                                        <h2>Demand Fulfilment</h2>
                                    </div>
                                    <div className='bg-[#F1E9FC] w-[250px] text-center rounded-2xl p-6'>
                                    <h2 className='text-4xl font-semibold text-gradient'>&lt; 3%</h2>
                                        <h2>Daily Stock-out</h2>
                                    </div>
                                    
                                </div>
                            </Grid>
                            <Grid item xs={5} className=''>
                                <div className=' md:w-[300px] h-[400px]  '>
                                <img  className="object-cover custom-object-position  h-[350px] border-2 rounded-lg border-purple-400" src={reviewp2} alt="" />
                                </div>
                            </Grid>

                        </Grid>
                    </SwiperSlide>
                    

                </Swiper>
            </Container>
        </>
    );
};

export default ReviewsSection;