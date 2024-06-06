
import {  Container, Typography } from '@mui/material';
// card images 
import c1 from '../../../assets/c1.svg'
import c2 from '../../../assets/c2.svg'
import c3 from '../../../assets/c4.svg'
import c4 from '../../../assets/c33.svg'


const KeyQuestions = () => {
    return (
        <div>
            <Container className='mt-20'>
                <Typography variant="h3" align="center" sx={{ fontSize: '3rem', fontWeight: 700 }}>
                    Four key questions answered by Crest
                </Typography>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20'>
                    <div className="max-[300px] p-6 bg-[#F1E9FC] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className='w-[56px] h-[56px] mb-6' src={c1} alt="" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What to order</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>
                    <div className="max-[300px] p-6 bg-[#F1E9FC] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className='w-[56px] h-[56px] mb-6' src={c2} alt="" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">When to order</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you are never left guessing.</p>
                    </div>
                    <div className="max-[300px] p-6 bg-[#F1E9FC] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className='w-[56px] h-[56px] mb-6' src={c3} alt="" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How much to stock</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
                    </div>
                    <div className="max-[300px] p-6 bg-[#F1E9FC] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className='w-[56px] h-[56px] mb-6' src={c4} alt="" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Where to place</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Our tool suggests how to move stock within your supply chain. So you all always have products available across cities.</p>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default KeyQuestions;