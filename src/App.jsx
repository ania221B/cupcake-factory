import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  AllBlogPosts,
  AllProducts,
  BaseLayout,
  Blog,
  BookATable,
  Contact,
  Error,
  Faq,
  Home,
  Login,
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
            path: 'all-products/:category?',
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
        path: 'book-a-table',
        element: <BookATable></BookATable>
      },
      {
        path: 'faq',
        element: <Faq></Faq>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'cart',
        element: (
          <section className='section'>
            <h2 className='section__title'>Cart will be here</h2>
          </section>
        )
      },
      {
        path: 'account',
        element: (
          <section className='section'>
            <h2 className='section__title'>User account will be here</h2>
          </section>
        )
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
