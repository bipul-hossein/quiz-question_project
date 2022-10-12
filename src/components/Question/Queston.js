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
      <h3 className='flex justify-center items-center text-3xl py-4 px-5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
          <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
        </svg>
      {qno}
      </h3>
      <p><svg onClick={() => rightAnswer(correctAnswer)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
      </svg></p>
      </div>

      <div className='grid grid-cols-2 gap-4 text-xl w-10/12 py-4 mx-auto'>
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