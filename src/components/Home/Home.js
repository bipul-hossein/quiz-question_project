import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { Header } from '../Header/Header';

const Home = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className='mt-5 bg-blue-100 pb-7'>
                <h2 className='text-4xl py-8 font-semibold'>Explore and answer our latest quizzes</h2>
                <div className='flex flex-wrap gap-4 flex-col justify-evenly items-center py-6  md:flex-row sm:flex-row'>
                    {
                        data.map(singleQuizCategory => <Cart
                            key={singleQuizCategory.id}
                            data={singleQuizCategory}
                        ></Cart>
                        )

                    }
                </div>
            </div>
        </div>
    );
};
export default Home;