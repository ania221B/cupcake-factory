import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const About = lazy(() => import('./pages/About'))
const Account = lazy(() => import('./pages/Account'))
const AllBlogPosts = lazy(() => import('./pages/AllBlogPosts'))
const AllProducts = lazy(() => import('./pages/AllProducts'))
const Blog = lazy(() => import('./pages/Blog'))
const BookATable = lazy(() => import('./pages/BookATable'))
const Cart = lazy(() => import('./pages/Cart'))
const Contact = lazy(() => import('./pages/Contact'))
const Faq = lazy(() => import('./pages/Faq'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const SinglePostPage = lazy(() => import('./pages/SinglePostPage'))
const SingleProductPage = lazy(() => import('./pages/SingleProductPage'))
const Store = lazy(() => import('./pages/Store'))

import { BaseLayout, Error } from './pages'
import { Loader } from './components/common'

function suspenseWrapped (Component) {
  return (
    <Suspense fallback={<Loader></Loader>}>
      <Component></Component>
    </Suspense>
  )
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BaseLayout></BaseLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          index: true,
          element: suspenseWrapped(Home)
        },
        {
          path: 'store',
          children: [
            {
              index: true,
              element: suspenseWrapped(Store)
            },
            {
              path: 'all-products/:category?',
              element: suspenseWrapped(AllProducts)
            },
            {
              path: ':productSlug',
              element: suspenseWrapped(SingleProductPage)
            }
          ]
        },
        {
          path: 'blog',
          children: [
            {
              index: true,
              element: suspenseWrapped(Blog)
            },
            {
              path: 'all-posts',
              element: suspenseWrapped(AllBlogPosts)
            },
            {
              path: ':postSlug',
              element: suspenseWrapped(SinglePostPage)
            }
          ]
        },
        {
          path: 'about',
          element: suspenseWrapped(About)
        },
        {
          path: 'contact',
          element: suspenseWrapped(Contact)
        },
        {
          path: 'book-a-table',
          element: suspenseWrapped(BookATable)
        },
        {
          path: 'faq',
          element: suspenseWrapped(Faq)
        },
        {
          path: 'login',
          element: suspenseWrapped(Login)
        },
        {
          path: 'cart',
          element: suspenseWrapped(Cart)
        },
        {
          path: 'account',
          element: suspenseWrapped(Account)
        }
      ]
    }
  ],
  {
    basename: '/cupcake-factory/'
  }
)

function App () {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
