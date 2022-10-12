import React from 'react';
const QnoOptions = ({option,handleClick}) => {
    return (
        <div className='bg-gray-200 border-solid border-2 border-gray-400 rounded-md p-3'>
            <p className=''><input  onClick={()=>handleClick(option)} type="radio" value="Male" name="gender"/> {option}</p> 
            
        </div>
    );
};

export default QnoOptions;