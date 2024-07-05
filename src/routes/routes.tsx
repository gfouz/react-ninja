import { lazy } from 'react';
const Root = lazy(() => import('./root'));
const RouteUpdatePost = lazy(() => import('./posts/route-update-post.tsx'));
const RouteCreatePost = lazy(() => import('./posts/routecreatepost.tsx'));
const RegisterPage = lazy(() => import('./users/register'));
const LoginPage = lazy(() => import('./users/login'));
const ErrorPage = lazy(() => import('../routes/error-page.tsx'));
const PostLayout = lazy(() => import('../components/post/PostLayout.tsx'));
const Dashboard = lazy(() => import('./posts/dashboard.tsx'));
const Post = lazy(() => import('../components/post/Post.tsx'));
const Blog = lazy(() => import('./blog.tsx'));
const About = lazy(() => import('./about.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/me',
    element: <About />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/blog-dashboard',
    element: <Blog />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/published/:slug',
    element: <PostLayout />,
    errorElement: <ErrorPage />,
  },

  {
    path: '/create/post',
    element: <RouteCreatePost />,
  },
  {
    path: 'update/post',
    element: <RouteUpdatePost />,
  },
  {
    path: 'register/',
    element: <RegisterPage />,
  },
  {
    path: 'login/',
    element: <LoginPage />,
  },
  {
    path: 'layout/',
    element: <PostLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'publicar/',
    element: <Post />,
    errorElement: <ErrorPage />,
  },
];
