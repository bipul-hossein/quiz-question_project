import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Topics = () => {
    const { data } = useLoaderData()
    return (
        <div className='bg-blue-50 pb-7 '>
            <h2 className='text-4xl py-5 font-semibold mt-4'>Explore and answer our latest quizzes</h2>
            <div className='flex flex-wrap gap-4 flex-col justify-evenly items-center py-6  md:flex-row sm:flex-row'>
                {
                    data.map(singleQuizCategory => <Cart
                        key={singleQuizCategory.id}
                        data={singleQuizCategory}
                    ></Cart>)
                }
            </div>
        </div>
    );
};
export default Topics;