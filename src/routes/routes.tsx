import Root from './root';
import Post from './posts/post';
import UpdatePostPage from './posts/updatePost';
import PostCreator from './posts/addPost';
import GetPosts from './posts/getPosts';
import RegisterPage from './users/register';
import LoginPage from './users/login';
import ErrorPage from '../routes/error-page.tsx';

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/published/:slug',
    element: <Post />,
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
];
