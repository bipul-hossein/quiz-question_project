import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Queston from '../Question/Queston';

const QnoCaDetails = () => {
    const {data} = useLoaderData();
    const quesCategoryDetails = data.questions;
    
    return (
        <div className='bg-blue-100'>
            <h1 className='text-3xl py-5 font-semibold'>Quiz Of {data.name} </h1>
           <div className='flex flex-col items-center gap-4 my-5'>
           {
                quesCategoryDetails.map(everyQno =><Queston 
                key={everyQno.id}
        
                everyQno = {everyQno}
                ></Queston>)
            }      
           </div>
        </div>
    );
};

export default QnoCaDetails;