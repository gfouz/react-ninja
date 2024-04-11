import Root from './root';
import Post from './posts/post';
import UpdatePostPage from './posts/updatePost';
import PostCreator from './posts/addPost';
import GetPosts from './posts/getPosts';
import RegisterPage from './users/register';
import LoginPage from './users/login';
import ErrorPage from '../routes/error-page.tsx';
import PostLayout from '../components/post/PostLayout.tsx';

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/published/:slug',
    element: <PostLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'posts/',
    element: <GetPosts />,
  },
  {
    path: 'create/post',
    element: <PostCreator />,
  },
  {
    path: 'update/post',
    element: <UpdatePostPage />,
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
];
