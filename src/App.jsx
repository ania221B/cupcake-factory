import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, BaseLayout, Blog, Contact, Error, Home, Store } from './pages'

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
        element: <Store></Store>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
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
