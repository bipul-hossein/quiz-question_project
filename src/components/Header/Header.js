export const Header = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-blue-50">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
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
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            This quiz covers all of the topics learnt in the "Introduction to Web Development" e-learning environment. There are no trick questions and all of the answers have been given at some point in the online sessions - recap using the...
          </p>
          <div className="flex items-center">
            <p
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 shadow-md bg-gray-700 text-red-500 text-2xl text-semibold border-solid border-2 border-red-200 rounded-lg"
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