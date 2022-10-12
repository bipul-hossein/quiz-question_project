import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ data }) => {
    const { id, name, logo, total } = data;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/home/${id}`)
    }
    
    // console.log(props)
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-200 text-gray-900 border-solid border-2 border-gray-300">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-200 border-solid border-2 border-red-100" />
            <div className="flex flex-col justify-between">
                <div className="p-2 px-2 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <h2 className="text-2xl font-semibold">QUIZ: {total}</h2>
                </div>
                <button onClick={handleNavigate} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-700 text-red-500 text-2xl text-semibold border-solid border-2 border-red-200">Start Quiz<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Cart;