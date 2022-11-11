import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes/Routes';

function App() {
  return (
    <div className="">
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
