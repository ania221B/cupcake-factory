import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  AllBlogArticles,
  AllProducts,
  BaseLayout,
  Blog,
  Contact,
  Error,
  Home,
  Store
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout></BaseLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'store',
        children: [
          {
            index: true,
            element: <Store></Store>
          },
          {
            path: 'all-products',
            element: <AllProducts></AllProducts>
          }
        ]
      },
      {
        path: 'blog',
        children: [
          {
            index: true,
            element: <Blog></Blog>
          },
          {
            path: 'all-articles',
            element: <AllBlogArticles></AllBlogArticles>
          }
        ]
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
