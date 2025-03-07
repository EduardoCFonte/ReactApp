import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AddJobPage from './pages/AddJobPage';
import HomePage from './pages/HomePage';
import JobPage, { jobLoader } from './pages/JobPage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobPage/>}/>
      <Route path='/job/:id' element={<JobPage/>} loader ={ jobLoader}/>
      <Route path = "/*" element={<NotFoundPage/>}/>
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