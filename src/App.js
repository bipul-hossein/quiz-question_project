import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import QnoCaDetails from './components/QuesCategoryDetails/QnoCaDetails';
import Error from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
      {
        path:'/',
        loader: async() => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)},
        element:<Home></Home>
      },
      {
        path:'/home',
        loader: async() => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)},
        element:<Home/>
      },
      {
        path:'/home/:questionId',
        loader: async({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.questionId}`)
        },
        element:<QnoCaDetails></QnoCaDetails>
      },
      {
        path:'/topics',
        loader: async() => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)},
        element:<Topics></Topics>
      },
      {
        path:'/statistics',
        loader: async() => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)},
        element:<Statistics></Statistics>
      },
     {
        path:'/blog',
        element:<Blog></Blog>
      },   
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;