import { Container, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// images 
import seetp1 from '../../../assets/sheetp1.webp'

const SpreadsheetSection = () => {
    return (
        <div className='mt-20 mb-20'>
            <Container>
                <Typography variant="h3" align="center" sx={{ fontSize: '3rem', fontWeight: 700 }}>
                    Four key questions answered by Crest
                </Typography>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-16 gap-8'>
                    <div className='flex-1'>

                        <Accordion className='border-none'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                    Accurate Demand Forecasting
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts do not: trends, real-time market signals, promotional activities, and even logistics disruptions. <br></br>
                                <button className='btn-outline px-6 py-3'>Learn More<ArrowForwardIcon className='text-[#A771E3]'/></button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                HELIX: Workflow Automation
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts do not: trends, real-time market signals, promotional activities, and even logistics disruptions. <br></br>
                            <button className='btn-outline px-6 py-3'>Learn More<ArrowForwardIcon className='text-[#A771E3]'/></button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                   Custom Dashboard
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts do not: trends, real-time market signals, promotional activities, and even logistics disruptions. <br></br>
                            <button className='btn-outline px-6 py-3'>Learn More<ArrowForwardIcon className='text-[#A771E3]'/></button>
                            </AccordionDetails>
                            <AccordionActions>
                                <Button>Cancel</Button>
                                <Button>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                                Workflow Automation is good think
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts do not: trends, real-time market signals, promotional activities, and even logistics disruptions. <br></br>
                            <button className='btn-outline px-6 py-3'>Learn More<ArrowForwardIcon className='text-[#A771E3]'/></button>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography variant='h6' sx={{ fontSize: '1.5rem', fontWeight: 600 }}>
                               Good  Workflow Automation
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts do not: trends, real-time market signals, promotional activities, and even logistics disruptions. <br></br>
                            <button className='btn-outline px-6 py-3'>Learn More<ArrowForwardIcon className='text-[#A771E3]'/></button>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div style={{
                        flex: 1,
                        backgroundImage: 'linear-gradient(142deg, var(--salmon), var(--medium-purple))',
                        borderRadius: '25px'
                    }} className='p-16'>
                        <img src={seetp1} alt="seet image " />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SpreadsheetSection;