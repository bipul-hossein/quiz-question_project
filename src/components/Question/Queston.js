import React from 'react';
import QnoOptions from '../QuestionOptions/QnoOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Queston = ({ everyQno }) => {
  const { question, options, correctAnswer } = everyQno;
  const regex = /(<([^>]+)>)/ig;
  const qno = question.replace(regex, '')
  const handleClick = (props) => {
    if (props === correctAnswer) {
      toast.success('Right Answer!!', { position: "top-center", theme: "colored" })
    }
    else {
      toast.warn('Wrong Answer!', { theme: "colored" })
    }
  }
  const rightAnswer = (props) => {
    toast.info(props, { position: "bottom-center", theme: "dark" })
  }

  return (
    <div className='w-9/12 rounded-md shadow-md bg-gray-100 text-gray-900 text-left'>

      <div className='flex justify-between items-end  py-4 px-5'>
      <h3 className='text-2xl py-4 px-5'><span className='font-semibold'>Quiz: </span>{qno}
      </h3>
      <p className='mr-5'><svg onClick={() => rightAnswer(correctAnswer)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
      </svg></p>
      </div>

      <div className='grid grid-cols-1 gap-4 text-xl w-10/12 py-4 mx-auto md:grid-cols-2'>
        {
          options.map(option => <QnoOptions
            key={option}
            option={option}
            handleClick={handleClick}

          ></QnoOptions>)
        }
        <ToastContainer />
      </div>
    </div>
  );
};

export default Queston;