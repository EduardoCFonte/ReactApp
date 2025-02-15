import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="home" element={<h1>My App</h1>} />
    </Route>)
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}
      />
    </>
  );
};

export default App;