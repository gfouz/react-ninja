import Navbar from '../../components/navbar/Navbar.tsx';
import Login from '../../components/login/Login.tsx';
import EnterpriseLogin from '../../components/login/EnterpriseLogin.tsx';

const links = ['/', '/register', '/login', '/blog-dashboard'];

const LoginPage = () => {
  return (
    <>
      <Navbar links={links} />
      {/*<Login />*/}
      <EnterpriseLogin />
    </>
  );
};

export default LoginPage;
