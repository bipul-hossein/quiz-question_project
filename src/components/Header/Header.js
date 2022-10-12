export const Header = () => {
  return (
    <div className="flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-blue-50 ">
    
      <div className="flex flex-col items-start w-3/5 px-4 mx-auto md:px-0">
        <div className="mb-12 lg:my-10 lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            WECOME TO YOU
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Web Quizzes can help
            <br className="hidden md:block" />
            you to improve your web develop{''}
            <span className="inline-block text-purple-400">
              ment Skills
            </span>
          </h2>
          <p className="pr-5 mb-5 text-gray-700 text-xl text-start md:text-2xl">
            This quiz covers all of the topics learnt in the "Introduction to Web Development" e-learning environment. There are no trick questions and all of the answers have been given at some point in the online sessions - recap using the...
          </p>
          <div className="flex justify-center flex-col md:flex-row">
            <p
              className="inline-flex items-center justify-center px-6 mr-6 font-medium tracking-wide transition duration-200 shadow-md bg-gray-700 text-red-500 text-xl text-semibold border-solid border-2 border-red-200 rounded-lg md:text-2xl"
            >
              Get started
            </p>
            <p
              className="inline-flex items-center font-semibold text-2xl text-semibold transition-colors duration-200 hover:text-purple-700"
            >
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};