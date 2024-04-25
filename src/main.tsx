import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { list } from './routes/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Loader = () => {
  return <h1>Loading...</h1>;
};

const queryClient = new QueryClient();

const router = createBrowserRouter(list.map((item) => item));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
);
