import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  AllBlogPosts,
  AllProducts,
  BaseLayout,
  Blog,
  Contact,
  Error,
  Faq,
  Home,
  SinglePostPage,
  SingleProductPage,
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
          },
          {
            path: ':productSlug',
            element: <SingleProductPage></SingleProductPage>
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
            path: 'all-posts',
            element: <AllBlogPosts></AllBlogPosts>
          },
          {
            path: ':postSlug',
            element: <SinglePostPage></SinglePostPage>
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
      },
      {
        path: 'faq',
        element: <Faq></Faq>
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
