import Navbar from '../../components/navbar/Navbar.tsx';
import Login from '../../components/login/Login.tsx';

const links = ['/', '/register', '/login', '/blog'];

const LoginPage = () => {
  return (
    <>
      <Navbar links={links} />
      <Login />
    </>
  );
};

export default LoginPage;
